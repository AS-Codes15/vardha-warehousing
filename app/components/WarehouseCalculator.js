"use client";

import { useState } from "react";

export default function WarehouseCalculator() {
  const [method, setMethod] = useState("area");

  const [area, setArea] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const calculatedArea =
    method === "area"
      ? Number(area || 0)
      : Number(length || 0) * Number(width || 0);

  let rate = 0;

  if (calculatedArea >= 500 && calculatedArea <= 5000) {
    rate = 60;
  } else if (calculatedArea > 5000 && calculatedArea <= 42000) {
    rate = 24;
  }

  const estimatedAmount = calculatedArea * rate;

  const getMessage = () => {
    if (!calculatedArea) return "";

    if (calculatedArea < 500) {
      return "Minimum warehouse requirement is 500 sq.ft.";
    }

    if (calculatedArea > 42000) {
      return "Please contact our team for customized warehouse solutions.";
    }

    return "Eligible warehouse requirement.";
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="inline-block bg-[#D4A017] text-[#071229] px-4 py-2 rounded-full text-sm font-semibold">
            Warehouse Calculator
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#071229] mt-6">
            Calculate Your Warehouse Requirement
          </h2>

          <p className="text-slate-600 text-lg mt-5 max-w-3xl mx-auto">
            Instantly estimate warehouse space requirements and monthly pricing
            based on your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Card */}

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => setMethod("area")}
                className={`px-5 py-3 rounded-xl font-medium transition ${
                  method === "area" ? "bg-[#071229] text-white" : "bg-slate-100"
                }`}
              >
                Enter Area
              </button>

              <button
                onClick={() => setMethod("dimensions")}
                className={`px-5 py-3 rounded-xl font-medium transition ${
                  method === "dimensions"
                    ? "bg-[#071229] text-white"
                    : "bg-slate-100"
                }`}
              >
                Length × Width
              </button>
            </div>

            {method === "area" ? (
              <div>
                <label className="block mb-2 font-medium">
                  Required Area (sq.ft.)
                </label>

                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Enter required area"
                  className="w-full border rounded-xl px-4 py-3"
                />
              </div>
            ) : (
              <div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium">
                      Length (ft)
                    </label>

                    <input
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full border rounded-xl px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Width (ft)</label>

                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="w-full border rounded-xl px-4 py-3"
                    />
                  </div>
                </div>

                {calculatedArea > 0 && (
                  <div className="mt-4 bg-slate-100 rounded-xl p-4">
                    <p className="text-sm text-slate-600 mb-1">
                      Calculated Area
                    </p>

                    <p className="text-xl font-bold text-[#071229]">
                      {calculatedArea.toLocaleString()} sq.ft.
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6">
              <label className="block mb-2 font-medium">
                Required Height (ft)
              </label>

              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height"
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            {getMessage() && (
              <div className="mt-6 bg-slate-100 rounded-xl p-4 text-sm">
                {getMessage()}
              </div>
            )}
          </div>

          {/* Right Card */}

          <div className="bg-gradient-to-br from-[#071229] via-[#0D234B] to-[#17386F] rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Cost Estimation</h3>

            <div className="space-y-6">
              <div>
                <p className="text-slate-300 text-sm">Required Space</p>

                <h4 className="text-3xl font-bold text-[#D4A017]">
                  {calculatedArea.toLocaleString()} sq.ft.
                </h4>
              </div>

              <div>
                <p className="text-slate-300 text-sm">Applicable Rate</p>

                <h4 className="text-2xl font-semibold">
                  {rate ? `₹${rate}/sq.ft.` : "--"}
                </h4>
              </div>

              <div>
                <p className="text-slate-300 text-sm">Warehouse Height</p>

                <h4 className="text-2xl font-semibold">{height || 0} ft</h4>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-slate-300 text-sm mb-2">
                  Estimated Monthly Amount
                </p>

                <h4 className="text-5xl font-bold text-[#D4A017]">
                  {estimatedAmount
                    ? `₹${estimatedAmount.toLocaleString()}`
                    : "--"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
