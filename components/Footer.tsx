import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-6 text-center bg-white/50 backdrop-blur-lg rounded-t-3xl shadow-inner border-t border-[#e6c77a]/40">
      
      {/* Main Text */}
      <p className="text-lg md:text-xl font-serif font-semibold text-[#3a5a40]">
        © 2026 Noor-E-Eid Henna Fest
      </p>

      {/* Built With Love */}
      <p className="text-sm md:text-base mt-2 flex justify-center items-center gap-1 text-[#344e41]">
        Built with <FaHeart className="text-red-500 animate-pulse" /> by{" "}
        <a
          href="https://jannatullima.vercel.app/"
          className="text-[#e6c77a] hover:text-[#d4b459] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jannatul Lima
        </a>
      </p>

    </footer>
  );
};

export default Footer;