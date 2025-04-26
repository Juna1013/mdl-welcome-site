"use client";

import React, { useState } from 'react';

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
                    <div className="text-black text-base p-2">新入生向け紹介ページ2025</div>
                </div>
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
