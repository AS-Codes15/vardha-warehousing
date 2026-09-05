import Link from "next/link";

export default function SolutionsHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/solution1.png')",
        }}
      />

      <div className="absolute inset-0 bg-[#071229]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <p className="text-[#D4A017] uppercase tracking-[4px] mb-5">
          Warehouse Solutions
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
          Complete Warehousing
          <br />
          & Logistics Solutions
        </h1>

        <p className="max-w-3xl text-xl text-slate-300 mb-10">
          Flexible warehousing, storage, logistics and warehouse
          development solutions designed for modern businesses.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/book-space"
            className="bg-[#D4A017] text-[#071229] px-8 py-4 rounded-xl font-semibold"
          >
            Book Warehouse Space
          </Link>

          <Link
            href="/contact"
            className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}