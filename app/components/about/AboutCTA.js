import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d')",
        }}
      />

      <div className="absolute inset-0 bg-[#071229]/85" />

      <div className="relative max-w-5xl mx-auto text-center text-white">

        <span className="text-[#D4A017] uppercase tracking-[4px]">
          Premium Warehousing Solutions
        </span>

        <h2 className="text-5xl lg:text-6xl font-black mt-5 mb-6">
          Need Warehouse Space?
        </h2>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-10">
          Get a customized warehousing solution designed for your
          storage, logistics and distribution requirements.
        </p>

        <div className="flex flex-wrap justify-center gap-5">

          <Link
            href="/book-space"
            className="
              bg-[#D4A017]
              hover:bg-[#c89416]
              text-[#071229]
              font-semibold
              px-8
              py-4
              rounded-xl
            "
          >
            Book Warehouse Space
          </Link>

          <a
            href="https://wa.me/919670111167"
            target="_blank"
            rel="noopener noreferrer"
            className="
              border
              border-white/20
              hover:bg-white/10
              px-8
              py-4
              rounded-xl
            "
          >
            WhatsApp Us
          </a>

        </div>

      </div>

    </section>
  );
}