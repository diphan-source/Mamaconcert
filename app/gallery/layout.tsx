import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "MAAMA Concert Gallery",
  description:
    "Browse photos from MAAMA Concert and revisit moments of worship, celebration, and community across past events.",
  path: "/gallery",
});

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children;
}
