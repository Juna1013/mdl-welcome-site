import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-pink-100 to-cyan-100 p-4 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="flex items-center space-x-4">
                    <div className="text-cyan-500 text-3xl font-serif">MDL</div>
                    <div className="text-black text-base p-2">新入生歓迎会2025</div>
                </div>
                <nav>
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
        </header>
    );
}