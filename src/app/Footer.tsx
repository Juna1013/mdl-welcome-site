import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-cyan-100 to-pink-100 text-gray-700 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-3">MDL</h3>
                        <p>茨城高専のメディア・デザイン・ラボ</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-3">リンク</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="hover:text-cyan-500 transition">
                                    MDLとは？
                                </Link>
                            </li>
                            <li>
                                <Link href="#activities" className="hover:text-cyan-500 transition">
                                    活動紹介
                                </Link>
                            </li>
                            <li>
                                <Link href="#achievements" className="hover:text-cyan-500 transition">
                                    実績
                                </Link>
                            </li>
                            <li>
                                <Link href="#equipment" className="hover:text-cyan-500 transition">
                                    機材紹介
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-3">お問い合わせ</h3>
                        <p>代表：st20000@gm.ibaraki-ct.ac.jp</p>
                        <p>活動場所：10号館3階MDL室</p>
                    </div>
                </div>
                <div className="text-center mt-8 pt-6 border-t border-gray-300">
                    <p>© {new Date().getFullYear()} MDL - メディア・デザイン・ラボ</p>
                </div>
            </div>
        </footer>
    );
}