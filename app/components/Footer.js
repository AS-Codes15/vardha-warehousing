import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071229] text-white border-t border-[#D4A017]/20">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              VARDHA
              <span className="text-[#D4A017]"> WAREHOUSING</span>
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Warehouse Expertise Since 1987. Premium warehousing, storage and
              logistics solutions in Gorakhpur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-slate-300 hover:text-[#D4A017] transition"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-slate-300 hover:text-[#D4A017] transition"
              >
                About
              </Link>

              <Link
                href="/facility"
                className="text-slate-300 hover:text-[#D4A017] transition"
              >
                Warehouse Facility
              </Link>

              <Link
                href="/solutions"
                className="text-slate-300 hover:text-[#D4A017] transition"
              >
                Solutions
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Industries Served</h4>

            <div className="space-y-3 text-slate-300">
              <p>FMCG</p>
              <p>E-Commerce</p>
              <p>Steel Industry</p>
              <p>Commercial Inventory</p>
              <p>Distribution & Logistics</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Contact</h4>

            <div className="space-y-4 text-slate-300">
              <p>Gorakhnath Mandir Road, Bargadwa, Gorakhpur, Uttar Pradesh</p>

              <p>+91 99999 99999</p>

              <p>info@vardhawarehousing.com</p>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  bg-green-600
                  hover:bg-green-700
                  px-5
                  py-3
                  rounded-xl
                  text-white
                  font-medium
                  transition
                "
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-slate-400">
          © 2026 Vardha Warehousing. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
