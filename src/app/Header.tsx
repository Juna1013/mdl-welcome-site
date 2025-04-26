"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="bg-gradient-to-r from-pink-100 to-cyan-100 p-4 shadow-md relative">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-3xl font-serif">MDL</div>
                    <div className="text-black text-base p-2">新入生歓迎会2025</div>
                </div>
                
                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleSidebar} 
                        className="text-gray-700 focus:outline-none"
                        aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="#about" className="text-gray-700 hover:text-cyan-500 transition">
                                MDLとは？
                            </Link>
                        </li>
                        <li>
                            <Link href="#activities" className="text-gray-700 hover:text-cyan-500 transition">
                                活動紹介
                            </Link>
                        </li>
                        <li>
                            <Link href="#achievements" className="text-gray-700 hover:text-cyan-500 transition">
                                実績
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Sidebar Menu */}
            <div 
                className={`
                    fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="p-4 border-b flex justify-between items-center">
                    <div className="text-xl font-bold text-gray-800">メニュー</div>
                    <button 
                        onClick={toggleSidebar} 
                        className="text-gray-700 focus:outline-none"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>
                <ul className="py-4">
                    <li>
                        <Link 
                            href="#about" 
                            className="block px-4 py-3 hover:bg-gray-100 text-gray-700"
                            onClick={toggleSidebar}
                        >
                            MDLとは？
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#activities" 
                            className="block px-4 py-3 hover:bg-gray-100 text-gray-700"
                            onClick={toggleSidebar}
                        >
                            活動紹介
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#achievements" 
                            className="block px-4 py-3 hover:bg-gray-100 text-gray-700"
                            onClick={toggleSidebar}
                        >
                            実績
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#equipment" 
                            className="block px-4 py-3 hover:bg-gray-100 text-gray-700"
                            onClick={toggleSidebar}
                        >
                            機材紹介
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Overlay when sidebar is open */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}
        </header>
    );
}
