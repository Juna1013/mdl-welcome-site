export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-pink-50 to-cyan-50 text-gray-700 py-8 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text">MDL</h3>
                        <p className="text-gray-600">学生団体 メディアデザインラボ</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">お問い合わせ</h3>
                        <p className="text-gray-600 mb-2">代表者連絡先：<a href="mailto:st21174hk@gm.ibaraki-ct.ac.jp" className="hover:text-cyan-600 transition-colors">st21174hk@gm.ibaraki-ct.ac.jp</a></p>
                        <p className="text-gray-600">活動場所：10号館3階MDL室</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">活動時間</h3>
                        <p className="text-gray-600">毎週火曜日 16時30分～</p>
                    </div>
                </div>
                <div className="text-center mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-500">© {new Date().getFullYear()} MDL -メディアデザインラボ-</p>
                </div>
            </div>
        </footer>
    );
}