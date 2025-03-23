import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';

export default function Homepage() {
    return (
        <div>
            <Header />
            <div className="bg-gradient-to-r from-pink-100 to-cyan-100 text-center">
                <div className="flex items-center justify-center w-full p-8">
                    <div className="relative w-96 h-96">
                        <Image 
                            src="/front_image.jpg" 
                            fill
                            className="object-contain rounded-lg"
                            alt="Front Image"
                            priority
                        />
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
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
                            <div>活動曜日：毎週木曜日</div>
                            <div>活動場所：10号館3階MDL室</div>
                            <div>代表者連絡先：st20000@gm.ibaraki-ct.ac.jp</div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
                    <div className="relative">
                        <div className="relative">
                            <div className="relative w-full h-64 mb-4">
                                <Image 
                                    src="/jx.jpg" 
                                    fill
                                    className="object-cover rounded-lg"
                                    alt="JX金属つなが～むの画像"
                                />
                            </div>
                            <div className="text-2xl font-serif">Details</div>
                            <div>新入生歓迎会の詳細はこちらをご覧ください</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-2xl p-2 font-serif font-bold">MDLとは？</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
                    <div className="text-gray-800">
                        <p className="mb-4">MDL（メディア・デザイン・ラボ）は、デジタルメディアやデザインに関する活動を行うサークルです。</p>
                        <p>プロジェクト企画やグラフィックデザイン、ウェブ開発など、様々なデジタルコンテンツ制作に取り組んでいます。</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-2xl p-2 font-serif font-bold">活動紹介</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
                    <div className="text-gray-800">
                        <ul className="list-disc list-inside space-y-2">
                            <li>デザインワークショップ</li>
                            <li>ウェブサイト開発プロジェクト</li>
                            <li>グラフィックデザイン制作</li>
                            <li>チーム開発演習</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-2xl p-2 font-serif font-bold">実績</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
                    <div className="text-gray-800">
                        <ul className="list-disc list-inside space-y-2">
                            <li>学内コンテスト最優秀賞受賞</li>
                            <li>地域イベント向けウェブサイト制作</li>
                            <li>技術勉強会の開催</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-2xl p-4 font-serif font-bold">機材紹介</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
                    <div className="text-gray-800">
                        <ul className="list-disc list-inside space-y-2">
                            <li>高性能デザインPC</li>
                            <li>デジタルイラストレーションタブレット</li>
                            <li>ビデオカメラ・撮影機材</li>
                            <li>グラフィックデザインソフトウェア</li>
                        </ul>
                    </div>
                </div>

                <div className="p-4 m-4 text-gray-800">
                    <div>画像提供：ノーコピ―ライトガール</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}