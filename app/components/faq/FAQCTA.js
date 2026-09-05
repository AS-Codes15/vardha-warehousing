export default function FAQCTA() {
  return (
    <section className="py-20 px-6 bg-[#FFF8E8]">
      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[4px] text-[#D4A017] mb-4">
          Still Need Help?
        </p>

        <h2 className="text-4xl font-bold text-[#071229] mb-5">
          {"Don't find your answer?"}
        </h2>

        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
          Our warehouse team is available to assist with pricing,
          availability, warehouse specifications and booking enquiries.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          
          <a
            href="https://wa.me/919670111167"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            WhatsApp Us
          </a>

          <a
            href="tel:+919670111167"
            className="
              bg-[#071229]
              hover:bg-[#0D234B]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}