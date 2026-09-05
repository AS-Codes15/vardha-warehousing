import Link from "next/link";

export default function FacilityHero() {
  return (
    <section className="relative min-h-screen py-25 flex items-center justify-center overflow-hidden">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/facility.png')"
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#071229]/70" />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <p className="text-[#D4A017] uppercase tracking-[5px] mb-6">
          Warehouse Facility
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
          Modern Warehouse
          <br />
          Infrastructure
        </h1>

        <p className="max-w-3xl mx-auto text-lg lg:text-xl text-slate-300 leading-relaxed mb-10">
          Secure, scalable and strategically located warehouse facilities
          designed for FMCG, E-Commerce, Steel, Commercial Inventory and
          Distribution Businesses.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/book-space"
            className="
              bg-[#D4A017]
              hover:bg-[#c49216]
              text-[#071229]
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            Book Warehouse Space
          </Link>

          <Link
            href="/contact"
            className="
              border
              border-white/30
              hover:bg-white/10
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
