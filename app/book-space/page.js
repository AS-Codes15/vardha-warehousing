"use client";

import { useState } from "react";

import BookingForm from "../components/book-space/BookingForm";
import BookingSteps from "../components/book-space/BookingSteps";
import BookingSummary from "../components/book-space/BookingSummary";

export default function BookSpacePage() {
  const [step, setStep] = useState(1);

  const [summaryData, setSummaryData] = useState({
    area: 0,
    rate: 0,
    amount: 0,
    height: 0,
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <BookingSteps currentStep={step} />

          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-[#071229] mb-4">
              Book Warehouse Space
            </h1>

            <p className="text-slate-600 text-lg">
              Submit your warehouse requirement and receive a
              customized warehousing solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BookingForm
                step={step}
                setStep={setStep}
                summaryData={summaryData}
                setSummaryData={setSummaryData}
              />
            </div>

            <div>
              <BookingSummary summaryData={summaryData} />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}