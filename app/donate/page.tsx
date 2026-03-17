import DonateClient from "./DonateClient";
import { getPayPalClientConfig } from "@/lib/paypal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Donate to MAAMA Concert",
  description:
    "Support MAAMA Concert with a secure online donation and help make this Toronto event celebrating Black African women in healthcare possible.",
  path: "/donate",
});

export default function DonatePage() {
  const config = getPayPalClientConfig();

  return <DonateClient {...config} />;
}
