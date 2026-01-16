'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { createClient } from 'app/lib/supabase/client';

export default function SignupPage() {
    const [formData, setFormData] = useState({
        parentName: '',
        studentName: '',
        grade: '',
        school: '',
        username: '',
        password: '',
        email: '', // optional
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const supabase = createClient();

        const { data, error } = await supabase.auth.signUp({
            email: formData.email || '',
            password: formData.password,
            options: {
                data: {
                    parent_name: formData.parentName,
                    student_name: formData.studentName,
                    grade: parseInt(formData.grade),
                    school: formData.school || null,
                    username: formData.username,
                },
            },
        });

        if (error) {
            alert(' Signup Error: ' + error.message);
            console.error(error);
        } else {
                alert('Success! Check your email to confirm.');
                // Redirect or go to login
                window.location.href = '/login';
            }
        };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-lg">
                {/* Logo */}
                <div className="text-center mb-10">
                    <Image
                        src="/images/fastprep_logo_horizontal.png"
                        alt="FastPrep Academy Logo"
                        width={300}
                        height={100}
                        priority
                        className="mx-auto"
                    />
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Start practicing Florida FAST exams today
                    </p>
                </div>

                {/* Signup Form */}
                <div className="bg-white shadow-xl rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Parent Name */}
                        <div>
                            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
                                Parent/Guardian Name *
                            </label>
                            <input
                                id="parentName"
                                name="parentName"
                                type="text"
                                required
                                value={formData.parentName}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-500 bg-white"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Student Name */}
                        <div>
                            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                                Student Name *
                            </label>
                            <input
                                id="studentName"
                                name="studentName"
                                type="text"
                                required
                                value={formData.studentName}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-500 bg-white"
                                placeholder="Jane Doe"
                            />
                        </div>

                        {/* Grade */}
                        <div>
                            <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
                                Grade/Standard *
                            </label>
                            <select
                                id="grade"
                                name="grade"
                                required
                                value={formData.grade}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-500 bg-white"
                            >
                                <option value="">Select grade</option>
                                {[3, 4, 5, 6, 7, 8, 9, 10].map((g) => (
                                    <option key={g} value={g}>
                                        Grade {g}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* School (Optional) */}
                        <div>
                            <label htmlFor="school" className="block text-sm font-medium text-gray-700">
                                School Name (Optional)
                            </label>
                            <input
                                id="school"
                                name="school"
                                type="text"
                                value={formData.school}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-500 bg-white"
                                placeholder="Sunshine Elementary"
                            />
                        </div>

                        {/* Username */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username *
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={formData.username}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-500 bg-white"
                                placeholder="jane123"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password *
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-500 bg-white"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Email (Optional) */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email (Optional – for account recovery)
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 placeholder:text-gray-500 bg-white"
                                placeholder="parent@example.com"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            Log in here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}