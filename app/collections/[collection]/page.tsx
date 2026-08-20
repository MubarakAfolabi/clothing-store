"use client";

import HeroSlideshow from "@/components/collections/HeroSlideshow";
import { useParams } from "next/navigation";

export default function Collection() {
  const { collection } = useParams();

  return (
    <main>
      <HeroSlideshow collection={collection} />

      {/* <section>123</section> */}
    </main>
  );
}
