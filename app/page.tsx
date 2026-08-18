import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <section className="h-screen">
          <Image
            src="/home-1.png"
            fill
            className="object-cover"
            alt="Latest Collection"
          />
        </section>
      </main>
    </div>
  );
}
