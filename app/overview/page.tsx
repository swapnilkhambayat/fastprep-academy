'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Reminder: Run 'npm install lucide-react' to resolve module errors
import { 
  Calendar, 
  Clock, 
  Target, 
  Calculator, 
  Search, 
  Info, 
  ChevronRight, 
  ShieldCheck,
  Monitor,
  GraduationCap,
  TrendingUp,
  LayoutDashboard
} from 'lucide-react';

export default function OverviewPage() {
  const [searchGrade, setSearchGrade] = useState('');

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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Dynamic Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 py-4 shadow-sm">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src="/images/fastprep_logo_horizontal.png" alt="FastPrep Academy" width={180} height={60} priority />
          <nav className="flex space-x-8 font-bold text-slate-600 text-sm">
            <a href="#windows" className="hover:text-blue-600 transition flex items-center gap-1">
              <Calendar size={16} /> Schedule
            </a>
            <a href="#scores" className="hover:text-blue-600 transition flex items-center gap-1">
              <Search size={16} /> Scores
            </a>
            <a href="#mastery" className="hover:text-blue-600 transition flex items-center gap-1">
              <LayoutDashboard size={16} /> Achievement
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-6xl py-12">
        
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-100">
            <TrendingUp size={16} /> 2025–26 Official FAST Fact Sheet
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Everything You Need for <br /><span className="text-blue-600">FAST Success.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Florida's computer-adaptive system for ELA Reading (Grades 3-10) and Mathematics (Grades 3-8)[cite: 146, 152].
          </p>
        </section>

        {/* Administration Windows: The Road to Mastery */}
        <section id="windows" className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg">
              <Calendar size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900">Administration Windows</h2>
              <p className="text-slate-500">Track your progress across three key monitoring events[cite: 153].</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { pm: "PM1", date: "Aug 11 – Sep 26, 2025", type: "Baseline", desc: "Sets your starting line to track progress through the year[cite: 158, 167].", color: "blue" },
              { pm: "PM2", date: "Dec 1 – Jan 23, 2026", type: "Mid-Year", desc: "Compares mid-year performance against your baseline score[cite: 160, 168].", color: "amber" },
              { pm: "PM3", date: "May 1 – May 29, 2026", type: "Summative", desc: "Measures final mastery of B.E.S.T. standards for accountability[cite: 161, 169].", color: "green" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-2 h-full bg-${item.color}-500`} />
                <span className="text-5xl font-black text-slate-100 group-hover:text-slate-200 transition mb-4 block">{item.pm}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.type}</h3>
                <p className="text-blue-600 font-bold text-sm mb-4">{item.date}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievement Level Dashboard */}
        <section id="mastery" className="mb-24">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black mb-6">Achievement Level Dashboard</h2>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                  Student success is categorized into five levels. Level 3 indicates <strong>On Grade Level</strong> performance across all assessments[cite: 201, 205].
                </p>
                
                <div className="space-y-4">
                  {[
                    { lv: 5, name: "Exemplary", desc: "Highly likely to excel in the next grade [cite: 222-225].", color: "bg-purple-500" },
                    { lv: 4, name: "Proficient", desc: "Likely to excel in the next grade[cite: 221, 223].", color: "bg-blue-500" },
                    { lv: 3, name: "On Grade Level", desc: "May need additional support for the next grade[cite: 205, 219].", color: "bg-green-500" }
                  ].map((item) => (
                    <div key={item.lv} className="flex items-center gap-5 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition">
                      <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg`}>{item.lv}</div>
                      <div>
                        <div className="font-bold text-lg">{item.name}</div>
                        <div className="text-sm text-slate-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <GraduationCap className="text-blue-400" /> Promotion & Graduation
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                    <span className="text-xs font-black uppercase tracking-widest text-red-400 mb-2 block">Grade 3 Requirement</span>
                    <p className="text-sm leading-relaxed text-red-100">
                      Students must achieve <strong>Level 2 or higher</strong> on PM3 ELA Reading for promotion to Grade 4[cite: 272].
                    </p>
                  </div>
                  <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                    <span className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2 block">Grade 10 Graduation</span>
                    <p className="text-sm leading-relaxed text-blue-100">
                      Students must <strong>pass PM3</strong> of Grade 10 FAST ELA Reading to meet graduation requirements[cite: 276].
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Grade-Specific Score Lookup */}
        <section id="scores" className="mb-24">
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-10 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-md">
                <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                  <Target className="text-blue-600" /> B.E.S.T. Scale Score Lookup
                </h2>
                <p className="text-slate-500 mt-2 text-sm">Search by grade or subject to find the scale score ranges for your specific achievement level [cite: 217-218].</p>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="e.g., Grade 6 Mathematics" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition"
                  onChange={(e) => setSearchGrade(e.target.value)}
                />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase tracking-widest font-black">
                  <tr>
                    <th className="px-10 py-6">Assessment</th>
                    <th className="px-4 py-6 text-center">Level 1</th>
                    <th className="px-4 py-6 text-center">Level 2</th>
                    <th className="px-4 py-6 text-center bg-blue-600 text-white rounded-t-lg">Level 3 (Goal)</th>
                    <th className="px-4 py-6 text-center">Level 4</th>
                    <th className="px-4 py-6 text-center">Level 5</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredScores.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition group">
                      <td className="px-10 py-6 font-bold text-slate-800 group-hover:text-blue-600 transition">{row.assessment}</td>
                      <td className="px-4 py-6 text-center text-slate-500 text-sm">{row.l1}</td>
                      <td className="px-4 py-6 text-center text-slate-500 text-sm">{row.l2}</td>
                      <td className="px-4 py-6 text-center font-black text-blue-700 bg-blue-50/40 text-sm">{row.l3}</td>
                      <td className="px-4 py-6 text-center text-slate-500 text-sm">{row.l4}</td>
                      <td className="px-4 py-6 text-center text-slate-500 text-sm">{row.l5}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500 italic">
              <Info size={16} /> Data based on the B.E.S.T. scale approved by the State Board of Education[cite: 195].
            </div>
          </div>
        </section>

        {/* Essential Info Grid */}
        <section className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Exam Essentials</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Clock, title: "Session Lengths", desc: "90–120 mins per session. PM3 is longer due to field test items[cite: 177, 178].", color: "orange" },
                { icon: Calculator, title: "Math Specifics", desc: "Online calculators (4-function or scientific) for Grades 6-8 [cite: 187-190].", color: "green" },
                { icon: Monitor, title: "Computer Adaptive", desc: "Questions adjust difficulty based on your responses[cite: 152].", color: "blue" },
                { icon: ShieldCheck, title: "Remote Testing", desc: "Available for PM1/PM2 for virtual or homebound students only[cite: 265].", color: "purple" }
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                  <div className={`p-3 bg-${card.color}-50 text-${card.color}-600 rounded-2xl w-fit mb-4`}>
                    <card.icon size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-[2.5rem] p-12 text-white flex flex-col justify-center shadow-2xl shadow-blue-200">
            <h2 className="text-3xl font-black mb-6">Start Training Today</h2>
            <p className="text-blue-100 mb-10 text-lg">
              Join thousands of Florida students preparing for their FAST assessments with our B.E.S.T. aligned platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-lg hover:scale-105 transition flex items-center justify-center gap-2">
                Get Started Free <ChevronRight size={20} />
              </Link>
              <button className="px-8 py-4 bg-blue-700 text-white font-bold rounded-2xl hover:bg-blue-800 transition">
                Explore Sample Items
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-white border-t border-slate-200 py-16 text-slate-500">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Image src="/images/fastprep_logo_horizontal.png" alt="FastPrep Academy" width={140} height={45} className="mb-4 opacity-70 grayscale" />
            <p className="text-sm">© 2026 FastPrep Academy. Data sourced from FDOE[cite: 284].</p>
          </div>
          <div className="flex gap-10 font-bold text-sm">
            <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}