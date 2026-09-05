"use client";

import { useState } from "react";

export default function FAQList() {
  const faqs = [
    {
      question: "What is the minimum warehouse space available?",
      answer:
        "The minimum warehouse requirement is 500 sq.ft.",
    },
    {
      question: "What is the maximum warehouse space available?",
      answer:
        "We can accommodate requirements up to 42,000 sq.ft. Larger requirements can be discussed directly with our team.",
    },
    {
      question: "Do you provide 24×7 truck access?",
      answer:
        "Yes, the facility supports 24×7 commercial vehicle movement and operations.",
    },
    {
      question: "Is the warehouse secured?",
      answer:
        "Yes, CCTV surveillance and security arrangements are available.",
    },
    {
      question: "How is pricing calculated?",
      answer:
        "Pricing is calculated based on the selected area slab and is displayed automatically in the warehouse calculator.",
    },
    {
      question: "Can I request a custom warehousing solution?",
      answer:
        "Yes, businesses with specialized requirements can contact our team for a customized solution.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            FAQ
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#071229]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                border
                border-slate-200
                rounded-2xl
                overflow-hidden
              "
            >

              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? -1 : index
                  )
                }
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  text-left
                  p-6
                  bg-white
                "
              >
                <span className="font-semibold text-[#071229]">
                  {faq.question}
                </span>

                <span className="text-[#D4A017] text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}