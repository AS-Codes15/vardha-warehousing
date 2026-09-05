export default function UseCasesHero() {
  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/usecase.png')",
        }}
      />

      <div className="absolute inset-0 bg-[#071229]/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        <p className="text-[#D4A017] uppercase tracking-[4px] mb-5">
          Use Cases
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
          Warehousing Solutions
          <br />
          For Every Business
        </h1>

        <p className="max-w-3xl mx-auto text-xl text-slate-300">
          Flexible warehouse solutions designed for inventory storage,
          distribution, logistics and commercial operations.
        </p>

      </div>
    </section>
  );
}