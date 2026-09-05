import Link from "next/link";

const points = [
  "Warehouse & Storage Expertise Since 1987",
  "Logistics & Distribution Support",
  "Custom Warehouse Solutions",
  "Commercial Infrastructure Development",
];

export default function Expertise() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}

          <div>
            <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
              Since 1987
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#071229] mb-6">
              Warehouse Expertise
              Built Over Decades
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Vardha Warehousing has been supporting storage,
              logistics and commercial warehousing requirements
              since 1987. Our experience enables businesses to
              operate efficiently with secure and scalable
              infrastructure.
            </p>

            <div className="space-y-4 mb-8">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017] font-bold">
                    ✓
                  </div>

                  <span className="text-slate-700 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/book-space"
              className="inline-flex bg-[#071229] hover:bg-[#0D234B] text-white px-7 py-3 rounded-xl font-semibold transition"
            >
              Book Warehouse Space
            </Link>
          </div>

          {/* Image */}

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt="Warehouse Expertise"
              className="w-full h-[520px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-6 py-4 shadow-xl">
              <h3 className="text-2xl font-bold text-[#071229]">
                Since 1987
              </h3>

              <p className="text-slate-600">
                Trusted Expertise
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}