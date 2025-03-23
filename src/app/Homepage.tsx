import Header from './Header';
import Footer from './Footer';

export default function Homepage() {
    return (
        <div>
            <Header />
            <div className="bg-gradient-to-r from-cyan-100 to-pink-100 text-center">
                <div className="flex items-center justify-centerw-96 h-96 p-8">
                    <img src="/front_image.jpg" className="max-w-full max-h-full object-contain rounded-lg" alt="Front Image"/>
                </div>

                <div className="bg-gradient-to-r from-cyan-500 to-pink-500 inline-block text-transparent bg-clip-text text-2xl p-2 font-bold">活動紹介</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-8">
                    <div className="relative">
                        <div className="relative">
                            <div>タイル➀</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500 to-pink-500 inline-block text-transparent bg-clip-text text-2xl p-2 font-bold">活動紹介</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-8">
                    <div className="relative">
                        <div className="relative">
                            <div>タイル➁</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500 to-pink-500 inline-block text-transparent bg-clip-text text-2xl p-2 font-bold">実績</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-8">
                    <div className="relative">
                        <div className="relative">
                            <div>タイル➂</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500 to-pink-500 inline-block text-transparent bg-clip-text text-2xl p-4 font-bold">機材紹介</div>
                <div className="bg-white rounded-lg shadow-lg p-8 m-8">
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