const useCases = [
  {
    no: "01",
    title: "FMCG Businesses",
    description:
      "Efficient inventory storage and distribution support for fast-moving consumer goods.",
  },
  {
    no: "02",
    title: "E-Commerce & D2C",
    description:
      "Scalable warehousing solutions for online brands and fulfillment operations.",
  },
  {
    no: "03",
    title: "Steel Businesses",
    description:
      "Dedicated storage space for steel inventory and industrial materials.",
  },
  {
    no: "04",
    title: "Industrial Goods",
    description:
      "Secure warehousing for machinery, equipment and commercial products.",
  },
  {
    no: "05",
    title: "Distribution Networks",
    description:
      "Strategic storage and dispatch support for regional and national distribution.",
  },
];

export default function UseCases() {
  return (
    <section className="bg-[#071229] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Industries We Support
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Built For Modern
            Business Operations
          </h2>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            Flexible warehouse infrastructure supporting storage,
            logistics, distribution and inventory management.
          </p>
        </div>

        <div className="space-y-5">

          {useCases.map((item) => (
            <div
              key={item.no}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-7
                hover:border-[#D4A017]/40
                transition-all
                duration-300
              "
            >
              <div className="grid lg:grid-cols-[120px_1fr_2fr] gap-6 items-center">

                <div className="text-[#D4A017] text-4xl font-bold">
                  {item.no}
                </div>

                <h3 className="text-white text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}