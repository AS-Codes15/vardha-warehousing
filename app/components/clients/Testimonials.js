export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The strategic location and seamless truck access make warehouse operations highly efficient for our business.",
      name: "Distribution Partner",
    },
    {
      quote:
        "Professional infrastructure, secure storage facilities and responsive operational support whenever required.",
      name: "Commercial Client",
    },
    {
      quote:
        "A dependable warehousing partner with excellent accessibility and reliable inventory management support.",
      name: "Industrial Business",
    },
  ];

  return (
    <section className="bg-[#071229] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted By Businesses
            <br />
            Across Industries
          </h2>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            Delivering dependable warehousing solutions with security,
            accessibility and operational efficiency.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                bg-white/5
                backdrop-blur-sm
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-[#D4A017]/40
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <div className="text-[#D4A017] text-5xl leading-none mb-6">
                “
              </div>

              <p className="text-slate-300 leading-relaxed mb-8">
                {item.quote}
              </p>

              <div className="pt-5 border-t border-white/10">

                <h4 className="font-semibold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-400 mt-1">
                  Vardha Warehousing Client
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}