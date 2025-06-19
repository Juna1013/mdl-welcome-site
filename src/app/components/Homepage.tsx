"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Homepage() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const activitiesRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#about' && aboutRef.current) {
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
            } else if (hash === '#activities' && activitiesRef.current) {
                activitiesRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        
        setIsVisible(true);
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <Header />
            
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* 背景のデコレーション */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30"></div>
                <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-xl"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className={`flex flex-col items-center justify-center text-center transform transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                        <div className="relative w-full h-48 sm:h-60 md:h-72 max-w-md mb-8 transform transition-transform duration-500 hover:scale-105">
                            <Image 
                                src="/mdl-logo.png" 
                                fill
                                className="object-contain drop-shadow-lg"
                                alt="MDLロゴ"
                                priority
                            />
                        </div>
                        
                        <div className="mb-6">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 inline-block text-transparent bg-clip-text leading-tight">
                                Welcome to<br />MDL!
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                ものづくりで未来を創造する学生団体
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="#about" 
                                className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                            >
                                <span className="flex items-center justify-center">
                                    詳しく見る
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* ポスターの紹介 */}
            <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                            あなたの教室にもこのポスターが！
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                        <div className="perspective-1000">
                            <div className="w-64 sm:w-72 md:w-80 h-96 sm:h-[420px] md:h-[450px] bg-white rounded-3xl shadow-2xl transform rotate-y-6 hover:rotate-y-3 hover:scale-105 transition-all duration-500 overflow-hidden border border-white/50">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/poster.png"
                                        fill
                                        className="object-cover"
                                        alt="MDL新入生歓迎ポスター"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* About Section */}
            <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                            What is MDL?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8 md:p-12">
                            <div className="text-slate-700 text-lg leading-relaxed">
                                <p className="mb-6 text-xl font-medium text-slate-800 text-center">
                                    メディアデザインラボ（MDL）は、地域と連携してものづくりを行う学生団体です
                                </p>
                                <p className="text-lg text-center">
                                    初心者から経験者まで幅広い学生が活動しています
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-slate-800">Web開発</h4>
                                    <p className="text-sm text-slate-600 mt-1">このサイトもその一環です</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-slate-800">ものづくり</h4>
                                    <p className="text-sm text-slate-600 mt-1">ハードウェアを主体としたものづくり</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-slate-800">チーム開発</h4>
                                    <p className="text-sm text-slate-600 mt-1">協力してプロジェクトに参画</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl border border-slate-200/50 overflow-hidden">
                            <div className="flex flex-col lg:flex-row">
                                <div className="relative lg:w-1/2 h-64 lg:h-auto">
                                    <Image 
                                        src="/asobi-science.jpg" 
                                        fill
                                        className="object-cover"
                                        alt="MDL活動場所の画像"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10"></div>
                                </div>
                                <div className="lg:w-1/2 p-8 lg:p-12">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                                        Information
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-semibold text-slate-800">活動曜日：</span>
                                                <span className="text-slate-600">毎週火曜日 16時30分～</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-semibold text-slate-800">活動場所：</span>
                                                <span className="text-slate-600">10号館3階MDL室</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="font-semibold text-slate-800">代表者連絡先：</span>
                                                <a href="mailto:st21174hk@gm.ibaraki-ct.ac.jp" className="text-blue-600 hover:text-blue-700 transition-colors">
                                                    st21174hk@gm.ibaraki-ct.ac.jp
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="activities" ref={activitiesRef} className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
                            Activity Report
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            実際のプロジェクトを通じて技術力を向上させ、社会に貢献する活動を行っています
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="relative h-56 overflow-hidden">
                                <Image 
                                    src="/dcon.png" 
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt="DCON2025"
                                />
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    本選出場🎉
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Competition</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-slate-800">DCON</h3>
                                <h4 className="text-sm font-semibold text-slate-600 mb-3">ディープラーニングコンテスト</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    「AI技術」と「ものづくり技術」を活用したプロダクトで企業価値を競うコンテストに参加し、本選出場を決定しました。
                                </p>
                            </div>
                        </div>
                        
                        <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="relative h-56 overflow-hidden">
                                <Image 
                                    src="/create-game.jpg" 
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt="大洗勉強ゲーム開発"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Web Development</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-800">大洗勉強ゲーム開発</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    教育委員会と共同で開発する小学生のための勉強Webアプリケーション。楽しく学べる教育ツールの開発に取り組んでいます。
                                </p>
                            </div>
                        </div>

                        <div className="group bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="relative h-56 overflow-hidden">
                                <Image 
                                    src="/wheelchair.jpg" 
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt="車いす治具の開発"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                                    <span className="text-xs font-semibold text-pink-600 uppercase tracking-wide">Hardware</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-800">車いす治具の開発</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    県立病院からの依頼による点滴固定具の設計・開発。医療現場のニーズに応える実用的なソリューションを提供しています。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
