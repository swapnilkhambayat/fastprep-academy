const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://uagozckreuwfyfssnfcn.supabase.co', 'sb_publishable_pgCh-EN-NZhhiXUwOP7-pw_z-rp_zoa');

async function extractAndUploadBenchmarks(relativeFilePath, gradeLevel, subjectName) {
    try {
        // Resolve absolute path to avoid "file not found" errors
        const filePath = path.resolve(__dirname, relativeFilePath);
        
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found at: ${filePath}`);
        }

        console.log(`Starting extraction for Grade ${gradeLevel} ${subjectName}...`);
        const dataBuffer = fs.readFileSync(filePath);
        
        // Parse PDF - pdf-parse returns the function directly
        const data = await pdf(dataBuffer);
        
        // Extract text from parsed PDF
        const text = data.text;

        // Corrected Regex: Properly formatted named groups
        const benchmarkRegex = /(?<code>(?:ELA|MA)\.\d+\.[A-Z]+\.\d+\.\d+)(?::\s*|\s+)(?<description>[^]+?)(?=\n(?:ELA|MA|Benchmark Clarifications|$))/g;

        let match;
        const insertData = [];
        const seenCodes = new Set();
        const subjectId = subjectName.toUpperCase() === 'ELA' ? 1 : 2;

        while ((match = benchmarkRegex.exec(text)) !== null) {
            const code = match.groups.code;
            if (code.includes(`.${gradeLevel}.`) && !seenCodes.has(code)) {
                const cleanDescription = match.groups.description.trim().replace(/\s+/g, ' ');

                insertData.push({
                    code: code,
                    grade_id: parseInt(gradeLevel),
                    subject_id: subjectId,
                    title: cleanDescription.split('.')[0],
                    description: cleanDescription,
                    focus_area: code.split('.')[2] 
                });
                seenCodes.add(code);
            }
        }

        if (insertData.length === 0) {
            console.warn(`No benchmarks found for Grade ${gradeLevel}.`);
            return;
        }

        const { error } = await supabase
            .from('benchmarks')
            .upsert(insertData, { onConflict: 'code' });

        if (error) throw error;
        console.log(`✅ Success: Uploaded ${insertData.length} records for Grade ${gradeLevel} ${subjectName}.`);

    } catch (err) {
        console.error(`❌ Critical Error in Grade ${gradeLevel} ${subjectName}: ${err.message}`);
    }
}

// Process all grades (3-12) for both ELA and Math
async function processAllGrades() {
    console.log('Starting benchmark extraction for all grades...\n');
    
    // Process ELA for grades 3-12
    for (let grade = 3; grade <= 12; grade++) {
        await extractAndUploadBenchmarks('FAST ELA Standards 3-12.pdf', grade, 'ELA');
    }
    
    // Process Math for grades 3-12
    for (let grade = 3; grade <= 12; grade++) {
        await extractAndUploadBenchmarks('FAST Math Standards 3-12.pdf', grade, 'Math');
    }
    
    console.log('\n✅ All grades processed!');
}

// Run the extraction
processAllGrades().catch(err => {
    console.error('❌ Fatal error:', err.message);
    process.exit(1);
});
