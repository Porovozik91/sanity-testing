"use client"

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="text-black cursor-pointer">logo</h1>
        </Link>

        {/* Centered UL List inside nav */}
        <ul className="flex justify-center gap-5 ml-auto mr-auto">
          <li>
            <Link href="/about" className="text-black">
              Om oss
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-black">
              Kontakt oss
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
