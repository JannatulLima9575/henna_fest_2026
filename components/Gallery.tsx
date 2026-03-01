import Image from "next/image";

const images = [
  "/mehendi1.jpg",
  "/mehendi2.jpg",
  "/mehendi3.jpg",
];

const Gallery = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f8f5ef] text-center">

      {/* Title */}
      <h2 className="
      text-3xl
      md:text-5xl
      font-serif
      font-bold
      text-[#3a5a40]
      mb-10
      md:mb-14
      ">
        Mehendi Styles Gallery 🌿
      </h2>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">

        {images.map((src, index) => (
          <div
            key={index}
            className="
            relative
            overflow-hidden
            rounded-2xl
            md:rounded-3xl
            shadow-xl
            group
            "
          >

            {/* Image */}
            <Image
              src={src}
              alt="Mehendi Design"
              width={500}
              height={500}
              className="
              w-full
              h-64
              md:h-80
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
              "
            />

            {/* Soft Overlay */}
            <div className="
            absolute inset-0
            bg-black/0
            group-hover:bg-black/20
            transition duration-300
            " />

          </div>
        ))}

      </div>

    </section>
  );
};

export default Gallery;