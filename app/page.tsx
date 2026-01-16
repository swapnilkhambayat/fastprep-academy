'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Note: Install icons with: npm install lucide-react
import { 
  CheckCircle, 
  Search, 
  Target, 
  ChevronRight, 
  Info, 
  TrendingUp, 
  Clock, 
  Calculator, 
  Monitor,
  GraduationCap
} from 'lucide-react';

export default function Home() {
  const [searchGrade, setSearchGrade] = useState('');

  // Official 2025-26 Scale Score Data
  const scoreData = [
    { assessment: "Grade 3 ELA Reading", l1: "140-185", l2: "186-200", l3: "201-212", l4: "213-224", l5: "225-260" },
    { assessment: "Grade 4 ELA Reading", l1: "154-198", l2: "199-212", l3: "213-223", l4: "224-236", l5: "237-270" },
    { assessment: "Grade 5 ELA Reading", l1: "160-205", l2: "206-221", l3: "222-231", l4: "232-245", l5: "246-279" },
    { assessment: "Grade 6 ELA Reading", l1: "161-208", l2: "209-224", l3: "225-236", l4: "237-249", l5: "250-284" },
    { assessment: "Grade 7 ELA Reading", l1: "165-214", l2: "215-231", l3: "232-241", l4: "242-256", l5: "257-292" },
    { assessment: "Grade 8 ELA Reading", l1: "169-219", l2: "220-237", l3: "238-250", l4: "251-261", l5: "262-300" },
    { assessment: "Grade 9 ELA Reading", l1: "174-223", l2: "224-241", l3: "242-253", l4: "254-266", l5: "267-303" },
    { assessment: "Grade 10 ELA Reading", l1: "179-229", l2: "230-246", l3: "247-257", l4: "258-270", l5: "271-308" },
    { assessment: "Grade 3 Mathematics", l1: "140-182", l2: "183-197", l3: "198-208", l4: "209-224", l5: "225-260" },
    { assessment: "Grade 4 Mathematics", l1: "155-199", l2: "200-210", l3: "211-220", l4: "221-237", l5: "238-273" },
    { assessment: "Grade 5 Mathematics", l1: "158-206", l2: "207-221", l3: "222-233", l4: "234-245", l5: "246-285" },
    { assessment: "Grade 6 Mathematics", l1: "168-212", l2: "213-228", l3: "229-238", l4: "239-253", l5: "254-287" },
    { assessment: "Grade 7 Mathematics", l1: "175-222", l2: "223-234", l3: "235-246", l4: "247-257", l5: "258-288" },
    { assessment: "Grade 8 Mathematics", l1: "183-226", l2: "227-243", l3: "244-253", l4: "254-262", l5: "263-291" },
  ];

  const filteredScores = scoreData.filter(s => 
    s.assessment.toLowerCase().includes(searchGrade.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <TrendingUp size={14} /> 2025–2026 Academic Season
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Ace Your Florida FAST Exams with Realistic Simulations
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Master ELA Reading (Grades 3–10) and Math (Grades 3–8) through adaptive practice tests that mirror the real FAST PM1, PM2, and PM3 exams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  Start Free Trial <ChevronRight size={20} />
                </Link>
                {/* Fixed "Check Score Ranges" Link */}
                <Link
                  href="#scores"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md border border-blue-600 hover:bg-blue-50 transition"
                >
                  Check Score Ranges
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/Student_solving_exam_1.png"
                alt="Student practicing FAST exam"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Level Dashboard Section */}
      <section id="dashboard" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievement Level Dashboard</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Level 3 indicates <strong>On Grade Level</strong> performance. PM3 results determine critical promotion and graduation milestones.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {[
              { lv: 1, color: "bg-red-500", label: "Inadequate" },
              { lv: 2, color: "bg-orange-500", label: "Below Grade" },
              { lv: 3, color: "bg-green-500", label: "On Grade Level" },
              { lv: 4, color: "bg-blue-500", label: "Proficient" },
              { lv: 5, color: "bg-purple-500", label: "Exemplary" }
            ].map((item) => (
              <div key={item.lv} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                <div className={`${item.color} w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-black text-xl shadow-lg`}>{item.lv}</div>
                <h4 className="font-bold text-sm">{item.label}</h4>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-600/20 border border-red-500/30 rounded-2xl flex gap-4">
              <CheckCircle className="text-red-400 shrink-0" size={32} />
              <div>
                <h5 className="font-bold text-red-300 mb-1">Grade 3 Promotion</h5>
                <p className="text-sm text-gray-300">Level 2 or higher on PM3 ELA Reading is required for promotion to Grade 4.</p>
              </div>
            </div>
            <div className="p-6 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex gap-4">
              <GraduationCap className="text-blue-400 shrink-0" size={32} />
              <div>
                <h5 className="font-bold text-blue-300 mb-1">Grade 10 Graduation</h5>
                <p className="text-sm text-gray-300">Passing PM3 of Grade 10 FAST ELA Reading is a graduation requirement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade-Specific Score Lookup Section (This is the anchor target) */}
      <section id="scores" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Target className="text-blue-600" /> B.E.S.T. Scale Score Lookup
                </h2>
                <p className="text-gray-600 mt-2">Filter by grade to find your target achievement level ranges.</p>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="e.g. Grade 4 Reading..." 
                  className="w-full text-gray-500 border border-gray-300 rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  onChange={(e) => setSearchGrade(e.target.value)}
                />
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                  <tr>
                    <th className="px-6 py-4">Assessment</th>
                    <th className="px-4 py-4 text-center">Level 1</th>
                    <th className="px-4 py-4 text-center">Level 2</th>
                    <th className="px-4 py-4 text-center bg-blue-600 text-white">Level 3 (Goal)</th>
                    <th className="px-4 py-4 text-center">Level 4</th>
                    <th className="px-4 py-4 text-center">Level 5</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredScores.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-5 font-bold text-gray-800">{row.assessment}</td>
                      <td className="px-4 py-5 text-center text-gray-500">{row.l1}</td>
                      <td className="px-4 py-5 text-center text-gray-500">{row.l2}</td>
                      <td className="px-4 py-5 text-center font-black text-blue-700 bg-blue-50/50">{row.l3}</td>
                      <td className="px-4 py-5 text-center text-gray-500">{row.l4}</td>
                      <td className="px-4 py-5 text-center text-gray-500">{row.l5}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-gray-500 italic">
              Data sourced from FDOE 2025-26 FAST Fact Sheet.
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Monitor, title: "Computer Adaptive", desc: "Test difficulty adjusts in real-time based on your responses." },
              { icon: Clock, title: "Self-Paced", desc: "90–120 minute sessions, with extensions allowed until the end of day." },
              { icon: Calculator, title: "Integrated Tools", desc: "Scientific and 4-function calculators for Grade 6-8 Math." },
              { icon: Target, title: "Progress Monitoring", desc: "Three annual events (PM1, PM2, PM3) to track your growth." }
            ].map((f, i) => (
              <div key={i} className="text-center group">
                <div className="bg-blue-50 text-blue-600 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <f.icon size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Boost Your FAST Scores?</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of Florida students preparing confidently for success.</p>
          <Link
            href="/signup"
            className="px-10 py-5 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-gray-50 transition text-lg inline-flex items-center gap-2"
          >
            Get Started Free <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <p className="text-sm">&copy; 2026 FastPrep Academy. All rights reserved.</p>
          <div className="mt-6 space-x-6 text-xs uppercase tracking-widest font-bold">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
          </div>
        </div>
      </footer>
    </>
  );
}