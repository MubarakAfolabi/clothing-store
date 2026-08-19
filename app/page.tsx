"use client";

import Collections from "@/components/home/Collections";
import BestSellers from "@/components/home/BestSellers";
import Categories from "@/components/home/Categories";
import PromoBanner from "@/components/home/PromoBanner";
import Footer from "@/components/layout/Footer";
import HeroSlideshow from "@/components/home/HeroSlideshow";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSlideshow />
        <Collections />
        <BestSellers />
        <Categories />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
}
