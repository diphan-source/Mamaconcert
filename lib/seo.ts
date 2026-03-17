import type { Metadata } from "next";
import { EVENT_INFO } from "@/lib/constants";

const FALLBACK_SITE_URL = "https://www.mamaconcert.com";

export const siteConfig = {
  name: "MAAMA Concert",
  title: "MAAMA Concert Toronto 2026",
  description:
    "Join MAAMA Concert on November 21, 2026 at the Metro Convention Centre in Toronto for a celebration honouring Black African women in healthcare through worship, storytelling, and community.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL,
  locale: "en_CA",
  keywords: [
    "MAAMA Concert",
    "Toronto gospel concert",
    "Black African women in healthcare",
    "Judith Babirye",
    "Wilson Bugembe",
    "Levixone",
    "Toronto Christian event",
    "Metro Convention Centre",
  ],
} as const;

export const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${EVENT_INFO.title} share image`,
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const imageUrl = image || defaultOgImage.url;

  return {
    title,
    description,
    keywords: keywords || [...siteConfig.keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: image
        ? [
            {
              url: imageUrl,
              alt: title,
            },
          ]
        : [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : undefined,
  };
}
