export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 inline-block text-transparent bg-clip-text">
                            MDL
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                            MDLは地域と連携してものづくりを行う学生団体です。
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Contact Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
                        <div className="space-y-3">
                            <p className="text-sm text-gray-400">
                                <span className="block font-medium text-gray-300 mb-1">代表者連絡先</span>
                                <a href="mailto:st21174hk@gm.ibaraki-ct.ac.jp" 
                                    className="hover:text-cyan-400 transition-colors duration-200">
                                    st21174hk@gm.ibaraki-ct.ac.jp
                                </a>
                            </p>
                            <p className="text-sm text-gray-400">
                                <span className="block font-medium text-gray-300 mb-1">Location</span>
                                10号館3階 MDL室
                            </p>
                        </div>
                    </div>
                    
                    {/* Activities Section */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Activities</h4>
                        <div className="space-y-3">
                            <p className="text-sm text-gray-400">
                                <span className="block font-medium text-gray-300 mb-1">Meeting Time</span>
                                毎週火曜日 16:30～
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-500 mb-4 md:mb-0">
                            © {new Date().getFullYear()} メディアデザインラボ（MDL）
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
