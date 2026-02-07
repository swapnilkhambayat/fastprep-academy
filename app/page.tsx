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
  const [calcGrade, setCalcGrade] = useState('Grade 3 ELA Reading');
  const [userScore, setUserScore] = useState<number | ''>('');

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

  // Function to find the level based on score
  const calculateLevel = () => {
    if (userScore === '') return null;
    const gradeData = scoreData.find(s => s.assessment === calcGrade);
    if (!gradeData) return null;

    const score = Number(userScore);

    const getRange = (rangeStr: string) => {
      const [min, max] = rangeStr.split('-').map(Number);
      return { min, max };
    };

    if (score >= getRange(gradeData.l1).min && score <= getRange(gradeData.l1).max) return { lv: 1, label: "Inadequate", color: "bg-red-500" };
    if (score >= getRange(gradeData.l2).min && score <= getRange(gradeData.l2).max) return { lv: 2, label: "Below Grade", color: "bg-orange-500" };
    if (score >= getRange(gradeData.l3).min && score <= getRange(gradeData.l3).max) return { lv: 3, label: "On Grade Level", color: "bg-green-500" };
    if (score >= getRange(gradeData.l4).min && score <= getRange(gradeData.l4).max) return { lv: 4, label: "Proficient", color: "bg-blue-500" };
    if (score >= getRange(gradeData.l5).min && score <= getRange(gradeData.l5).max) return { lv: 5, label: "Exemplary", color: "bg-purple-500" };

    return { lv: '?', label: "Outside Known Range", color: "bg-gray-400" };
  };

  const result = calculateLevel();

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
                  href="#score-utility"
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
              Florida FAST results are reported on a scale of 1–5. Level 3 indicates **On Grade Level** performance, while PM3 results determine critical promotion milestones.
            </p>
          </div>

          {/* Visual Speedometer / Progress Track */}
          <div className="relative mb-12 px-4">
            <div className="h-4 w-full bg-gray-800 rounded-full flex overflow-hidden border border-white/10">
              <div className="w-1/5 bg-red-500 h-full border-r border-gray-900/50"></div>
              <div className="w-1/5 bg-orange-500 h-full border-r border-gray-900/50"></div>
              <div className="w-1/5 bg-green-500 h-full border-r border-gray-900/50"></div>
              <div className="w-1/5 bg-blue-500 h-full border-r border-gray-900/50"></div>
              <div className="w-1/5 bg-purple-500 h-full"></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-bold uppercase tracking-tighter text-gray-500">
              <span>Level 1</span>
              <span>Level 2</span>
              <span>Level 3</span>
              <span>Level 4</span>
              <span>Level 5</span>
            </div>
          </div>

          {/* Colored Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { lv: 1, color: "bg-red-500", border: "border-red-500/50", label: "Inadequate", desc: "Highly Likely to Need Support" },
              { lv: 2, color: "bg-orange-500", border: "border-orange-500/50", label: "Below Grade", desc: "Likely to Need Support" },
              { lv: 3, color: "bg-green-500", border: "border-green-500/50", label: "On Grade Level", desc: "May Need Support" },
              { lv: 4, color: "bg-blue-500", border: "border-blue-500/50", label: "Proficient", desc: "Likely to Excel" },
              { lv: 5, color: "bg-purple-500", border: "border-purple-500/50", label: "Exemplary", desc: "Highly Likely to Excel" }
            ].map((item) => (
              <div key={item.lv} className={`relative group overflow-hidden bg-white/5 border ${item.border} p-6 rounded-2xl text-center transition-all duration-300 hover:bg-white/10`}>
                {/* Subtle Glow Effect */}
                <div className={`absolute -top-10 -right-10 w-20 h-20 ${item.color} opacity-10 blur-3xl rounded-full`}></div>

                <div className={`${item.color} w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center font-black text-2xl shadow-lg ring-4 ring-gray-900`}>
                  {item.lv}
                </div>
                <h4 className="font-bold text-sm mb-1">{item.label}</h4>
                <p className="text-[10px] text-gray-400 leading-tight uppercase font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Critical Milestones */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-600/10 border border-red-500/20 rounded-2xl flex gap-4 hover:bg-red-600/20 transition-colors">
              <div className="bg-red-500/20 p-3 rounded-lg h-fit">
                <CheckCircle className="text-red-400 shrink-0" size={24} />
              </div>
              <div>
                <h5 className="font-bold text-red-300 mb-1">Grade 3 Promotion</h5>
                <p className="text-sm text-gray-300 leading-relaxed">Level 2 or higher on PM3 ELA Reading is required for promotion to Grade 4.</p>
              </div>
            </div>
            <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex gap-4 hover:bg-blue-600/20 transition-colors">
              <div className="bg-blue-500/20 p-3 rounded-lg h-fit">
                <GraduationCap className="text-blue-400 shrink-0" size={24} />
              </div>
              <div>
                <h5 className="font-bold text-blue-300 mb-1">Grade 10 Graduation</h5>
                <p className="text-sm text-gray-300 leading-relaxed">Passing PM3 of Grade 10 FAST ELA Reading is a mandatory graduation requirement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Score Calculator */}
      <section id="score-utility" className="py-12 bg-white scroll-mt-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-12 shadow-xl text-white">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  <Calculator /> FAST Score Calculator
                </h2>
                <p className="text-blue-100 mb-8">
                  Enter your child's scale score to instantly see their 2025-26 Achievement Level.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-blue-200">Select Assessment</label>
                    <select
                      className="w-full bg-blue-700 border border-blue-500 rounded-xl p-3 outline-none focus:ring-2 focus:ring-white transition"
                      value={calcGrade}
                      onChange={(e) => setCalcGrade(e.target.value)}
                    >
                      {scoreData.map((s, i) => (
                        <option key={i} value={s.assessment}>{s.assessment}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-blue-200">Enter Scale Score</label>
                    <input
                      type="number"
                      placeholder="e.g. 215"
                      className="w-full bg-blue-700 border border-blue-500 rounded-xl p-3 outline-none focus:ring-2 focus:ring-white transition placeholder:text-blue-300"
                      value={userScore}
                      onChange={(e) => setUserScore(e.target.value === '' ? '' : Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              {/* Results Display */}
              <div className="w-full md:w-64">
                <div className="bg-white rounded-2xl p-8 text-center text-gray-900 shadow-2xl min-h-[250px] flex flex-col justify-center items-center">
                  {result ? (
                    <>
                      <div className={`${result.color} text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl font-black mb-4 shadow-lg ring-4 ring-gray-100`}>
                        {result.lv}
                      </div>
                      <h4 className="text-xl font-bold">{result.label}</h4>
                      <p className="text-gray-500 text-sm mt-2 font-medium uppercase tracking-tight">Level Result</p>
                    </>
                  ) : (
                    <div className="text-gray-400">
                      <Target size={48} className="mx-auto mb-4 opacity-20" />
                      <p className="text-sm font-medium">Enter a score to see results</p>
                    </div>
                  )}
                </div>
              </div>
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