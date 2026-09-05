import Link from "next/link";

export default function LocationSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#071229] via-[#0D234B] to-[#071229]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Strategic Location
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Located in the Heart of Gorakhpur
          </h2>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-5">
            Positioned for seamless logistics, commercial transportation and
            efficient warehouse operations with excellent road connectivity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}

          <div className="text-white">

            <h3 className="text-3xl font-bold mb-8">
              Vardha Warehousing
            </h3>

            <div className="space-y-5 mb-10">

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A017]/20 flex items-center justify-center text-[#D4A017] font-bold">
                  📍
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Warehouse Address
                  </h4>

                  <p className="text-slate-300">
                    Gorakhnath Mandir Road, Bargadwa,
                    Gorakhpur, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A017]/20 flex items-center justify-center text-[#D4A017] font-bold">
                  🚚
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    24×7 Truck Access
                  </h4>

                  <p className="text-slate-300">
                    Smooth vehicle movement and loading operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A017]/20 flex items-center justify-center text-[#D4A017] font-bold">
                  🛣️
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    118-ft Road Frontage
                  </h4>

                  <p className="text-slate-300">
                    Excellent connectivity for logistics businesses.
                  </p>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://maps.google.com/?q=Gorakhnath+Mandir+Road+Bargadwa+Gorakhpur"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4A017] hover:bg-[#b8870f] text-[#071229] px-6 py-3 rounded-xl font-semibold transition"
              >
                Get Directions
              </a>

              <Link
                href="/book-space"
                className="border border-white/20 hover:border-[#D4A017] px-6 py-3 rounded-xl font-semibold transition"
              >
                Book Warehouse Space
              </Link>

            </div>
          </div>

          {/* Right Side Real Map */}

          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

            <iframe
              src="https://maps.google.com/maps?q=Gorakhnath%20Mandir%20Road%20Bargadwa%20Gorakhpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-xl">
              <h4 className="font-bold text-[#071229]">
                Vardha Warehousing
              </h4>

              <p className="text-slate-600 text-sm">
                Bargadwa, Gorakhpur
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}