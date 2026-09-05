"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [requestId, setRequestId] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Message should be at least 20 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    alert("Submit clicked");
    console.log("FORM SUBMITTED");
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          phone: form.phone,
          email: form.email,
          message: form.message,
          warehouseRequirement: "Contact Page Enquiry",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry");
      }

      setRequestId(data.requestId);
      setSuccess(true);

      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}

          <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-xl">
            <h2 className="text-3xl font-bold text-[#071229] mb-2">
              Send An Enquiry
            </h2>

            <p className="text-slate-600 mb-8">
              Tell us about your warehousing requirements.
            </p>

            {success && (
              <div className="mb-6 bg-green-100 text-green-700 px-4 py-3 rounded-xl">
                Enquiry submitted successfully.
                <br />
                Reference ID: <strong>{requestId}</strong>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}

              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Company */}

              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none transition"
              />

              {/* Phone */}

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value.replace(/\D/g, ""),
                    })
                  }
                  maxLength={10}
                  placeholder="Phone Number *"
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none transition"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}

              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none transition"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}

              <div>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your storage requirement *"
                  className="w-full p-4 rounded-xl border border-slate-200 focus:border-[#D4A017] focus:ring-2 focus:ring-[#D4A017]/20 outline-none resize-none transition"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#D4A017] hover:bg-[#c39316] text-[#071229] px-8 py-4 rounded-xl font-semibold transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          </div>

          {/* Quick Contact Panel */}

          <div className="bg-gradient-to-br from-[#071229] via-[#0D234B] to-[#17386F] rounded-[32px] p-10 text-white shadow-2xl">
            <p className="uppercase tracking-[4px] text-[#D4A017] mb-4">
              Quick Contact
            </p>

            <h3 className="text-3xl font-bold mb-8">
              Speak With Our Warehouse Team
            </h3>

            <div className="space-y-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="text-[#D4A017] font-semibold mb-1">
                  📞 Call Us
                </h4>

                <p className="text-slate-300">+91 9670111167</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="text-[#D4A017] font-semibold mb-1">
                  📱 WhatsApp Support
                </h4>

                <p className="text-slate-300">
                  Fast responses for warehouse enquiries
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="text-[#D4A017] font-semibold mb-1">
                  ✉️ Email Support
                </h4>

                <p className="text-slate-300">info@vardha.live</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="text-[#D4A017] font-semibold mb-1">
                  📍 Location
                </h4>

                <p className="text-slate-300">
                  Gorakhnath Mandir Road, Bargadwa, Gorakhpur
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3">
                <div className="bg-[#D4A017]/10 border border-[#D4A017]/20 rounded-2xl p-4">
                  <p className="text-sm text-slate-400">Response Time</p>

                  <h4 className="font-semibold mt-1">Within 24 Hours</h4>
                </div>

                <div className="bg-[#D4A017]/10 border border-[#D4A017]/20 rounded-2xl p-4">
                  <p className="text-sm text-slate-400">Site Visits</p>

                  <h4 className="font-semibold mt-1">By Appointment</h4>
                </div>
              </div>

              <a
                href="https://wa.me/919670111167"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#D4A017] hover:bg-[#c39214] text-[#071229] font-semibold py-4 rounded-xl transition mt-4"
              >
                WhatsApp Vardha
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
