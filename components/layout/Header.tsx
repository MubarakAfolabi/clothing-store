import Image from "next/image";
import { ShoppingCart, Search, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="text-black fixed top-0 left-0 right-0 z-10 p-5">
      <div className="bg-[hsla(0,0%,0%,0.1)] w-full flex items-center justify-between pr-5 rounded-full shadow-[0_5px_4px_hsla(0,0%,0%,0.25)]">
        <Image
          src="/logo.png"
          width="80"
          height="80"
          alt="logo image"
          className="object-cover"
        />
        <div className="text-white flex items-center gap-4 cursor-pointer">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-solid cursor-pointer">
            <ShoppingCart size="20" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-solid cursor-pointer">
            <Search size="20" />
          </button>
          <div className="text-[hsla(52,98%,53%,1)]">
            <Menu size="30" strokeWidth="3" />
          </div>
        </div>
      </div>
    </header>
  );
}
