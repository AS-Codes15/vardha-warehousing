export default function StorageSolutions() {
  const services = [
    "Bulk Inventory Storage",
    "Commercial Goods Storage",
    "FMCG Warehousing",
    "Steel & Industrial Storage",
    "Distribution Inventory",
    "Seasonal Storage Requirements",
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Storage Solutions
          </p>

          <h2 className="text-4xl lg:text-6xl font-bold text-[#071229] mb-6">
            Secure & Scalable Storage
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            Flexible storage solutions tailored to your inventory,
            distribution and operational requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-[#071229]">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}