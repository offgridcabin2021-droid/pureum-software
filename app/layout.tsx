import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

/* ─── SEO / GEO Metadata ─── */
export const metadata: Metadata = {
  title: "Pureum Software | Toronto Software Development & AI Solutions",
  description:
    "Pureum Software is a Toronto-based software agency specializing in iOS & Android app development, SEO & GEO optimization, AI automation, and full-stack web engineering. Serving clients across the GTA and Canada.",
  keywords: [
    "Toronto software development",
    "Toronto app development",
    "GTA software agency",
    "iOS app development Toronto",
    "Android app development Toronto",
    "SEO Toronto",
    "GEO optimization Canada",
    "AI automation Toronto",
    "full stack development Toronto",
    "web development agency GTA",
    "mobile app developer Ontario",
    "custom software Toronto",
    "Pureum Software",
  ],
  authors: [{ name: "Pureum Software", url: "https://pureum.dev" }],
  creator: "Pureum Software",
  publisher: "Pureum Software",
  metadataBase: new URL("https://pureum.dev"),
  alternates: {
    canonical: "https://pureum.dev",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://pureum.dev",
    siteName: "Pureum Software",
    title: "Pureum Software | Toronto Software Development & AI Solutions",
    description:
      "Toronto-based software agency specializing in iOS & Android apps, SEO/GEO optimization, AI automation, and full-stack web engineering. Serving GTA & Canada.",
    images: [
      {
        url: "/pureum-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pureum Software – Toronto Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pureum Software | Toronto Software Development & AI Solutions",
    description:
      "Toronto-based software agency: iOS/Android apps, SEO & GEO, AI automation, full-stack web. Serving GTA & Canada.",
    images: ["/pureum-logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

/* ─── JSON-LD Structured Data ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SoftwareCompany", "LocalBusiness"],
      "@id": "https://pureum.dev/#organization",
      name: "Pureum Software",
      url: "https://pureum.dev",
      logo: "https://pureum.dev/pureum-logo.jpg",
      image: "https://pureum.dev/pureum-logo.jpg",
      description:
        "Toronto-based software agency specializing in iOS & Android app development, SEO & GEO optimization, AI automation, and full-stack web engineering.",
      email: "info@pureum.dev",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.6532,
        longitude: -79.3832,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Toronto",
          "@id": "https://www.wikidata.org/wiki/Q172",
        },
        {
          "@type": "City",
          name: "Oakville",
        },
        {
          "@type": "City",
          name: "Mississauga",
        },
        {
          "@type": "City",
          name: "Burlington",
        },
        {
          "@type": "AdministrativeArea",
          name: "Greater Toronto Area",
        },
        {
          "@type": "Country",
          name: "Canada",
        },
      ],
      knowsAbout: [
        "iOS App Development",
        "Android App Development",
        "Full Stack Web Development",
        "SEO Optimization",
        "GEO Optimization",
        "AI Automation",
        "Cloud Infrastructure",
        "React",
        "Next.js",
        "Swift",
        "Kotlin",
        "TypeScript",
        "Firebase",
      ],
      sameAs: [],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://pureum.dev/#website",
      url: "https://pureum.dev",
      name: "Pureum Software",
      publisher: {
        "@id": "https://pureum.dev/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://pureum.dev",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* JSON-LD Structured Data for SEO/GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="unicorn-studio"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.1/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-background text-white font-sans">
        {children}
      </body>
    </html>
  );
}
