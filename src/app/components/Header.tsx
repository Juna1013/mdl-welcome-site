"use client";
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // スクロール状態を監視
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { name: "Home", href: "#" },
        { name: "MDLとは", href: "#about" },
        { name: "活動紹介", href: "#activities" },
        { name: "お問い合わせ", href: "#contact" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4">
            <div 
                className={`
                    flex justify-between items-center max-w-6xl mx-auto px-6 py-4 
                    rounded-2xl transition-all duration-300 ease-in-out
                    ${isScrolled 
                        ? 'bg-white/70 backdrop-blur-lg shadow-xl border border-white/40' 
                        : 'bg-white/60 backdrop-blur-md shadow-lg border border-white/30'
                    }
                `}
            >
                <div className="flex items-center space-x-2 md:space-x-4">
                    <div className={`
                        bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text 
                        text-2xl md:text-3xl font-bold transition-all duration-300
                        ${isScrolled ? 'scale-95' : 'scale-100'}
                    `}>
                        MDL
                    </div>
                    <div className={`
                        text-gray-700 text-sm md:text-base font-medium transition-all duration-300
                        ${isScrolled ? 'opacity-80 text-xs md:text-sm' : 'opacity-100'}
                    `}>
                        新入生向け紹介ページ2025
                    </div>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <a 
                            key={item.name}
                            href={item.href}
                            className={`
                                relative text-gray-700 hover:text-cyan-600 transition-all duration-300 
                                font-medium py-2 px-1 group
                                ${isScrolled ? 'text-gray-800' : 'text-gray-700'}
                            `}
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </nav>
                
                {/* Mobile Menu Button */}
                <button 
                    className={`
                        md:hidden focus:outline-none p-2 rounded-lg transition-all duration-300
                        ${isScrolled 
                            ? 'text-gray-800 hover:bg-gray-100/50' 
                            : 'text-gray-700 hover:bg-white/30'
                        }
                    `}
                    onClick={toggleMobileMenu}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        style={{
                            transform: isMobileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                    >
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`
                md:hidden transition-all duration-300 ease-in-out overflow-hidden absolute left-4 right-4 top-full mt-2
                ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}>
                <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl border border-white/40">
                    <nav className="flex flex-col p-4">
                        {navItems.map((item, index) => (
                            <a 
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-pink-50 transition-all duration-300 py-3 px-4 rounded-lg border-b border-gray-100/50 last:border-0 group"
                                onClick={toggleMobileMenu}
                                style={{
                                    animationDelay: `${index * 0.05}s`,
                                    animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                <span className="flex items-center justify-between">
                                    {item.name}
                                    <svg 
                                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Backdrop overlay when mobile menu is open */}
            <div 
                className={`
                    fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-40
                    ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
                onClick={toggleMobileMenu}
                aria-hidden="true"
            />

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </header>
    );
}
