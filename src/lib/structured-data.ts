export function generateOrganizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'MDL (メディアデザインラボ)',
        alternateName: 'Media Design Lab',
        url: 'https://mdl-welcome-site.vercel.app',
        logo: 'https://mdl-welcome-site.vercel.app/mdl-logo.png',
        description: '茨城高専の学生団体MDL（メディアデザインラボ）。ものづくりで未来を創造する学生団体として、Web開発、ハードウェア開発、チーム開発など幅広い活動を行っています。',
        foundingLocation: {
            '@type': 'Place',
            name: '茨城工業高等専門学校',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'st21174hk@gm.ibaraki-ct.ac.jp',
            contactType: '代表者連絡先',
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: '茨城県',
            addressCountry: 'JP',
        },
    };
}

export function generateWebSiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'MDL新入生向け紹介ページ',
        url: 'https://mdl-welcome-site.vercel.app',
        description: '茨城高専の学生団体MDL（メディアデザインラボ）の新入生向け紹介ページです。',
        inLanguage: 'ja-JP',
        publisher: {
            '@type': 'Organization',
            name: 'MDL (メディアデザインラボ)',
        },
    };
}
