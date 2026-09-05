export default function BusinessScenarios() {
  const scenarios = [
    {
      title: "Seasonal Inventory Storage",
      desc: "Store excess inventory during peak demand periods and seasonal business cycles.",
    },
    {
      title: "Distribution Hub Operations",
      desc: "Use Vardha Warehousing as a regional distribution and dispatch center.",
    },
    {
      title: "E-Commerce Fulfillment Support",
      desc: "Manage inventory efficiently for online orders and growing customer demand.",
    },
    {
      title: "Industrial Goods Storage",
      desc: "Secure storage solutions for machinery, equipment and commercial materials.",
    },
  ];

  return (
    <section className="bg-[#eef4fb] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Business Scenarios
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#071229]">
            How Businesses Use
            Our Warehouses
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {scenarios.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                border
                border-slate-200
                shadow-sm
              "
            >
              <h3 className="text-2xl font-bold text-[#071229] mb-4">
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