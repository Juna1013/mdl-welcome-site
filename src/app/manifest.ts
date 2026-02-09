import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MDL新入生向け紹介ページ',
        short_name: 'MDL',
        description: '茨城高専の学生団体MDL（メディアデザインラボ）の新入生向け紹介ページ',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#00ffcc',
        icons: [
            {
                src: '/mdl-logo.png',
                sizes: '2228x628',
                type: 'image/png',
                purpose: 'any',
            },
        ],
    };
}
