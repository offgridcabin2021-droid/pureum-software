'use client';

import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import ReactDOM from 'react-dom';

interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0); // 0-4

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = 'unset';
            // Reset form on close
            setTimeout(() => {
                setEmail('');
                setPassword('');
                setAgreeTerms(false);
                setError(null);
                setIsLoading(false);
                setPasswordStrength(0);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Password strength logic
    useEffect(() => {
        let score = 0;
        if (password.length > 5) score++;
        if (password.length > 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        setPasswordStrength(score);
    }, [password]);

    const validateForm = () => {
        if (!email) {
            setError('Please enter your email address.');
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please provide a valid email address when signing up.');
            return false;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return false;
        }
        if (!agreeTerms) {
            setError('You must agree to the terms to continue.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!validateForm()) return;

        setIsLoading(true);

        const subject = encodeURIComponent('Doctor Note account request');
        const body = encodeURIComponent(
            `Hello Pureum Software team,\n\nI am interested in creating a Doctor Note account.\n\nContact email: ${email}\n\nPlease share the next steps.\n`
        );

        window.location.href = `mailto:pureumsoftware@gmail.com?subject=${subject}&body=${body}`;

        setIsLoading(false);
        onClose();
    };

    if (!isVisible && !isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0 pointer-events-none'}`}
            onClick={onClose}
        >
            <div
                className={`relative w-full max-w-[480px] bg-white rounded-2xl shadow-2xl p-8 transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <Icon icon="solar:close-circle-bold" className="text-2xl" />
                </button>

                <div className="mb-6">
                    <h2 className="text-[28px] font-semibold text-[#1C1C1E] mb-2 tracking-tight">
                        Create Your Doctor Note Account
                    </h2>
                    <p className="text-[#3A3A3C] text-[15px] font-medium">
                        7-day trial. Unlimited visits. No credit card needed.
                    </p>
                </div>

                {/* Error Banner */}
                {error && (
                    <div className="mb-6 bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3 text-red-600 animate-in fade-in slide-in-from-top-2 duration-300">
                        <Icon icon="solar:danger-circle-bold" className="text-xl flex-shrink-0" />
                        <span className="text-[14px] font-medium">{error}</span>
                    </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-[15px] font-medium text-[#1C1C1E] mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:border-transparent outline-none transition-all bg-gray-50 ${error && error.includes('email') ? 'border-red-300 focus:ring-red-100' : 'border-gray-200 focus:ring-[#5236AA]'}`}
                            placeholder="doctor@clinic.com"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-[15px] font-medium text-[#1C1C1E]">
                                Password
                            </label>
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-3 border rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:border-transparent outline-none transition-all bg-gray-50 ${error && error.includes('Password') ? 'border-red-300 focus:ring-red-100' : 'border-gray-200 focus:ring-[#5236AA]'}`}
                            placeholder="••••••••"
                        />
                        {/* Password Strength Meter */}
                        {password.length > 0 && (
                            <div className="mt-2 text-xs font-medium text-gray-400">
                                <div className="flex gap-1 h-1 mb-1">
                                    {[1, 2, 3, 4].map((level) => (
                                        <div
                                            key={level}
                                            className={`flex-1 rounded-full transition-all duration-300 ${passwordStrength >= level
                                                ? (passwordStrength < 2 ? 'bg-red-400' : passwordStrength < 4 ? 'bg-yellow-400' : 'bg-green-500')
                                                : 'bg-gray-100'}`}
                                        ></div>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <span>
                                        {passwordStrength < 2 ? 'Too weak' : passwordStrength < 4 ? 'Could be stronger' : 'Strong password'}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-start gap-3 mt-2">
                        <div className="relative flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-white checked:bg-[#5236AA] checked:border-[#5236AA] transition-all"
                            />
                            <Icon icon="solar:check-read-bold" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <label htmlFor="terms" className="text-[13px] leading-snug text-gray-500 pt-0.5 select-none cursor-pointer">
                            I agree to the terms of Doctor Note's <a href="#" className="text-[#5236AA] hover:underline font-semibold">privacy policy</a>, <a href="#" className="text-[#5236AA] hover:underline font-semibold">terms of use</a>, and <a href="#" className="text-[#5236AA] hover:underline font-semibold">BAA</a>.
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex items-center justify-center font-semibold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98] text-[17px] mt-2 ${isLoading ? 'bg-gray-100 text-gray-400 shadow-none cursor-not-allowed' : 'bg-[#5236AA] hover:bg-[#422b8a] text-white shadow-[#5236AA]/20'}`}
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <Icon icon="eos-icons:loading" className="text-xl animate-spin" />
                                Creating Account...
                            </span>
                        ) : (
                            'Create Account'
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center text-[15px] text-gray-500">
                    Already have an account? <a href="#" className="text-[#5236AA] hover:underline font-semibold">Sign in</a>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-xs border-t border-gray-100 pt-6">
                    <Icon icon="solar:shield-check-bold" className="text-xl text-gray-300" />
                    <span className="font-medium">Your data is protected with HIPAA-compliant encryption.</span>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default SignupModal;
