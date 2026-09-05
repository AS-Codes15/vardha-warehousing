import Link from "next/link";

export default function ClientsCTA() {
  return (
    <section className="bg-[#e9edf3] pt-28 pb-24 px-6">
      <div
        className="
          max-w-5xl
          mx-auto
          bg-white
          rounded-[48px]
          border
          border-slate-100
          shadow-[0_30px_80px_rgba(0,0,0,0.12)]
          p-10
          lg:p-16
          text-center
        "
      >
        <p className="text-[#D4A017] uppercase tracking-[4px] mb-4 text-sm font-medium">
          Ready To Get Started
        </p>

        <h2 className="text-4xl lg:text-6xl font-bold text-[#071229] mb-6 leading-tight">
          Find The Right
          <br />
          Warehouse Space
        </h2>

        <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-10">
          Get a customized warehousing solution designed around your
          business requirements, inventory volume and storage needs.
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
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Book Warehouse Space
          </Link>

          <Link
            href="/contact"
            className="
              border
              border-slate-300
              hover:bg-slate-100
              text-[#071229]
              px-8
              py-4
              rounded-xl
              font-semibold
              transition-all
              duration-300
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}