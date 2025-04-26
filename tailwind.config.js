/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ffcc', // 近未来的なシアン
        secondary: '#00ccff', // 明るいブルー
        background: '#0a192f', // ダークブルー
        text: '#ccd6f6', // 明るいグレー
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // モダンなフォント
        mono: ['Fira Code', 'monospace'], // コード風フォント
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite', // グラデーションアニメーション
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};