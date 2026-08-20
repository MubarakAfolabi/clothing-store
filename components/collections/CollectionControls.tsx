import { Search } from "lucide-react";

export default function CollectionControls() {
  return (
    <section className="flex flex-col gap-5 p-8 md:p-12 md:flex-row md:items-start md:justify-between md:gap-8">
      <form className="w-full md:flex-1 md:max-w-2xl">
        <div className="flex items-center rounded-full border-2 border-[hsla(52,98%,53%,1)] bg-[hsla(52,98%,53%,0.1)] px-4">
          <Search size={20} className="shrink-0" />

          <input
            type="search"
            name="search"
            placeholder="Search Collections"
            className="min-w-0 flex-1 bg-transparent p-4 outline-none"
          />
        </div>
      </form>

      <div className="flex flex-wrap md:justify-end gap-3 lg:gap-4">
        <button className="rounded-full border-2 border-[hsla(52,98%,53%,1)] bg-[hsla(52,98%,53%,0.1)] px-6 py-2 md:py-4 md:text-lg font-bold whitespace-nowrap cursor-pointer">
          Size
        </button>

        <button className="rounded-full border-2 border-[hsla(52,98%,53%,1)] bg-[hsla(52,98%,53%,0.1)] px-6 py-2 md:py-4 md:text-lg font-bold whitespace-nowrap cursor-pointer">
          Garment Type
        </button>

        <button className="rounded-full border-2 border-[hsla(52,98%,53%,1)] bg-[hsla(52,98%,53%,0.1)] px-6 py-2 md:py-4 md:text-lg font-bold whitespace-nowrap cursor-pointer">
          Price
        </button>

        <button className="rounded-full border-2 border-[hsla(52,98%,53%,1)] bg-[hsla(52,98%,53%,0.1)] px-6 py-2 md:py-4 md:text-lg font-bold whitespace-nowrap cursor-pointer">
          Sort By
        </button>
      </div>
    </section>
  );
}
