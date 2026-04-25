import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutBand } from "@/components/home/AboutBand";
import { SupplyChainMap } from "@/components/home/SupplyChainMap";
import { ProductFold } from "@/components/home/ProductFold";
import { AdvantageBento } from "@/components/home/AdvantageBento";
import { ClientsMarquee } from "@/components/home/ClientsMarquee";
import { CTABand } from "@/components/home/CTABand";
import { ThreadDivider } from "@/components/shared/ThreadDivider";
import { SITE } from "@/content/brand";

export const metadata: Metadata = {
  title: "India's textile supply chain, managed as one partner.",
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutBand />
      <SupplyChainMap />
      <ProductFold />
      <ThreadDivider />
      <AdvantageBento />
      <ClientsMarquee />
      <CTABand />
    </>
  );
}
