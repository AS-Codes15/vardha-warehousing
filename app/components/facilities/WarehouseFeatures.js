export default function WarehouseFeatures() {
  const features = [
    {
      title: "24×7 Truck Access",
      description:
        "Uninterrupted movement of commercial vehicles for smooth logistics operations.",
      icon: "🚚",
    },
    {
      title: "118 ft Road Frontage",
      description:
        "Wide road access designed for easy truck entry, exit and maneuvering.",
      icon: "🛣️",
    },
    {
      title: "CCTV Surveillance",
      description:
        "Warehouse premises monitored for enhanced operational security.",
      icon: "📹",
    },
    {
      title: "Office Facility",
      description:
        "Dedicated office space available for warehouse management activities.",
      icon: "🏢",
    },
    {
      title: "Loading & Unloading",
      description:
        "Efficient cargo handling infrastructure for faster turnaround times.",
      icon: "📦",
    },
    {
      title: "Secure Storage",
      description:
        "Professional warehousing environment suitable for commercial inventory.",
      icon: "🔒",
    },
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Warehouse Features
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#071229] mb-6">
            Infrastructure Built For Business
          </h2>

          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            Designed to support warehousing, storage, logistics and distribution
            operations with efficiency and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-8
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-5xl mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-bold text-[#071229] mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
