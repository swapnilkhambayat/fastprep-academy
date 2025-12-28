'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          {/*<div className="text-center mb-12">
            <Image
              src="fastprep logo V1.png"  // ← Place your logo file here: public/images/fastprep-logo.png
              alt="FastPrep Academy Logo"
              width={300}    // Adjust based on your logo's aspect ratio
              height={100}   // Adjust to maintain proportion (e.g., 3:1 ratio common for logos)
              priority
              className="mx-auto"
            />
          </div>*/}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Ace Your Florida FAST Exams with Realistic Simulations
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                FastPrep Academy helps Florida students in grades 3–10 master ELA Reading and Math through adaptive practice tests that mirror the real Florida Assessment of Student Thinking (FAST) PM1, PM2, and PM3 exams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/login"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md border border-blue-600 hover:bg-blue-50 transition"
                >
                  Log In
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Updated: Real image from public folder */}
              <Image
                src="/images/Student_solving_exam_1.png"
                alt="Grade 6 student practicing FAST exam simulation on laptop"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl mx-auto"
                priority // Loads faster since it's above the fold
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose FastPrep Academy?
            </h2>
            <p className="text-xl text-gray-600">
              Aligned with Florida B.E.S.T. Standards and the official FAST format
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Realistic Simulations</h3>
              <p className="text-gray-600">
                Full-length adaptive practice tests that match the exact structure, timing, and difficulty of FAST PM1, PM2, and PM3.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Detailed Analytics</h3>
              <p className="text-gray-600">
                Track progress with in-depth reports on strengths, weaknesses, and achievement level projections.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Targeted Practice</h3>
              <p className="text-gray-600">
                Focused drills on key B.E.S.T. benchmarks for grades 3–10 ELA and 3–8 Math.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grades Covered */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            Supporting Florida Students in Grades 3–10
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Practice for FAST ELA Reading (Grades 3–10) and Mathematics (Grades 3–8)
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 text-blue-600 ">
            {[3, 4, 5, 6, 7, 8, 9, 10].map((grade) => (
              <div key={grade} className="bg-white py-6 rounded-lg shadow-md font-bold text-2xl border border-blue-600">
                Grade {grade}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Boost Your FAST Scores?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of Florida students preparing confidently for success.
          </p>
          <Link
            href="/signup"
            className="px-10 py-5 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition text-lg"
          >
            Get Started Today – Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <p>&copy; 2025 FastPrep Academy. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </footer>
    </>
  );
}