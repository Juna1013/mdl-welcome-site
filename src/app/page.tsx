"use client";
import Homepage from './components/Homepage';
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/structured-data';

export default function Home() {
  const organizationJsonLd = generateOrganizationJsonLd();
  const webSiteJsonLd = generateWebSiteJsonLd();

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />

      <div>
        <Homepage />
      </div>
    </>
  );
}
