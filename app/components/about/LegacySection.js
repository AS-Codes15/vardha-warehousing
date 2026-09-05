export default function LegacySection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <div>

            <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold mb-4">
              Since 1987
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold text-[#071229] leading-tight">
              Building Trust Through
              <span className="block text-[#D4A017]">
                Warehousing Excellence
              </span>
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              For nearly four decades, Vardha Warehousing has supported
              businesses with reliable storage infrastructure,
              commercial warehousing solutions, and operational
              efficiency across industries.
            </p>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Our facilities are designed to support inventory
              management, distribution, logistics operations and
              scalable business growth.
            </p>

          </div>

          {/* Right Card */}

          <div className="relative">

            <div className="bg-gradient-to-br from-[#071229] via-[#0D234B] to-[#17386F]
                            rounded-[36px]
                            p-12
                            shadow-2xl
                            overflow-hidden">

              <div className="absolute -top-6 -right-6 text-[180px] font-bold text-white/5">
                1987
              </div>

              <div className="relative z-10">

                <p className="text-[#D4A017] uppercase tracking-[4px] text-sm mb-4">
                  Legacy
                </p>

                <h3 className="text-4xl font-bold text-white mb-6">
                  39+ Years
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  Trusted warehousing partner delivering secure,
                  scalable and efficient storage solutions for
                  businesses since 1987.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
