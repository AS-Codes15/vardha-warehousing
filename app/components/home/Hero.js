import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/home.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#071229]/65" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-[#D4A017] px-5 py-2 rounded-full text-sm font-medium mb-6">
          ✦ Warehouse Expertise Since 1987
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Premium Warehouse Space
          <span className="block text-[#D4A017]">in Gorakhpur</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          Flexible warehousing solutions for FMCG, e-commerce, steel, commercial
          inventory and distribution businesses.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/book-space"
            className="bg-[#D4A017] hover:bg-[#b88a12] text-[#071229] px-8 py-4 rounded-xl font-semibold transition"
          >
            Book Warehouse Space
          </Link>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}