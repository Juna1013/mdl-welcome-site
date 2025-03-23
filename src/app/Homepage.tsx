import Header from './Header';
import Footer from './Footer';

export default function Homepage() {
    return (
        <div>
            <Header />
            <div className="bg-gradient-to-r from-pink-100 to-cyan-100 text-center">
                <div className="flex items-center justify-center w-96 h-96 p-8">
                    <img src="/front_image.jpg" className="max-w-full max-h-full object-contain rounded-lg" alt="Front Image"/>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
                    <div className="relative">
                        <div className="relative">
                            <div>＜＜ここに10号館の画像＞＞</div>
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
                            <div>＜＜ここにJX金属つなが～むの画像＞＞</div>
                            <div className="text-2xl font-serif">Details</div>
                            <div>新入生歓迎会の詳細はこちらをご覧ください</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-2xl p-2 font-serif font-bold">MDLとは？</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
                    <div className="relative">
                        <div className="relative">
                            <div>タイル➀</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-2xl p-2 font-serif font-bold">活動紹介</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
                    <div className="relative">
                        <div className="relative">
                            <div>タイル➁</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-2xl p-2 font-serif font-bold">実績</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
                    <div className="relative">
                        <div className="relative">
                            <div>タイル➂</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text text-2xl p-4 font-serif font-bold">機材紹介</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-14">
                    <div className="relative">
                        <div className="relative">
                            <div>タイル➃</div>
                        </div>
                    </div>
                </div>

                <div className="p-4 m-4">
                    <div>※注意事項</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}