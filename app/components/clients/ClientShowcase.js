export default function ClientShowcase() {
  const clients = [
    "Delhi Public School (DPS)",
    "FCI Fertilizer, Gorakhpur",
    "Kezalnuf Factory",
    "Lord of the Drinks",
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Trusted By
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#071229] mb-6">
            Businesses Across
            Multiple Industries
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="
              bg-[#f8fafc]
              rounded-3xl
              p-8
              border
              border-slate-200
              hover:shadow-xl
              transition-all
              duration-300
            "
            >
              <div className="text-[#D4A017] text-3xl mb-4">
                ★
              </div>

              <h3 className="text-2xl font-bold text-[#071229]">
                {client}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}