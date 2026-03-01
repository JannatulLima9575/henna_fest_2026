const Sponsors = () => {
  const sponsors = [
    { name: "Promy Khan", link: "https://www.facebook.com/promykhann" },
    { name: "Red Beauty Salon", link: "https://www.facebook.com/p/RED-Beauty-Salon-61571536495861/" },
    { name: "Night Appetite", link: "#" }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-[#f8f5ef]">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

        {/* Title */}
        <h2 className="text-3xl  font-serif font-bold text-[#3a5a40] md:flex-1">
          Sponsors by
        </h2>

        {/* Sponsor Cards */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 flex-1">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-lg rounded-2xl px-6 py-4 shadow-xl border border-[#e6c77a]/40 hover:-translate-y-1 transition-transform duration-300"
            >
              <p className="text-lg md:text-xl">{sponsor.name}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sponsors;