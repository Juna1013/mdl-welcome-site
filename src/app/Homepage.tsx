"use client";
import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';

export default function Homepage() {
    return (
        <div>
            <Header />
            <div className="bg-gradient-to-r from-pink-100 to-cyan-100 text-center">
                <div className="flex items-center justify-center w-full">
                    <div className="relative w-130 h-50">
                        <Image 
                            src="/MDL.png" 
                            fill
                            className="object-contain rounded-lg"
                            alt="MDLロゴ"
                            priority
                        />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 m-8">
                    <div className="relative">
                        <div className="relative">
                            <div className="relative w-full h-64 mb-4">
                                <Image 
                                    src="/mdl.jpg" 
                                    fill
                                    className="object-cover rounded-lg"
                                    alt="10号館の画像"
                                />
                            </div>
                            <div className="text-2xl font-serif">Activity</div>
                            <div>活動曜日：毎週火曜日 16時30分開始</div>
                            <div>活動場所：10号館3階MDL室</div>
                            <div>代表者連絡先：st21174hk@gm.ibaraki-ct.ac.jp</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-3xl p-2 font-serif font-bold">MDLとは？</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-8">
                    <div className="text-gray-800">
                        <p className="mb-4">MDL（メディア・デザイン・ラボ）は、デジタルメディアやデザインに関する活動を行うサークルです。</p>
                        <p>プロジェクト企画やグラフィックデザイン、ウェブ開発など、様々なデジタルコンテンツ制作に取り組んでいます。</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-3xl p-2 font-serif font-bold">活動紹介</div>

                <div className="bg-white rounded-lg shadow-lg p-8 m-8">
                    <div className="relative">
                        <div className="relative">
                            <div className="relative w-full h-64 mb-4">
                                <Image 
                                    src="/dcon2025.png" 
                                    fill
                                    className="object-cover rounded-lg"
                                    alt="DCON2025"
                                />
                            </div>
                            <div className="text-2xl font-serif">DCON（ディープラーニングコンテスト）</div>
                            <div>
                                ＜＜ここに説明文章＞＞
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 m-8">
                    <div className="relative">
                        <div className="relative">
                            <div className="relative w-full h-64 mb-4">
                                <Image 
                                    src="/mdl.jpg" 
                                    fill
                                    className="object-cover rounded-lg"
                                    alt="10号館の画像"
                                />
                            </div>
                            <div className="text-2xl font-serif">大洗勉強ゲーム開発</div>
                            <div>
                                ＜＜ここに説明文章＞＞
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 m-8">
                    <div className="relative">
                        <div className="relative">
                            <div className="relative w-full h-64 mb-4">
                                <Image 
                                    src="/mdl.jpg" 
                                    fill
                                    className="object-cover rounded-lg"
                                    alt="10号館の画像"
                                />
                            </div>
                            <div className="text-2xl font-serif">車いす治具の開発</div>
                            <div>
                                ＜＜ここに＞＞説明文章
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 m-8"></div>

            </div>
            <Footer />
        </div>
    );
}