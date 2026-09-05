"use client";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">

          <Badge className="bg-[#D4A017] text-[#071229] hover:bg-[#D4A017]">
            FAQ
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#071229] mt-6">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-lg mt-5">
            Everything you need to know about our warehouse facilities,
            pricing and storage solutions.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">

          <Accordion type="single">

            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is the minimum warehouse space available?
              </AccordionTrigger>
              <AccordionContent>
                The minimum warehouse requirement is 500 sq.ft.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                What is the maximum space available?
              </AccordionTrigger>
              <AccordionContent>
                We can accommodate requirements up to 42,000 sq.ft.
                Larger requirements can be discussed separately.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is truck access available?
              </AccordionTrigger>
              <AccordionContent>
                Yes. The property provides 24×7 truck accessibility and
                smooth loading/unloading movement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is the warehouse secured?
              </AccordionTrigger>
              <AccordionContent>
                Yes. CCTV surveillance and operational security
                arrangements are available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Which industries do you serve?
              </AccordionTrigger>
              <AccordionContent>
                FMCG, E-commerce, D2C brands, Steel businesses,
                Industrial goods, Logistics and Distribution companies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                How can I request warehouse space?
              </AccordionTrigger>
              <AccordionContent>
                Use our warehouse calculator, submit an enquiry,
                or contact us directly through WhatsApp.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </div>

      </div>
    </section>
  );
}