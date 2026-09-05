const features = [
  {
    number: "01",
    title: "Since 1987",
    desc: "Decades of warehousing expertise supporting commercial storage and logistics operations.",
  },
  {
    number: "02",
    title: "Strategic Location",
    desc: "Prime connectivity on Gorakhnath Mandir Road with excellent transportation access.",
  },
  {
    number: "03",
    title: "Secure Operations",
    desc: "CCTV surveillance, operational monitoring and reliable warehouse infrastructure.",
  },
  {
    number: "04",
    title: "Scalable Solutions",
    desc: "Flexible warehouse space designed for businesses of all sizes and industries.",
  },
];

export default function WhyVardha() {
  return (
    <section className="bg-[#071229] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}

          <div>
            <p className="text-[#D4A017] uppercase tracking-[4px] mb-4 font-medium">
              Why Choose Vardha
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Trusted Warehouse Expertise
              <span className="block text-[#D4A017]">
                Since 1987
              </span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              With decades of warehousing experience, Vardha Warehousing
              provides professional storage, logistics and distribution
              solutions tailored for modern business requirements.
            </p>

            <p className="text-slate-400 leading-relaxed">
              From FMCG and e-commerce brands to industrial suppliers and
              distribution businesses, our warehouse infrastructure supports
              secure operations, efficient inventory management and scalable growth.
            </p>
          </div>

          {/* Right Content */}

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item) => (
              <div
                key={item.number}
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-3xl
                  p-7
                  hover:border-[#D4A017]/50
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <p className="text-[#D4A017] text-3xl font-bold mb-4">
                  {item.number}
                </p>

                <h3 className="text-white text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}