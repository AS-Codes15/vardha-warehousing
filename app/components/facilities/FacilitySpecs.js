export default function FacilitySpecs() {
  const specs = [
    {
      value: "1987",
      label: "Warehouse Expertise Since",
    },
    {
      value: "118 ft",
      label: "Road Frontage",
    },
    {
      value: "24×7",
      label: "Commercial Access",
    },
    {
      value: "100%",
      label: "Business Focused",
    },
  ];

  return (
    <section className="bg-[#071229] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}

          <div>
            <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
              Facility Specifications
            </p>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Built For Modern
              <br />
              Warehousing Operations
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Strategically located on Gorakhnath Mandir Road, the facility is
              designed to support efficient warehousing, logistics, inventory
              storage and commercial distribution requirements.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#D4A017]" />
                <p className="text-slate-200">
                  Wide road frontage for truck movement
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#D4A017]" />
                <p className="text-slate-200">
                  Dedicated office facility available
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#D4A017]" />
                <p className="text-slate-200">
                  CCTV surveillance and secure premises
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-[#D4A017]" />
                <p className="text-slate-200">
                  Efficient loading and unloading operations
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Stats */}

          <div className="grid grid-cols-2 gap-6">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="
                  bg-white/5
                  backdrop-blur-sm
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  hover:border-[#D4A017]/50
                  transition
                "
              >
                <h3 className="text-4xl font-bold text-[#D4A017] mb-3">
                  {spec.value}
                </h3>

                <p className="text-slate-300">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
