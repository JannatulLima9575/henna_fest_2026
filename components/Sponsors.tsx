const Sponsors = () => {

  const sponsors = [
    { name: "Promy Khan", link: "https://www.facebook.com/promykhann" },
    { name: "Red Beauty Salon", link: "https://www.facebook.com/p/RED-Beauty-Salon-61571536495861/" },
    { name: "Night Appetite", link: "https://www.facebook.com/night.appetite.sylhet/" }
  ];

  return (
    <section className="py-14 md:py-20 px-4 md:px-6 bg-[#f8f5ef]">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">

        {/* Left Title */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="
            text-2xl
            md:text-3xl
            font-serif
            font-semibold
            text-[#3a5a40]
            tracking-wide
          ">
            Our Proud Sponsors 🤎
          </h2>

          {/* Small underline accent */}
          <div className="w-16 h-[3px] bg-[#e6c77a] mt-3 mx-auto md:mx-0 rounded-full"></div>
        </div>

        {/* Right Sponsor Cards */}
        <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">

          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white/80
                backdrop-blur-lg
                rounded-2xl
                px-6 md:px-8
                py-4
                shadow-lg
                border border-[#e6c77a]/40
                text-[#344e41]
                font-medium
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <p className="text-sm md:text-lg">
                {sponsor.name}
              </p>
            </a>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Sponsors;