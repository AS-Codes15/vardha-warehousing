export default function IndustriesSupport() {
  const industries = [
    {
      no: "01",
      title: "FMCG Businesses",
      desc: "Reliable warehousing solutions for fast-moving consumer goods and inventory management.",
      icon: "📦",
    },
    {
      no: "02",
      title: "E-Commerce & D2C",
      desc: "Flexible storage designed for growing online brands, order fulfillment and inventory scaling.",
      icon: "🛒",
    },
    {
      no: "03",
      title: "Steel & Industrial Goods",
      desc: "Secure infrastructure for industrial materials, steel products and heavy commercial inventory.",
      icon: "🏗️",
    },
    {
      no: "04",
      title: "Distribution & Logistics",
      desc: "Supporting regional distribution networks with efficient storage and movement capabilities.",
      icon: "🚚",
    },
  ];

  return (
    <section className="bg-[#10264d] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Industries We Support
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Solutions For Every
            <br />
            Business Category
          </h2>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            Purpose-built warehousing solutions tailored to diverse
            industries and operational requirements.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((item) => (
            <div
              key={item.no}
              className="
                bg-[#f8fafc]
                rounded-[28px]
                p-6
                min-h-[210px]
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              {/* Top Row */}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-[#1f4b99]">
                    {item.no}
                  </h3>

                  <div className="w-10 h-1 bg-[#D4A017] mt-2 rounded-full" />
                </div>

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#D4A017]/10
                    flex
                    items-center
                    justify-center
                    text-xl
                  "
                >
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#071229] mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                {item.desc}
              </p>

              <div className="text-[#D4A017] font-semibold text-sm">
                Explore Solution →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
