export default function ContactInfo() {
  const contacts = [
  {
    icon: "📍",
    title: "Location",
    value:
      "Gorakhnath Mandir Road, Bargadwa, Gorakhpur, Uttar Pradesh",
    action: "Get Directions",
    href: "https://maps.google.com/?q=Gorakhnath+Mandir+Road+Bargadwa+Gorakhpur",
  },
  {
    icon: "📞",
    title: "Phone",
    value: "+919670111167",
    action: "Call Now",
    href: "tel:+919670111167",
  },
  {
    icon: "✉️",
    title: "Email",
    value: "info@vardha.live",
    action: "Send Email",
    href: "mailto:info@vardha.live",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    value: "Chat directly with our warehouse team",
    action: "Start Chat",
    href: "https://wa.me/919670111167",
  },
];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#071229] via-[#0D234B] to-[#071229]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#D4A017] uppercase tracking-[4px] mb-4">
            Contact Information
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In Touch With Our Team
          </h2>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            Our team is available to assist with warehouse bookings, storage
            enquiries and logistics requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                bg-white
                rounded-[28px]
                p-8
                border border-slate-200
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4A017]" />

              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#071229]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mb-6
                  transition-all
                  duration-300
                  group-hover:bg-[#D4A017]
                  group-hover:text-[#071229]
                "
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#071229] mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed min-h-[72px]">
                {item.value}
              </p>

              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-block text-[#D4A017] font-semibold mt-5 hover:underline"
              >
                {item.action} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}