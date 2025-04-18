"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    title: " MARVAL Luxury Emulsion",
    subtitle: "Extra Sheen Finish for Lasting Elegance",
    description:
      "A premium paint with an extra sheen finish for an elegant look. It offers long-lasting protection with stain resistance and anti-dust technology. The washable formula ensures easy maintenance and vibrant walls. Elevate your space with luxury and durability.",
    image: "/assets/1.png",
    bgColor: "bg-fuchsia-300",
    textColor: "text-black",
  },
  {
    title: "SPARX Acrylic Emulsion",
    subtitle: "Premium Interior & Exterior Paint for a Smooth Finish",
    description:
      "A premium paint for interior and exterior surfaces, offering a smooth finish with excellent coverage. Its washable formula ensures easy maintenance, while anti-fungal properties protect surfaces. Resistant to stains and weather conditions, it ensures long-lasting beauty. Choose SPARX for elegance and durability.",
    image: "/assets/2.png",
    bgColor: "bg-violet-300",
    textColor: "text-black",
  },
  {
    title: "TRENCH COAT Luxury Emulsion",
    subtitle: "Extra Sheen Finish",
    description:
      "A premium extra sheen paint for a rich, elegant finish. It offers long-lasting protection with stain resistance and superior flexibility. The washable formula ensures easy maintenance and a fresh look. Elastomeric properties provide crack resistance for durable walls. Experience luxury and lasting beauty with TRENCH COAT.",
    image: "/assets/3.png",
    bgColor: "bg-blue-300 ",
    textColor: "text-black",
  },
  {
    title: "VITARA Premium Emulsion",
    subtitle: "Interior & Exterior",
    description:
      "A high-quality paint for interior and exterior walls with a smooth, elegant finish. It offers long-lasting protection against weather and daily wear. The washable formula ensures easy maintenance and freshness. Antibacterial properties promote a healthier environment. Enjoy superior coverage with fewer coats for a flawless look.",
    image: "/assets/4.png",
    bgColor: "bg-yellow-200",
    textColor: "text-black",
  },
  {
    title: "EXPERT Acrylic Water-Based Primer",
    subtitle: "Lasting Gloss and Durability",
    description:
       "A high-performance primer ensuring strong adhesion for topcoats. Its alkali resistance protects surfaces from moisture damage. Designed for smooth, uniform coverage and reduced paint absorption. Suitable for interior and exterior use, it enhances durability. Achieve a flawless, long-lasting finish with EXPERT Primer.",
    image: "/assets/5.png",
    bgColor: "bg-cyan-200",
    textColor: "text-black",
  },
  {
    title: "ELITE Acrylic Washable Distempers",
    subtitle: "Interior | 100% Acrylic",
    description:
       "A premium 100% acrylic interior paint with excellent washability. It offers a smooth, rich finish for elegant walls. Superior coverage ensures minimal paint consumption and vibrant results. Durable and resistant to peeling for long-lasting beauty. Ideal for modern residential and commercial spaces.",
    image: "/assets/7.png",
    bgColor: "bg-pink-200",
    textColor: "text-black",
  },
  {
    title: "Planet Paints WALL PUTTY",
    subtitle: "100% Waterproof Super White | Water Resistant | No Curing Required",
    description:
        "A high-performance, 100% waterproof putty for smooth, durable surfaces. Its polymer-based formula ensures superior adhesion, preventing cracks and shrinkage. Anti-fungal and water-resistant properties protect against moisture damage. Provides a super white, glossy finish for enhanced paint longevity. No curing required, ensuring hassle-free application.",
    image: "/assets/6.png",
    bgColor: "bg-slate-300",
    textColor: "text-black",
  },
  {
    title: "ACRYLIC WALL TEXTURE",
    subtitle: "Premium Water-Resistant Wall Finish for Interior & Exterior",
    description:
       "A premium water-resistant textured coating for interior and exterior walls. Its acrylic-based formula ensures excellent adhesion, flexibility, and durability. Protects against moisture, cracks, and environmental damage. Anti-fungal and anti-algae properties keep walls fresh and clean. Enhance your space with a rich, decorative finish..",
    image: "/assets/13.png",
    bgColor: "bg-amber-200",
    textColor: "text-black",
  },
  {
    title: "Orchid Paints WALL PUTTY",
    subtitle: "Superior Finish for Stronger Walls",
    description:
     "A high-performance putty for a smooth, durable base. Enhances paint adhesion and longevity by filling cracks and leveling surfaces. Prevents moisture absorption for stronger walls. Ideal for interior and exterior applications. Ensures a flawless finish for residential and commercial spaces.",
    image: "/assets/15.png",
    bgColor: "bg-gray-200",
    textColor: "text-black",
  },
];


