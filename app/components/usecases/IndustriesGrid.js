export default function IndustriesGrid() {
  const industries = [
    {
      title: "FMCG Businesses",
      desc: "Efficient inventory storage and stock movement for fast-moving consumer goods.",
      icon: "📦",
    },
    {
      title: "E-Commerce & D2C",
      desc: "Scalable warehousing for growing online brands and fulfillment operations.",
      icon: "🛒",
    },
    {
      title: "Steel Businesses",
      desc: "Reliable storage infrastructure for steel and heavy commercial materials.",
      icon: "🏗️",
    },
    {
      title: "Industrial & Commercial Goods",
      desc: "Secure warehousing solutions for industrial inventory and equipment.",
      icon: "🏭",
    },
    {
      title: "Distribution & Logistics",
      desc: "Strategically located storage supporting regional distribution networks.",
      icon: "🚚",
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Industries Served
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#071229] mb-6">
            Supporting Diverse
            Business Requirements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {industries.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#f8fafc]
                rounded-3xl
                p-8
                border
                border-slate-200
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="text-4xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#071229] mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}