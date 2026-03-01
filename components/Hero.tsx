const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-pink-200 via-rose-100 to-orange-100">
      
      <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-6">
        Henna Fest 2026
      </h1>

      <p className="text-lg md:text-2xl mb-6 max-w-2xl">
        Celebrate beauty, tradition & creativity with stunning Mehendi Art
      </p>

      <div className="bg-white shadow-xl rounded-2xl px-8 py-6">
        <p className="text-xl font-semibold">📍 Sylhet</p>
        <p className="text-lg">📅 25th March 2026</p>
      </div>

      <button className="mt-8 px-8 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition">
        Register Now
      </button>
    </section>
  );
};

export default Hero;