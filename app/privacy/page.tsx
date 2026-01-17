'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  UserCheck, 
  FileText, 
  ArrowLeft,
  Mail,
  Scale
} from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = "January 11, 2026";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ArrowLeft size={20} className="text-blue-600" />
            <span className="font-bold text-slate-600">Back to Home</span>
          </Link>
          <Image src="/images/fastprep_logo_horizontal.png" alt="FastPrep Academy" width={140} height={45} priority />
        </div>
      </nav>

      <main className="container mx-auto px-6 max-w-4xl py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <ShieldCheck size={18} /> Student Data Protection
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500">Last Updated: {lastUpdated}</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden">
          {/* Introduction Card */}
          <div className="p-8 md:p-12 bg-slate-900 text-white">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Scale className="text-blue-400" /> Our Commitment
            </h2>
            <p className="text-slate-300 leading-relaxed">
              FastPrep Academy is dedicated to protecting the privacy of Florida students. This policy outlines our adherence to 
              <strong> COPPA</strong>, <strong>FERPA</strong>, and <strong>Florida Statutes</strong> regarding the coordinated 
              screening and progress monitoring system (FAST)[cite: 5, 141].
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            {/* Section 1 */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-blue-600" /> 1. Information We Collect
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                To provide realistic computer-adaptive simulations for ELA Reading (Grades 3–10) and Mathematics (Grades 3–8), we collect[cite: 6]:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Account Details (Parent/Guardian email & Grade Level)",
                  "Practice Test Scores & Achievement Levels",
                  "Response Data for Adaptive Item Scaling",
                  "Browser & Device Technical Metadata"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl text-sm text-slate-700 border border-slate-100">
                    <div className="mt-1 text-blue-600">•</div> {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <UserCheck className="text-blue-600" /> 2. Compliance with Privacy Laws
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">COPPA (Children’s Online Privacy Protection)</h4>
                  <p className="text-sm">
                    We do not knowingly collect personal information from children under 13 without verifiable parental or school consent. 
                    Parents may review or request deletion of their child's data at any time.
                  </p>
                </div>
                <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
                  <h4 className="font-bold text-green-900 mb-2">FERPA & Florida Section 1008.25</h4>
                  <p className="text-sm">
                    All data is managed in accordance with Florida Statutes regarding student progress monitoring. Performance data is 
                    strictly used to track progress toward meeting <strong>B.E.S.T. Standards</strong>[cite: 5, 8].
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Lock className="text-blue-600" /> 3. Data Usage & Security
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We use collected data solely for educational purposes, including generating achievement level projections (Level 1–5) 
                based on official B.E.S.T. scale score ranges[cite: 58, 75].
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 p-6 border border-slate-100 rounded-2xl">
                  <EyeOff className="text-red-500 mb-3" size={24} />
                  <h4 className="font-bold mb-2">No Third-Party Selling</h4>
                  <p className="text-xs text-slate-500">We never sell, rent, or trade student data for marketing or advertising purposes.</p>
                </div>
                <div className="flex-1 p-6 border border-slate-100 rounded-2xl">
                  <Lock className="text-blue-500 mb-3" size={24} />
                  <h4 className="font-bold mb-2">Industry Encryption</h4>
                  <p className="text-xs text-slate-500">Standard SSL encryption and secure server protocols protect all academic records.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Mail className="text-blue-600" /> Contact Support
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                If you have questions regarding your data or wish to exercise your rights under COPPA/FERPA, please contact our privacy officer:
              </p>
              <a href="mailto:privacy@fastprep.academy" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                privacy@fastprep.academy
              </a>
            </section>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <p className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto italic">
          Disclaimer: FastPrep Academy is an independent educational tool and is not affiliated with the Florida Department of Education (FDOE). 
          All data referenced is based on the official 2025–26 FAST Fact Sheet[cite: 3, 143].
        </p>
      </main>

      <footer className="py-12 border-t border-slate-200 text-center">
        <Link href="/" className="text-sm font-bold text-blue-600 hover:underline underline-offset-4">
          Return to Dashboard
        </Link>
      </footer>
    </div>
  );
}