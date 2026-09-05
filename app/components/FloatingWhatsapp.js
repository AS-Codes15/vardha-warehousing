import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hello%20Vardha%20Warehousing,%20I%20would%20like%20to%20enquire%20about%20warehouse%20space."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-green-500
        hover:bg-green-600
        shadow-2xl
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
}