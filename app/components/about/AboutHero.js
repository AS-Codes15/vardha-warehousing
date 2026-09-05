import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071229] via-[#0D234B] to-[#17386F] text-white py-28 px-6">

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#D4A017,transparent_40%)]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">

        <div>

          <span className="inline-block border border-[#D4A017]/40 bg-[#D4A017]/10 text-[#D4A017] px-5 py-2 rounded-full text-sm mb-6">
            Warehouse Expertise Since 1987
          </span>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6">
            Built for
            <span className="block text-[#D4A017]">
              Storage.
            </span>

            Designed for
            <span className="block">
              Logistics.
            </span>
          </h1>

          <p className="text-slate-300 text-lg leading-8 max-w-xl mb-10">
            Delivering warehousing, storage and logistics solutions
            backed by decades of operational expertise.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/book-space"
              className="bg-[#D4A017] text-[#071229] px-8 py-4 rounded-xl font-semibold"
            >
              Book Warehouse Space
            </Link>

            <a
              href="https://wa.me/919670111167"
              target="_blank"
              className="border border-white/20 px-8 py-4 rounded-xl"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            alt="Warehouse"
            className="rounded-[32px] h-[550px] object-cover w-full shadow-2xl"
          />

          <div className="absolute -bottom-6 left-6 bg-white text-[#071229] rounded-2xl p-5 shadow-xl">
            <h3 className="text-3xl font-bold">39+</h3>
            <p>Years Experience</p>
          </div>

          <div className="absolute top-8 -right-5 bg-[#D4A017] rounded-2xl p-5 text-[#071229] shadow-xl">
            <h3 className="text-3xl font-bold">24×7</h3>
            <p>Truck Access</p>
          </div>

        </div>

      </div>
    </section>
  );
}