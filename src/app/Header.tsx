"use client";

import React, { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { name: "ホーム", href: "#" },
        { name: "MDLとは", href: "#about" },
        { name: "活動紹介", href: "#activities" },
        { name: "お問い合わせ", href: "#contact" }
    ];

    return (
        <header className="bg-gradient-to-r from-pink-100 to-cyan-100 p-4 shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-2xl md:text-3xl font-bold">MDL</div>
                    <div className="text-black text-sm md:text-base p-1 md:p-2">新入生向け紹介ページ2025</div>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <a 
                            key={item.name}
                            href={item.href}
                            className="text-gray-800 hover:text-cyan-600 transition-colors font-medium"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-gray-800 focus:outline-none"
                    onClick={toggleMobileMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4 absolute left-4 right-4 z-50">
                    <nav className="flex flex-col space-y-3">
                        {navItems.map((item) => (
                            <a 
                                key={item.name}
                                href={item.href}
                                className="text-gray-800 hover:text-cyan-600 transition-colors py-2 border-b border-gray-100 last:border-0"
                                onClick={toggleMobileMenu}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}

            {/* Overlay when mobile menu is open */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={toggleMobileMenu}
                    aria-hidden="true"
                ></div>
            )}
        </header>
    );
}