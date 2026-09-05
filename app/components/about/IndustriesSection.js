import {
  Package,
  ShoppingCart,
  Factory,
  Truck,
  Boxes,
} from "lucide-react";

const industries = [
  {
    title: "FMCG",
    desc: "Efficient warehousing for fast-moving consumer goods.",
    icon: Package,
  },
  {
    title: "E-Commerce & D2C",
    desc: "Inventory management and fulfillment support.",
    icon: ShoppingCart,
  },
  {
    title: "Steel & Industrial",
    desc: "Secure storage for industrial inventory.",
    icon: Factory,
  },
  {
    title: "Distribution",
    desc: "Storage and dispatch support for supply chains.",
    icon: Truck,
  },
  {
    title: "Commercial Inventory",
    desc: "Scalable warehousing for growing businesses.",
    icon: Boxes,
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold mb-3">
            Industries
          </p>

          <h2 className="text-5xl font-bold text-[#071229]">
            Industries We Serve
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="
                  group
                  bg-white
                  border
                  border-slate-200
                  rounded-[28px]
                  p-8
                  shadow-sm
                  hover:shadow-2xl
                  hover:border-[#D4A017]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                <div className="
                  w-16 h-16
                  rounded-2xl
                  bg-[#D4A017]/10
                  flex items-center justify-center
                  mb-6
                ">
                  <Icon
                    size={30}
                    className="text-[#D4A017]"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#071229] mb-3">
                  {industry.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {industry.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}