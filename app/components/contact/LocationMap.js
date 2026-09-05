export default function LocationMap() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Find Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#071229] mb-4">
            Our Location
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Conveniently located on Gorakhnath Mandir Road with excellent
            connectivity and 24×7 commercial vehicle access.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg">

          <iframe
            src="https://maps.google.com/maps?q=Gorakhnath%20Mandir%20Road%20Bargadwa%20Gorakhpur%20Uttar%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="w-full"
          />

        </div>

      </div>
    </section>
  );
}