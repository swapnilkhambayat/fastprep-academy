'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Connect to your auth provider here
        // e.g., signIn('credentials', { email, password })
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-10">
                    <Image
                        src="/images/fastprep_logo_horizontal.png"  // ← Use the same logo as on the landing page
                        alt="FastPrep Academy Logo"
                        width={300}
                        height={100}
                        priority
                        className="mx-auto"
                    />
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        Welcome back!
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Log in to continue practicing FAST exams
                    </p>
                </div>

                {/* Login Form */}
                <div className="bg-white shadow-xl rounded-2xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                placeholder="student@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                        >
                            Log In
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                            Sign up for free
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}