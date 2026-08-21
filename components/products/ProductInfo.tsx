"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Star,
  Minus,
  Plus,
  Ruler,
  ShoppingCart,
} from "lucide-react";

export default function ProductInfo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favourite, setFavourite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState(null);

  const slides = [
    {
      id: 1,
      imageSrc: "/best-seller-1.png",
    },
    {
      id: 2,
      imageSrc: "/best-seller-2.png",
    },
    {
      id: 3,
      imageSrc: "/best-seller-3.png",
    },
  ];

  const variations = ["S", "M", "L", "XL"];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleGoToSlide = (number: number) => {
    setCurrentSlide(number);
  };

  const hadnleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleSelectedVariation = (variation) => {
    setSelectedVariation(variation);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearTimeout(interval);
  }, [currentSlide]);

  return (
    <section className="pt-30">
      <div className="relative h-100 flex flex-col items-center justify-center">
        <Image
          src={slides[currentSlide].imageSrc}
          height={300}
          width={300}
          className="h-full w-full object-contain"
          alt="Latest Collection"
        />

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

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {slides.length > 1 && (
            <ul className="flex items-center justify-center gap-4">
              {slides.map((slide, index) => (
                <li key={slide.id}>
                  <button
                    className={`${
                      currentSlide === index
                        ? "bg-[hsla(52,98%,53%,1)]"
                        : "bg-white"
                    } h-2 w-2 md:h-4 md:w-4 rounded-full cursor-pointer`}
                    onClick={() => handleGoToSlide(index)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-8">
        <div className="flex-1 flex justify-between items-center">
          <h2 className="text-xl font-bold">Heavyweight Nylon Trench</h2>
          <div
            className="text-[hsla(52,98%,53%,1)] cursor-pointer"
            onClick={() => setFavourite((prev) => !prev)}
          >
            <Heart
              fill={`${favourite ? "hsla(52,98%,53%,1)" : ""}`}
              size="30"
            />
          </div>
        </div>
        <div>
          <p className="text-lg">
            Brand: <span className="text-[hsla(52,98%,53%,1)]">Gucci</span>
          </p>
        </div>

        <hr className="border-t border-t-[hsla(52,98%,53%,1)]" />
        <div>
          <p className="text-3xl font-bold">$320</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-8">
        <p>In Stock</p>
        <p>+$5 shipping fee within Lagos.</p>
        <div className="flex justify-between gap-2">
          <div className="flex gap-2">
            <div className="text-[hsla(52,98%,53%,1)]">
              <Star fill="hsla(52,98%,53%,1)" />
            </div>
            <div className="text-[hsla(52,98%,53%,1)]">
              <Star fill="hsla(52,98%,53%,1)" />
            </div>
            <div className="text-[hsla(52,98%,53%,1)]">
              <Star fill="hsla(52,98%,53%,1)" />
            </div>
            <div className="text-[hsla(52,98%,53%,1)]">
              <Star fill="hsla(52,98%,53%,1)" />
            </div>
            <div className="text-[hsla(52,98%,53%,1)]">
              <Star fill="hsla(52,98%,53%,1)" />
            </div>
          </div>
          <p>(from 500 verified customers)</p>
        </div>

        <div className="flex w-fit justify-between items-center gap-10">
          <button
            className="text-3xl flex items-center justify-center border-2 border-[hsla(52,98%,53%,0.5)] h-10 w-10 rounded-md cursor-pointer"
            onClick={hadnleDecreaseQuantity}
          >
            <Minus />
          </button>
          <p>{quantity}</p>
          <button
            className="text-3xl flex items-center justify-center border-2 border-[hsla(52,98%,53%,0.5)] h-10 w-10 rounded-md cursor-pointer"
            onClick={handleIncreaseQuantity}
          >
            <Plus />
          </button>
        </div>

        <hr className="border-t border-t-[hsla(52,98%,53%,1)]" />

        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">Variation Available</p>
          <div className="flex items-center gap-4 text-[hsla(52,98%,53%,1)]">
            <p>Sizing Guide</p>
            <Ruler />
          </div>
        </div>

        <div className="flex gap-4">
          {variations.map((variation, index) => {
            return (
              <button
                key={index}
                className={`${selectedVariation === variation ? "bg-[hsla(52,98%,53%,1)] text-black" : ""}  text-xl border-2 border-[hsla(52,98%,53%,0.5)] h-10 w-10 cursor-pointer`}
                onClick={() => handleSelectedVariation(variation)}
              >
                {variation}
              </button>
            );
          })}
        </div>

        <button className="flex items-center justify-center gap-2 bg-[hsla(52,98%,53%,1)] text-lg text-black font-bold py-4 rounded-md cursor-pointer">
          <ShoppingCart fill="black" size="30" />
          ADD TO CART
        </button>
      </div>
    </section>
  );
}
