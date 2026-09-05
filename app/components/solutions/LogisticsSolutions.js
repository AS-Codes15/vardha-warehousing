export default function LogisticsSolutions() {
  return (
    <section className="bg-[#071229] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
              Logistics & Distribution
            </p>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Built For Fast
              <br />
              Inventory Movement
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Our facility supports smooth transportation,
              loading, unloading and inventory movement,
              helping businesses maintain efficient
              supply chain operations.
            </p>

            <div className="space-y-6">

              <div className="flex gap-5">
                <div className="text-[#D4A017] font-bold text-2xl">
                  01
                </div>

                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    24×7 Commercial Access
                  </h3>

                  <p className="text-slate-400">
                    Continuous accessibility for business operations.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-[#D4A017] font-bold text-2xl">
                  02
                </div>

                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    Efficient Truck Movement
                  </h3>

                  <p className="text-slate-400">
                    Wide frontage supporting easy vehicle access.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-[#D4A017] font-bold text-2xl">
                  03
                </div>

                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">
                    Distribution Ready
                  </h3>

                  <p className="text-slate-400">
                    Designed for inventory dispatch and logistics.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="absolute inset-0 bg-[#D4A017]/20 blur-3xl rounded-full" />

            <img
              src="images/solution2.jpg"
              alt="Warehouse Logistics"
              className="
                relative
                rounded-[40px]
                h-[600px]
                w-full
                object-cover
                shadow-2xl
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}