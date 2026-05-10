'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { createClient } from 'app/lib/supabase/client';

export default function LoginPage() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');

        const supabase = createClient();
        const trimmedIdentifier = identifier.trim().toLowerCase();
        const isEmail = trimmedIdentifier.includes('@');

        let authEmail = trimmedIdentifier;

        // If identifier is a username (no @), look up the auth email from profiles
        if (!isEmail) {
            const { data: profile, error: lookupError } = await supabase
                .from('profiles')
                .select('email')
                .eq('username', trimmedIdentifier)
                .single();

            if (lookupError || !profile?.email) {
                setErrorMsg('Username not found. Please check and try again.');
                setIsLoading(false);
                return;
            }

            authEmail = profile.email;
        }

        // Sign in with resolved email
        const { error } = await supabase.auth.signInWithPassword({
            email: authEmail,
            password,
        });

        if (error) {
            setErrorMsg('Invalid credentials. Please try again.');
            setIsLoading(false);
        } else {
            window.location.href = '/overview';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
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
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome back!</h2>
                    <p className="mt-2 text-gray-600">Log in to continue practicing FAST exams</p>
                </div>

                {/* Login Form */}
                <div className="bg-white shadow-xl rounded-2xl p-8">
                    {errorMsg && (
                        <div className="mb-6 p-4 bg-red-100 border-2 border-red-200 text-red-700 font-bold rounded-xl text-center text-sm">
                            {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                                Email or Username
                            </label>
                            <input
                                id="identifier"
                                type="text"
                                required
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                placeholder="Email or username"
                                autoComplete="username"
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
                                autoComplete="current-password"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <Link
                                href="/forgot-password"
                                className="text-sm font-medium text-blue-600 hover:text-blue-500"
                            >
                                Forgot your password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Log In'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                            Sign up for free
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}