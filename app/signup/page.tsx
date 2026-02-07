'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { createClient } from 'app/lib/supabase/client';

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [formData, setFormData] = useState({
        parentName: '',
        studentName: '',
        grade: '',
        school: '',
        username: '',
        password: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');
        
        const supabase = createClient();
        const { error } = await supabase.auth.signUp({
            email: formData.email || `${formData.username}@fastprep.temp`,
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
            setErrorMsg(error.message);
            setIsLoading(false);
        } else {
            window.location.href = '/login?message=Check your email to confirm';
        }
    };

    // Shared Tailwind class for inputs to ensure high visibility
    const inputClasses = "w-full px-4 py-3 rounded-xl border-2 border-slate-300 bg-white text-slate-900 placeholder:text-slate-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all";

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-6 py-12">
            {/* Back Button with higher contrast */}
            <Link href="/" className="fixed top-8 left-8 flex items-center gap-2 text-slate-700 hover:text-blue-700 transition font-bold text-sm">
                <ArrowLeft size={18} /> Back to Home
            </Link>

            <div className="w-full max-w-2xl">
                <div className="text-center mb-8">
                    <Image src="/images/fastprep_logo_horizontal.png" alt="FastPrep Academy" width={220} height={60} priority className="mx-auto" />
                    <h2 className="mt-6 text-3xl font-black text-slate-900">Create Your Account</h2>
                    <p className="text-slate-600 font-medium">Join thousands of Florida families today.</p>
                </div>

                <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 border border-slate-200">
                    {errorMsg && (
                        <div className="mb-6 p-4 bg-red-100 border-2 border-red-200 text-red-700 font-bold rounded-xl text-center">
                            {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Parent Info */}
                            <div className="space-y-4">
                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Parent Info</h3>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                    <input name="parentName" type="text" required placeholder="e.g. Michael Smith" onChange={handleChange} className={inputClasses} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                    <input name="email" type="email" placeholder="parent@example.com" onChange={handleChange} className={inputClasses} />
                                </div>
                            </div>

                            {/* Student Info */}
                            <div className="space-y-4">
                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Student Info</h3>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Student Name</label>
                                    <input name="studentName" type="text" required placeholder="Student's Name" onChange={handleChange} className={inputClasses} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Grade Level</label>
                                    <select name="grade" required onChange={handleChange} className={inputClasses}>
                                        <option value="">Select Grade</option>
                                        {[3, 4, 5, 6, 7, 8, 9, 10].map(g => <option key={g} value={g}>Grade {g}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-slate-200 my-4" />

                        {/* Account Info */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Security</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Username</label>
                                    <input name="username" type="text" required placeholder="Choose username" onChange={handleChange} className={inputClasses} />
                                </div>
                                <div className="space-y-1 relative">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
                                    <div className="relative">
                                        <input 
                                            name="password" 
                                            type={showPassword ? "text" : "password"} 
                                            required 
                                            placeholder="Create password" 
                                            onChange={handleChange} 
                                            className={inputClasses} 
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600">
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 bg-blue-600 text-white text-lg font-black rounded-xl shadow-xl shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
                        >
                            {isLoading ? <Loader2 className="animate-spin" /> : 'Create My Free Account'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-base text-slate-600 font-medium">
                        Already have an account? <Link href="/login" className="font-black text-blue-600 hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}