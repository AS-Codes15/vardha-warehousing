import {
  Eye,
  Target,
  ShieldCheck,
} from "lucide-react";

export default function VisionMission() {
  return (
    <section
      className="
        py-28
        px-6
        bg-gradient-to-br
        from-[#071229]
        via-[#0D234B]
        to-[#17386F]
        text-white
      "
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">

          <p className="text-[#D4A017] uppercase tracking-[5px] mb-4">
            Our Foundation
          </p>

          <h2 className="text-5xl font-bold">
            Vision • Mission • Commitment
          </h2>

        </div>

        <div className="space-y-10">

          {/* Vision */}

          <div
            className="
              bg-white/5
              backdrop-blur-sm
              border border-white/10
              rounded-[32px]
              p-10
              hover:border-[#D4A017]/50
              transition-all
            "
          >
            <div className="flex items-start gap-6">

              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-[#D4A017]/15
                  flex items-center justify-center
                "
              >
                <Eye className="text-[#D4A017]" size={32} />
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Vision
                </h3>

                <p className="text-slate-300 text-lg leading-relaxed">
                  To become a trusted warehousing partner
                  delivering reliable, scalable and efficient
                  storage infrastructure for businesses across
                  industries.
                </p>
              </div>

            </div>
          </div>

          {/* Mission */}

          <div
            className="
              bg-white/5
              backdrop-blur-sm
              border border-white/10
              rounded-[32px]
              p-10
              hover:border-[#D4A017]/50
              transition-all
            "
          >
            <div className="flex items-start gap-6">

              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-[#D4A017]/15
                  flex items-center justify-center
                "
              >
                <Target className="text-[#D4A017]" size={32} />
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Mission
                </h3>

                <p className="text-slate-300 text-lg leading-relaxed">
                  To provide modern warehousing solutions
                  supported by operational excellence,
                  security and dependable logistics support.
                </p>
              </div>

            </div>
          </div>

          {/* Commitment */}

          <div
            className="
              bg-white/5
              backdrop-blur-sm
              border border-white/10
              rounded-[32px]
              p-10
              hover:border-[#D4A017]/50
              transition-all
            "
          >
            <div className="flex items-start gap-6">

              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-[#D4A017]/15
                  flex items-center justify-center
                "
              >
                <ShieldCheck
                  className="text-[#D4A017]"
                  size={32}
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Commitment
                </h3>

                <p className="text-slate-300 text-lg leading-relaxed">
                  To maintain high standards of security,
                  transparency and customer satisfaction in
                  every warehousing engagement.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}