import ShareOHClient from "./ShareOHClient";
import { EVENT_INFO } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

const POSTER_URL = "/images/posters/main-poster.png";

export const metadata = createPageMetadata({
  title: `Share ${EVENT_INFO.title} Poster`,
  description:
    "Share the official MAAMA Concert poster and invite your community to celebrate Black African women in healthcare.",
  path: "/share-MC",
  image: POSTER_URL,
});

export default function ShareOHPage() {
  return <ShareOHClient />;
}
