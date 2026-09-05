import { Badge } from "@/components/ui/badge";

const clients = [
  "DPS – Delhi Public School",
  "FCI Fertilizer, Gorakhpur",
  "Kezalnuf Factory",
  "Lord of the Drinks",
];

export default function TrustedClients() {
  return (
    <section className="py-24 px-6 bg-[#f4f8fc]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <Badge className="bg-[#D4A017] text-[#071229] hover:bg-[#D4A017]">
            Trusted By
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#071229] mt-6">
            Businesses That Trust Vardha
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto mt-5 text-lg">
            Supporting educational institutions, industrial organizations,
            manufacturing businesses and hospitality brands through
            reliable warehousing infrastructure.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {clients.map((client) => (
            <div
              key={client}
              className="
                group
                bg-white
                rounded-3xl
                p-8
                text-center
                border border-slate-200
                shadow-lg
                transition-all duration-300
                hover:border-[#D4A017]
                hover:bg-gradient-to-br
                hover:from-[#071229]
                hover:to-[#0D234B]
                hover:shadow-[0_0_35px_rgba(212,160,23,0.25)]
                hover:-translate-y-2
              "
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#D4A017]/15 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#D4A017]"></div>
              </div>

              <h3 className="font-semibold text-lg text-[#071229] group-hover:text-white transition">
                {client}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}