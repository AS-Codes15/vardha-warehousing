export default function BookingSteps({ currentStep }) {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <div
            className={`w-12 h-12 rounded-full font-bold flex items-center justify-center
${
  currentStep >= 1
    ? "bg-[#D4A017] text-[#071229]"
    : "bg-slate-200 text-slate-500"
}`}
          >
            1
          </div>

          <div className="ml-3">
            <p className="font-semibold text-[#071229]">Details</p>
          </div>
        </div>

        <div className="w-24 h-[2px] bg-slate-300 mx-6"></div>

        <div className="flex items-center">
          <div
            className={`w-12 h-12 rounded-full font-bold flex items-center justify-center
${
  currentStep >= 2
    ? "bg-[#D4A017] text-[#071229]"
    : "bg-slate-200 text-slate-500"
}`}
          >
            2
          </div>

          <div className="ml-3">
            <p className="font-semibold text-slate-500">Summary</p>
          </div>
        </div>

        <div className="w-24 h-[2px] bg-slate-300 mx-6"></div>

        <div className="flex items-center">
          <div
            className={`w-12 h-12 rounded-full font-bold flex items-center justify-center
${
  currentStep >= 3
    ? "bg-[#D4A017] text-[#071229]"
    : "bg-slate-200 text-slate-500"
}`}
          >
            3
          </div>

          <div className="ml-3">
            <p className="font-semibold text-slate-500">Confirmation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
