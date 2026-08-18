import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative h-100 w-1-0">
        <Image src="/logo.png" fill alt="logo" className="object-contain" />
      </div>

      <div className="flex flex-col gap-10 max-w-[50%] p-4 pb-15">
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">COMPANY</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/#">About</Link>
            </li>
            <li>
              <Link href="/#">My Account</Link>
            </li>
            <li>
              <Link href="/#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/#">Terms & Conditions</Link>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">SHOP</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/#">Men</Link>
            </li>
            <li>
              <Link href="/#">Ladies</Link>
            </li>
            <li>
              <Link href="/#">Kids</Link>
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">SUPPORT</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/#">FAQ</Link>
            </li>
            <li>
              <Link href="/#">Shipping</Link>
            </li>
            <li>
              <Link href="/#">Returns</Link>
            </li>
            <li>
              <Link href="/#">Contact</Link>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">SOCIALS</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/#">Instagram</Link>
            </li>
            <li>
              <Link href="/#">Twitter</Link>
            </li>
            <li>
              <Link href="/#">Facebook</Link>
            </li>
            <li>
              <Link href="/#">Discord</Link>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">CONTACT</h2>
          <p>We are available from 8am-4pm WAT, Mon -Fri.</p>
          <p>+234 800 0000 000</p>
          <p>shop@brand.com</p>
        </section>
      </div>

      <div className="text-[hsla(0,0%,100%,0.3)] border-t border-t-[hsla(0,0%,100%,0.4)] text-center p-4">
        &copy; 2026 Brand-name. All Rights Reserved.
      </div>
    </footer>
  );
}
