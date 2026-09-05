"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function BookingForm({
  step,
  setStep,
  summaryData,
  setSummaryData,
}) {
  const [area, setArea] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  

  const calculatedArea =
    Number(area) || (length && width ? Number(length) * Number(width) : 0);

  const rate =
    calculatedArea >= 500 && calculatedArea <= 5000
      ? 60
      : calculatedArea > 5000
        ? 24
        : 0;

  const estimatedAmount = calculatedArea * rate;

  useEffect(() => {
    setSummaryData({
      area: Number(calculatedArea) || 0,
      rate: Number(rate) || 0,
      amount: Number(estimatedAmount) || 0,
      height: Number(height) || 0,
    });
  }, [calculatedArea, rate, estimatedAmount, height, setSummaryData]);

  let validationMessage = "";

  if (calculatedArea > 0 && calculatedArea < 500) {
    validationMessage = "Minimum warehouse requirement is 500 sq.ft.";
  }

  if (calculatedArea > 42000) {
    validationMessage =
      "Please contact our team for customized warehouse solutions.";
  }

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    businessType: "",
    gst: "",
    startDate: "",
    duration: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [requestId, setRequestId] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (calculatedArea < 500) {
      alert("Minimum warehouse requirement is 500 sq.ft.");
      return;
    }

    if (calculatedArea > 42000) {
      alert("Please contact our team for customized warehouse solutions.");
      return;
    }

    if (!formData.fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSummaryData({
      area: calculatedArea,
      rate,
      amount: estimatedAmount,
      height,
    });

    setStep(2);
  };

  const handleConfirmBooking = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          company: formData.companyName,
          phone: formData.phone,
          email: formData.email,
          businessType: formData.businessType,
          gst: formData.gst,
          startDate: formData.startDate,
          duration: formData.duration,
          requirements: formData.requirements,

          length: Number(length) || 0,
          width: Number(width) || 0,
          height: Number(height) || 0,

          area: calculatedArea,
          rate,
          estimatedPrice: estimatedAmount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit booking");
      }

      setRequestId(data.requestId);
      setStep(3);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // STEP 3 - SUCCESS SCREEN
  if (step === 3) {
    return (
      <div className="bg-white rounded-[32px] shadow-xl p-10 text-center">
        <div className="w-24 h-24 rounded-full bg-green-100 mx-auto flex items-center justify-center text-4xl mb-6">
          ✓
        </div>

        <h2 className="text-4xl font-bold text-[#071229] mb-4">
          Enquiry Submitted Successfully
        </h2>

        <p className="text-slate-600 mb-8">
          Thank you for contacting Vardha Warehousing. Our team will get in
          touch with you shortly.
        </p>

        <div className="bg-slate-100 rounded-2xl p-5 mb-8">
          <p className="text-sm text-slate-500">Reference ID</p>

          <h3 className="text-2xl font-bold text-[#071229]">
            {requestId || "Generating..."}
          </h3>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            WhatsApp Vardha
          </a>

          <Link
            href="/"
            className="border border-slate-300 px-6 py-3 rounded-xl"
          >
            Back To Website
          </Link>
        </div>
      </div>
    );
  }

  // STEP 2 - SUMMARY SCREEN
  if (step === 2) {
    return (
      <div className="bg-white rounded-[32px] shadow-xl p-8">
        <h2 className="text-3xl font-bold text-[#071229] mb-8">
          Review Requirement
        </h2>

        <div className="space-y-5">
          <div className="flex justify-between border-b pb-4">
            <span>Full Name</span>
            <span>{formData.fullName}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Company</span>
            <span>{formData.companyName}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Phone</span>
            <span>{formData.phone}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Email</span>
            <span>{formData.email}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Business Type</span>
            <span>{formData.businessType}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Start Date</span>
            <span>{formData.startDate}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Duration</span>
            <span>{formData.duration}</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Required Area</span>
            <span>{Number(calculatedArea || 0).toLocaleString()} sq.ft</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Dimensions</span>
            <span>
              {length && width
                ? `${length} ft × ${width} ft`
                : "Area Entered Directly"}
            </span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Height</span>
            <span>{height || 0} ft</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Applicable Rate</span>
            <span>₹{rate}/sq.ft</span>
          </div>

          <div className="flex justify-between border-b pb-4">
            <span>Estimated Monthly Amount</span>
            <span className="font-semibold text-[#D4A017]">
              ₹{Number(estimatedAmount).toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Location</span>
            <span>Gorakhpur</span>
          </div>
        </div>

        <div className="flex gap-4 mt-10">
          <button
            onClick={() => setStep(1)}
            className="flex-1 border border-slate-300 rounded-xl py-4"
          >
            Back
          </button>

          <button
            onClick={handleConfirmBooking}
            disabled={loading}
            className="flex-1 bg-[#D4A017] hover:bg-[#c49216] rounded-xl py-4 font-semibold disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Confirm Booking"}
          </button>
        </div>
      </div>
    );
  }

  // STEP 1 - FORM
  return (
    <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 p-8">
      <div className="mb-10 bg-slate-50 border border-slate-200 rounded-3xl p-6">
        <h3 className="text-2xl font-bold text-[#071229] mb-6">
          Warehouse Requirement
        </h3>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="number"
            placeholder="Required Area (sq.ft)"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="border rounded-xl p-3"
          />

          <input
            type="number"
            placeholder="Height (ft)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border rounded-xl p-3"
          />

          <input
            type="number"
            placeholder="Length (ft)"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="border rounded-xl p-3"
          />

          <input
            type="number"
            placeholder="Width (ft)"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="border rounded-xl p-3"
          />
        </div>

        {validationMessage && (
          <div className="mt-5 bg-red-50 text-red-600 border border-red-200 rounded-xl p-4">
            {validationMessage}
          </div>
        )}
      </div>
      <div className="mb-10 bg-gradient-to-r from-[#071229] to-[#17386F] text-white rounded-3xl p-6">
        <h3 className="text-xl font-bold mb-5">Pricing Estimate</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-slate-300 text-sm">Required Space</p>

            <h4 className="text-2xl font-bold">
              {Number(calculatedArea || 0).toLocaleString()}
            </h4>
          </div>

          <div>
            <p className="text-slate-300 text-sm">Applicable Rate</p>

            <h4 className="text-2xl font-bold text-[#D4A017]">₹{rate}/sq.ft</h4>
          </div>

          <div>
            <p className="text-slate-300 text-sm">Monthly Amount</p>

            <h4 className="text-2xl font-bold text-[#D4A017]">
              ₹{Number(estimatedAmount).toLocaleString()}
            </h4>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-[#071229] mb-8">
        Customer Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <input
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <input
          type="tel"
          name="phone"
          placeholder="10-digit Mobile Number"
          value={formData.phone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            if (value.length <= 10) {
              handleChange({
                target: {
                  name: "phone",
                  value,
                },
              });
            }
          }}
          className="border rounded-xl p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="border rounded-xl p-3"
        >
          <option value="">Business Type</option>
          <option>FMCG</option>
          <option>E-Commerce</option>
          <option>Steel</option>
          <option>Industrial Goods</option>
          <option>Distribution & Logistics</option>
        </select>

        <input
          name="gst"
          placeholder="GST Number (Optional)"
          value={formData.gst}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="border rounded-xl p-3"
        />

        <select
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="border rounded-xl p-3"
        >
          <option value="">Required Duration</option>
          <option>1 Month</option>
          <option>3 Months</option>
          <option>6 Months</option>
          <option>12 Months</option>
          <option>Long Term</option>
        </select>
      </div>

      <textarea
        name="requirements"
        value={formData.requirements}
        onChange={handleChange}
        rows="5"
        placeholder="Additional Requirements"
        className="w-full border rounded-xl p-3 mt-6"
      />

      <button
        onClick={handleNextStep}
        className="
          mt-8
          w-full
          bg-[#D4A017]
          hover:bg-[#c49216]
          text-[#071229]
          font-semibold
          py-4
          rounded-xl
          transition
        "
      >
        Continue To Summary
      </button>
    </div>
  );
}
