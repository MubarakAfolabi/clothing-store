import { Search } from "lucide-react";

export default function CollectionControls() {
  return (
    <section className="flex flex-col gap-4 p-8">
      <form>
        <div className="bg-[hsla(52,98%,53%,0.1)] flex items-center border-2 border-[hsla(52,98%,53%,1)] rounded-full px-4">
          <Search size="20" />
          <input
            placeholder="Search Collections"
            className="flex-1 outline-none p-4"
          />
        </div>
      </form>

      <div className="flex justify-between items-center">
        <button className="bg-[hsla(52,98%,53%,0.1)] border-2 border-[hsla(52,98%,53%,1)]  rounded-full px-4 py-2 w-fit font-bold cursor-pointer">
          Size
        </button>
        <button className="bg-[hsla(52,98%,53%,0.1)] border-2 border-[hsla(52,98%,53%,1)]  rounded-full px-4 py-2 w-fit font-bold cursor-pointer">
          Garment Type
        </button>
        <button className="bg-[hsla(52,98%,53%,0.1)] border-2 border-[hsla(52,98%,53%,1)]  rounded-full px-4 py-2 w-fit font-bold cursor-pointer">
          Price
        </button>
        <button className="bg-[hsla(52,98%,53%,0.1)] border-2 border-[hsla(52,98%,53%,1)]  rounded-full px-4 py-2 w-fit font-bold cursor-pointer">
          Sort By
        </button>
      </div>
    </section>
  );
}
