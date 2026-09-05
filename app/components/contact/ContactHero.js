import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="bg-[#071229] pt-24 pb-16 px-6 border-b border-white/10">
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
          Get In Touch
        </p>

        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Contact Our Team
        </h1>

        <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed mb-8">
          Looking for warehouse space, storage solutions or logistics
          support? Connect with our team and get a customized
          warehousing solution for your business.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">

          <Link
            href="/book-space"
            className="
              bg-[#D4A017]
              hover:bg-[#c39316]
              text-[#071229]
              px-8
              py-3
              rounded-xl
              font-semibold
              transition
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
              text-white
              hover:border-white/40
              px-8
              py-3
              rounded-xl
              font-semibold
              transition
            "
          >
            WhatsApp Us
          </a>

        </div>

        <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
          <span>Warehouse Expertise Since 1987</span>
          <span>•</span>
          <span>24×7 Truck Access</span>
          <span>•</span>
          <span>Gorakhpur, Uttar Pradesh</span>
        </div>

      </div>
    </section>
  );
}