export default function HeroParallax() {
  const [carouselIndex, setCarouselIndex] = useState(2); // Start at 3rd index

  const handlePrev = () => {
    if (carouselIndex > 2) setCarouselIndex(carouselIndex - 1);
  };

  const handleNext = () => {
    if (carouselIndex < sections.length - 1) setCarouselIndex(carouselIndex + 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* First 2 static sections */}
      {sections.slice(0, 2).map((section, index) => (
        <section
          key={index}
          className={`relative flex flex-col md:flex-row items-center justify-center ${section.bgColor} py-10 md:py-12 pb-5 md:pb-10`}
        >
          <div className="relative flex flex-col md:flex-row w-full max-w-6xl mx-auto px-4 md:px-8">
            <div
              className={`flex flex-col items-start text-left justify-center w-full md:w-1/2 ${section.textColor} px-2 sm:px-4 md:px-8 mt-8 md:mt-0`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mt-4 sm:mt-0">
                {section.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4">
                {section.subtitle}
              </p>
              <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3 leading-relaxed w-full sm:w-auto">
                {section.description}
              </p>
            </div>
            <div className="hidden md:flex w-full md:w-1/2 relative mt-6 md:mt-0 justify-center">
              <motion.div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px]">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                />
              </motion.div>
            </div>
            <div className="flex md:hidden w-full relative mt-6 justify-center">
              <motion.div className="relative w-full h-[600px] sm:h-[400px]">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover rounded-lg"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Carousel section starts at index 2 */}
      {(() => {
        const currentSection = sections[carouselIndex];
        return (
          <section
            key="carousel"
            className={`relative flex flex-col md:flex-row items-center justify-center ${currentSection.bgColor} py-10 md:py-12 pb-5 md:pb-10`}
          >
            <div className="relative flex flex-col md:flex-row w-full max-w-6xl mx-auto px-4 md:px-8">
{/* Left Button */}
<button
  onClick={handlePrev}
  disabled={carouselIndex === 2}
  className="absolute md:left-[-120] top-1/2 -translate-y-1/2 z-10 text-gray-700 hover:text-black disabled:opacity-50 text-5xl font-extrabold"
>
  &lt;
</button>


              {/* Text Content */}
              <div
                className={`flex flex-col items-start text-left justify-center w-full md:w-1/2 ${currentSection.textColor} px-2 sm:px-4 md:px-8 mt-8 md:mt-0`}
              >
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mt-4 sm:mt-0">
                  {currentSection.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4">
                  {currentSection.subtitle}
                </p>
                <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-3 leading-relaxed w-full sm:w-auto">
                  {currentSection.description}
                </p>
              </div>

              {/* Desktop Image */}
              <div className="hidden md:flex w-full md:w-1/2 relative mt-6 md:mt-0 justify-center">
                <motion.div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px]">
                  <Image
                    src={currentSection.image}
                    alt={currentSection.title}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                </motion.div>
              </div>

              {/* Mobile Image */}
              <div className="flex md:hidden w-full relative mt-6 justify-center">
                <motion.div className="relative w-full h-[600px] sm:h-[400px]">
                  <Image
                    src={currentSection.image}
                    alt={currentSection.title}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                </motion.div>
              </div>

              {/* Right Button */}
              <button
  onClick={handleNext}
  disabled={carouselIndex === sections.length - 1}
  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-gray-700 hover:text-black disabled:opacity-50 text-5xl font-extrabold"
>
  &gt;
</button>

            </div>
          </section>
        );
      })()}
    </div>
  );
}