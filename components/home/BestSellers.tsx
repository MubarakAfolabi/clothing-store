import Image from "next/image";
import { ShoppingCart, Flame } from "lucide-react";

export default function BestSellers() {
  const bestSellers = [
    {
      id: 1,
      title: "Heavyweight Nylon Trench",
      price: 320,
      trending: true,
      imageSrc: "/best-seller-1.png",
      alt: "Heavyweight Nylon Trench",
      href: "/#",
    },
    {
      id: 2,
      title: "Asymmetric Zip Bomber",
      price: 99,
      trending: true,
      imageSrc: "/best-seller-2.png",
      alt: "Asymmetric Zip Bomber",
      href: "/#",
    },
    {
      id: 3,
      title: "Raw-Edge Ribbed Knit",
      price: 140,
      trending: true,
      imageSrc: "/best-seller-3.png",
      alt: "Raw-Edge Ribbed Knit",
      href: "/#",
    },
    {
      id: 4,
      title: "Modular Crossbody Harness",
      price: 95,
      trending: false,
      imageSrc: "/best-seller-4.png",
      alt: "Modular Crossbody Harness",
      href: "/#",
    },
  ];

  return (
    <section className="p-4 flex flex-col gap-10">
      <header className="flex items-baseline-last gap-4">
        <div className="bg-[hsla(52,98%,53%,1)] h-5 w-5 rounded-full"></div>
        <h2 className="text-3xl font-bold">BEST SELLERS</h2>
      </header>

      <ul className="collections-scroll flex gap-10 overflow-x-auto">
        {bestSellers.map((bestSeller) => (
          <li
            key={bestSeller.id}
            className="relative flex w-75 shrink-0 flex-col justify-between"
          >
            {bestSeller.trending && (
              <div className="absolute top-0 left-0 flex w-fit items-center gap-2 rounded-full bg-[hsla(52,98%,53%,1)] p-2">
                <div className="text-[hsla(0,83%,45%,1)]">
                  <Flame />
                </div>
                <p className="text-lg text-black">Trending</p>
              </div>
            )}

            <div className="flex justify-center">
              <Image
                src={bestSeller.imageSrc}
                height={250}
                width={250}
                alt={bestSeller.alt}
              />
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold">{bestSeller.title}</h3>

              <div className="flex items-center justify-between">
                <p>${bestSeller.price}</p>
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
