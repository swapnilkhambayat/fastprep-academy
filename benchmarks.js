const fs = require('fs');
const path = require('path');
// Go back to the basic require
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
        
        // pdf-parse fix: passing an empty options object helps prevent some internal debug checks
        // --- THE FIX START ---
        // Look for the function in all possible export locations
        let parseFunc;
        if (typeof pdfParser === 'function') {
            parseFunc = pdfParser;
        } else if (pdfParser && typeof pdfParser.default === 'function') {
            parseFunc = pdfParser.default;
        } else if (typeof (require('pdf-parse')) === 'function') {
            parseFunc = require('pdf-parse');
        }

        if (!parseFunc) {
            throw new Error("PDF library loaded but no function found. Please run: npm install pdf-parse");
        }

        const data = await parseFunc(dataBuffer);
        // --- THE FIX END ---

       // Corrected Regex: Removed the backslashes from the named group markers
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
        console.log(`✅ Success: Uploaded ${insertData.length} records.`);

    } catch (err) {
        console.error(`❌ Critical Error: ${err.message}`);
    }
}

// Ensure filenames match exactly what is in your folder
extractAndUploadBenchmarks('FAST ELA Standards 3-12.pdf', 3, 'ELA');
extractAndUploadBenchmarks('FAST Math Standards 3-12.pdf', 3, 'Math');