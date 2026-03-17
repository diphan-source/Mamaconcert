import { redirect } from "next/navigation";
import { EVENT_INFO } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "MAAMA Concert Tickets",
  description:
    "Get MAAMA Concert tickets on Eventbrite for the November 21, 2026 event in Toronto.",
  path: "/tickets",
  noIndex: true,
});

export default function TicketsPage() {
  redirect(EVENT_INFO.ticketUrl);
}
