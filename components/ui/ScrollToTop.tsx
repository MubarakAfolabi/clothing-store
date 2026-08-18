"use client";

import { useState, useEffect } from "react";
import { MoveUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleScrollToTop}
      className="bg-[hsla(52,98%,53%,1)] text-black fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer"
    >
      <MoveUp strokeWidth={3} />
    </button>
  );
}
