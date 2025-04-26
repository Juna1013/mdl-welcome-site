export default function Footer() {
    return (
        <footer className="text-gray-700 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-3">MDL</h3>
                        <p>学生団体 メディアデザインラボ</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-3">お問い合わせ</h3>
                        <p>代表者連絡先：st20000@gm.ibaraki-ct.ac.jp</p>
                        <p>活動場所：10号館3階MDL室</p>
                    </div>
                </div>
                <div className="text-center mt-8 pt-6 border-t border-gray-300">
                    <p>© {new Date().getFullYear()} MDL -メディアデザインラボ-</p>
                </div>
            </div>
        </footer>
    );
}