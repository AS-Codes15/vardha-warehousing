import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "1987",
    title: "Since",
    desc: "Warehouse Expertise",
  },
  {
    value: "24×7",
    title: "Truck Access",
    desc: "Commercial Vehicle Movement",
  },
  {
    value: "118 FT",
    title: "Road Frontage",
    desc: "Easy Loading & Unloading",
  },
  {
    value: "100%",
    title: "Security",
    desc: "CCTV Surveillance",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-[#D4A017] font-semibold uppercase tracking-wider">
            Key Highlights
          </p>

          <h2 className="text-4xl font-bold text-[#071229] mt-3">
            Built for Modern Logistics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => (
            <Card
              key={item.title}
              className="border-0 shadow-lg hover:shadow-2xl transition duration-300 rounded-3xl"
            >
              <CardContent className="p-8 text-center">
                <h3 className="text-5xl font-bold text-[#D4A017] mb-3">
                  {item.value}
                </h3>

                <h4 className="text-xl font-semibold text-[#071229] mb-2">
                  {item.title}
                </h4>

                <p className="text-slate-600">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}