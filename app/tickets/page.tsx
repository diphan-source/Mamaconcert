import { redirect } from "next/navigation";
import { EVENT_INFO } from "@/lib/constants";

export default function TicketsPage() {
  redirect(EVENT_INFO.ticketUrl);
}
