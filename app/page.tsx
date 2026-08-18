"use client";

import Image from "next/image";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Collections from "@/components/home/Collections";
import BestSellers from "@/components/home/BestSellers";
import Categories from "@/components/home/Categories";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      imageSrc: "/home-1.png",
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleGoToSlide = (number: number) => {
    setCurrentSlide(number);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(interval);
  }, [currentSlide]);

  return (
    <div>
      <main className="pb-10">
        <section className="relative h-screen">
          <button
            className={`bg-[hsla(0,0%,0%,0.1)] text-white absolute left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full ${currentSlide === 0 ? "hidden" : "flex"} items-center justify-center cursor-pointer`}
            onClick={handlePreviousSlide}
          >
            <ChevronLeft />
          </button>

          <button
            className={`bg-[hsla(0,0%,0%,0.1)] text-white absolute right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full ${currentSlide === slides.length - 1 ? "hidden" : "flex"} items-center justify-center cursor-pointer`}
            onClick={handleNextSlide}
          >
            <ChevronRight />
          </button>

          <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
            <Image
              src={slides[currentSlide].imageSrc}
              fill
              className="object-cover"
              alt="Latest Collection"
            />
          </div>

          <div className="h-full flex flex-col justify-end gap-8 p-8">
            <h1 className="text-5xl/14 max-w-62.5 font-bold text-white">
              BOLD BY DESIGN.
            </h1>
            <p className="text-white text-shadow-[2px_2px_4px_hsla(0,0%,0%,1)]">
              Premium fits engineered for the streets. Discover the latest drops
              designed to make a statement.
            </p>
            <button className="bg-[hsla(52,98%,53%,1)] text-black font-bold w-fit flex items-center gap-4 px-2 py-4 rounded-md cursor-pointer">
              SHOP NOW
              <MoveRight />
            </button>
            {slides.length > 1 && (
              <ul className="flex items-center justify-end gap-4">
                {slides.map((slide, index) => {
                  return (
                    <li key={slide.id}>
                      <button
                        className={`${currentSlide === slide.id - 1 ? "bg-[hsla(52,98%,53%,1)]" : "bg-white"}  h-2 w-2 rounded-full cursor-pointer`}
                        onClick={() => handleGoToSlide(index)}
                      ></button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
        <Collections />
        <BestSellers />
        <Categories />
      </main>
    </div>
  );
}
