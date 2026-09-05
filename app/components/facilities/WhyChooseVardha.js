export default function WhyChooseVardha() {
  const reasons = [
    {
      number: "01",
      title: "Warehouse Expertise Since 1987",
      description:
        "Decades of warehousing and logistics expertise supporting commercial businesses.",
    },
    {
      number: "02",
      title: "Strategic Gorakhpur Location",
      description:
        "Well-connected location with convenient access for transportation and distribution.",
    },
    {
      number: "03",
      title: "Flexible Storage Solutions",
      description:
        "Suitable for FMCG, E-Commerce, Steel, Commercial Inventory and Distribution operations.",
    },
    {
      number: "04",
      title: "Business-Ready Infrastructure",
      description:
        "Designed for smooth warehouse operations with office facilities, security and truck accessibility.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Why Choose Vardha
          </p>

          <h2 className="text-4xl lg:text-6xl font-bold text-[#071229] mb-6">
            Trusted By Businesses
            <br />
            Since 1987
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            Combining warehousing expertise, strategic location and operational
            convenience to support modern business needs.
          </p>
        </div>

        <div className="space-y-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                lg:p-10
                border
                border-slate-200
                shadow-sm
                hover:shadow-xl
                transition
              "
            >
              <div className="grid lg:grid-cols-[120px_1fr] gap-8 items-start">
                <div>
                  <h3 className="text-5xl font-bold text-[#D4A017]/30">
                    {item.number}
                  </h3>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-[#071229] mb-4">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
