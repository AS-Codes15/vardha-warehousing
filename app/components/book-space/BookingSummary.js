export default function BookingSummary({ summaryData }) {
  return (
    <div className="bg-gradient-to-br from-[#071229] via-[#0D234B] to-[#17386F] rounded-[32px] p-8 text-white shadow-2xl sticky top-24">

      <p className="text-[#D4A017] uppercase tracking-widest text-sm mb-3">
        Live Estimate
      </p>

      <h2 className="text-4xl font-bold mb-8">
        {Number(summaryData.area || 0).toLocaleString()} sq.ft
      </h2>

      <div className="space-y-6">

        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-slate-300">Rate</span>
          <span className="font-semibold">
            ₹{summaryData.rate || 0}/sq.ft
          </span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-slate-300">Monthly Cost</span>

          <span className="font-semibold text-[#D4A017]">
            ₹{Number(summaryData.amount || 0).toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-slate-300">Height</span>

          <span>{summaryData.height || 0} ft</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-slate-300">Location</span>

          <span>Gorakhpur</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-300">Road Access</span>

          <span>118 ft</span>
        </div>

      </div>

      <div className="mt-10 p-5 rounded-2xl bg-[#D4A017]/10 border border-[#D4A017]/20">
        <p className="text-sm text-slate-300">
          Warehouse Expertise Since 1987
        </p>
      </div>

    </div>
  );
}