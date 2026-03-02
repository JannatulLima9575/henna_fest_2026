"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/01706555246"
      target="_blank"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
};

export default WhatsAppButton;