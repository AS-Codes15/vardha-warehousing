const features = [
  "24×7 Commercial Truck Access",
  "118-ft Wide Road Frontage",
  "CCTV Surveillance & Security",
  "Dedicated Office Facility",
];

export default function WarehouseOverview() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt="Warehouse Facility"
              className="w-full h-[520px] object-cover rounded-3xl shadow-xl"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-6 py-4 shadow-xl">
              <h3 className="text-2xl font-bold text-[#071229]">
                42,000 sq.ft.
              </h3>

              <p className="text-slate-600">
                Warehouse Capacity
              </p>
            </div>

          </div>

          {/* Content Side */}

          <div>

            <p className="text-[#D4A017] uppercase tracking-[4px] mb-4 font-medium">
              Warehouse Overview
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#071229] mb-6">
              Built For Storage,
              Logistics & Distribution
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Strategically located on Gorakhnath Mandir Road, Vardha
              Warehousing provides secure and scalable warehouse
              infrastructure for FMCG, e-commerce, industrial and
              distribution businesses.
            </p>

            <div className="space-y-5">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017] font-bold">
                    ✓
                  </div>

                  <p className="text-slate-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}