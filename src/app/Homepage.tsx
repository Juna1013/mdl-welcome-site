"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Homepage() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const activitiesRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#about' && aboutRef.current) {
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
            } else if (hash === '#activities' && activitiesRef.current) {
                activitiesRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };
        
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-pink-100 to-cyan-100 text-center py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative w-full h-40 sm:h-52 md:h-64 max-w-lg mb-6">
                            <Image 
                                src="/MDL.png" 
                                fill
                                className="object-contain"
                                alt="MDLロゴ"
                                priority
                            />
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 inline-block text-transparent bg-clip-text">
                            新入生歓迎会2025
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
                            Welcome to MDL!
                        </p>
                        
                        <a href="#about" className="bg-gradient-to-r from-cyan-400 to-pink-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            詳しく見る
                        </a>
                    </div>
                </div>
            </section>
            
            <section className="bg-gradient-to-r from-pink-50 to-cyan-50 py-16">
                <div className="container mx-auto px-4">
                <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mb-8 text-center font-bold">
                    あなたの教室にもこのポスターが！
                </p>
                <div className="flex items-center justify-center">
                    <div className="perspective-1000">
                        <div className="w-64 sm:w-72 md:w-80 h-96 sm:h-[420px] md:h-[450px] bg-white rounded-2xl shadow-2xl transform rotate-y-6 hover:rotate-y-3 hover:scale-105 transition-all duration-500 overflow-hidden">
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
            
            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-50 to-cyan-50 rounded-lg shadow-lg p-6 md:p-8">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="relative w-full md:w-1/2 h-64 rounded-lg overflow-hidden">
                                <Image 
                                    src="/mdl.jpg" 
                                    fill
                                    className="object-cover"
                                    alt="MDL活動場所の画像"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text">
                                    Activity
                                </h2>
                                <div className="space-y-2 text-gray-700">
                                    <p><span className="font-medium">活動曜日：</span>毎週火曜日 16時30分開始</p>
                                    <p><span className="font-medium">活動場所：</span>10号館3階MDL室</p>
                                    <p><span className="font-medium">代表者連絡先：</span>st21174hk@gm.ibaraki-ct.ac.jp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="about" ref={aboutRef} className="bg-gradient-to-r from-pink-100 to-cyan-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text mx-auto">
                        MDLとは？
                    </h2>
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
                        <div className="text-gray-800 text-lg">
                            <p className="mb-4">
                                メディアデザインラボ（MDL）は、Web開発やものづくりを中心に活動する学生団体です。
                            </p>
                            <p>
                                初心者から経験者まで、技術開発に興味のある学生が集まり、協力しながら創造的なプロジェクトを進めています。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="activities" ref={activitiesRef} className="bg-gradient-to-r from-pink-50 to-cyan-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text mx-auto">
                        活動紹介
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="relative h-56">
                                <Image 
                                    src="/dcon2025.png" 
                                    fill
                                    className="object-cover"
                                    alt="DCON2025"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">DCON</h3>
                                <h3 className="text-xl font-bold mb-3">- ディープラーニングコンテスト -</h3>
                                <p className="text-gray-700">
                                    「AI技術」と「ものづくり技術」を活用したプロダクトで企業価値を競うコンテスト
                                </p>
                                <p className="text-gray-700">
                                    DCON2025：本選出場決定🎉
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="relative h-56">
                                <Image 
                                    src="/ゲーム開発.jpg" 
                                    fill
                                    className="object-cover"
                                    alt="大洗勉強ゲーム開発"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">大洗勉強ゲーム開発</h3>
                                <p className="text-gray-700">
                                    教育委員会と共同で開発する小学生のための勉強Webアプリケーションの開発
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                            <div className="relative h-56">
                                <Image 
                                    src="/車いす.jpg" 
                                    fill
                                    className="object-cover"
                                    alt="車いす治具の開発"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3">車いす治具の開発</h3>
                                <p className="text-gray-700">
                                    県立病院から依頼された点滴固定具の設計・開発
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="contact" className="bg-gradient-to-r from-pink-100 to-cyan-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text">
                        MDLで活動しませんか？
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        MDLでは新しいメンバーを募集しています。
                    </p>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
                        デジタルコンテンツ制作に興味がある方はぜひお気軽に見学にお越しください！
                    </p>
                    <div className="inline-block bg-white rounded-lg shadow-lg p-6">
                        <p className="text-gray-700 mb-4">
                            <span className="font-bold">見学日：</span> 毎週火曜日 16:30～
                        </p>
                        <a 
                            href="mailto:st21174hk@gm.ibaraki-ct.ac.jp" 
                            className="bg-gradient-to-r from-cyan-400 to-pink-400 text-white font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all duration-300"
                        >
                            お問い合わせ
                        </a>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}