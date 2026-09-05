import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-[#071229] via-[#0D234B] to-[#071229]">
      <div className="max-w-6xl mx-auto">

        <div className="rounded-[32px] border border-[#D4A017]/30 bg-white/5 backdrop-blur-md p-10 lg:p-16 text-center">

          <Badge className="bg-[#D4A017] text-[#071229] hover:bg-[#D4A017]">
            Ready to Get Started?
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 mb-6">
            Find the Right Warehouse Space
            <span className="block text-[#D4A017]">
              For Your Business
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed mb-10">
            Whether you need storage for FMCG products, e-commerce inventory,
            steel materials, industrial goods or distribution operations,
            Vardha Warehousing offers flexible and scalable solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              href="/book-space"
              className="
                bg-[#D4A017]
                hover:bg-[#c49314]
                text-[#071229]
                font-semibold
                px-8
                py-4
                rounded-2xl
                transition
              "
            >
              Book Warehouse Space
            </Link>

            <a
              href="https://wa.me/919670111167?text=Hello%20Vardha%20Warehousing,%20I%20am%20looking%20for%20warehouse%20space."
              target="_blank"
              rel="noopener noreferrer"
              className="
                border
                border-green-500
                text-green-400
                hover:bg-green-500
                hover:text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                transition
              "
            >
              WhatsApp Enquiry
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}