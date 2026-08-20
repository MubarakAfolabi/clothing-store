"use client";

import Categories from "@/components/collections/Categories";
import CollectionControls from "@/components/collections/CollectionControls";
import HeroSlideshow from "@/components/collections/HeroSlideshow";
import { useParams } from "next/navigation";

export default function Collection() {
  const { collection } = useParams();

  return (
    <main>
      <HeroSlideshow collection={collection} />
      <CollectionControls />
      <Categories />
    </main>
  );
}
