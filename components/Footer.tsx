import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="
      py-10
      px-4 md:px-6
      text-center
      bg-[#f3efe6]
      border-t border-[#e6c77a]/40
    ">

      <div className="max-w-6xl mx-auto">

        {/* Festival Name */}
        <p className="
          text-lg
          md:text-xl
          font-serif
          font-semibold
          text-[#3a5a40]
          tracking-wide
        ">
          © 2026 Noor-E-Eid Henna Fest
        </p>

        {/* Decorative Divider */}
        <div className="w-20 h-[2px] bg-[#e6c77a] mx-auto my-4 rounded-full"></div>

        {/* Built With Love */}
        <p className="
          text-sm
          md:text-base
          flex
          justify-center
          items-center
          gap-2
          text-[#344e41]
        ">
          Built with
          <FaHeart className="text-[#c44536] animate-pulse" />
          by
          <a
            href="https://jannatullima.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[#3a5a40]
              font-medium
              hover:text-[#e6c77a]
              transition-colors
              duration-300
            "
          >
            Jannatul Lima
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;