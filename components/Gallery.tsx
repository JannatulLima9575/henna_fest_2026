import Image from "next/image";

const images = [
  "/mehendi1.jpg",
  "/mehendi2.jpg",
  "/mehendi3.jpg",
];

const Gallery = () => {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-4xl font-bold text-rose-700 mb-12">
        Mehendi Styles Gallery 🤎
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl group"
          >
            <Image
              src={src}
              alt="Mehendi Design"
              width={400}
              height={400}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;