import Categories from "@/components/collections/Categories";
import CollectionControls from "@/components/collections/CollectionControls";
import FullCollection from "@/components/collections/FullCollection";
import HeroSlideshow from "@/components/collections/HeroSlideshow";
import NewArrivals from "@/components/collections/NewArrivals";

export default function Collections() {
  return (
    <main>
      <HeroSlideshow />
      <CollectionControls />
      <Categories />
      <NewArrivals />
      <FullCollection />
    </main>
  );
}
