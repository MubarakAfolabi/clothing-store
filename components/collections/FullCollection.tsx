import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function FullCollection() {
  const fullCollections = [
    {
      id: 1,
      title: "Heavyweight Nylon Trench",
      price: 320,
      imageSrc: "/best-seller-1.png",
      alt: "Heavyweight Nylon Trench",
      href: "/#",
    },
    {
      id: 2,
      title: "Asymmetric Zip Bomber",
      price: 99,
      imageSrc: "/best-seller-2.png",
      alt: "Asymmetric Zip Bomber",
      href: "/#",
    },
    {
      id: 3,
      title: "Raw-Edge Ribbed Knit",
      price: 140,
      imageSrc: "/best-seller-3.png",
      alt: "Raw-Edge Ribbed Knit",
      href: "/#",
    },
    {
      id: 4,
      title: "Modular Crossbody Harness",
      price: 95,
      imageSrc: "/best-seller-4.png",
      alt: "Modular Crossbody Harness",
      href: "/#",
    },
  ];

  return (
    <section className="p-8 md:p-12 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="text-3xl font-bold">The Full Collection</h2>
      </header>

      <ul className="w-full flex flex-col items-center gap-10">
        {fullCollections.map((collection) => (
          <li
            key={collection.id}
            className="relative w-full flex shrink-0 flex-col justify-between"
          >
            <div className="flex justify-center">
              <Image
                src={collection.imageSrc}
                height={250}
                width={250}
                alt={collection.alt}
              />
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl font-bold">
                {collection.title}
              </h3>

              <div className="flex items-center justify-between">
                <p className="md:text-lg">${collection.price}</p>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsla(0,0%,100%,0.4)] border-solid cursor-pointer">
                  <ShoppingCart size="20" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
