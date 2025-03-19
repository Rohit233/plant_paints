"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const sections = [
    {
      title: " MARVAL Luxury Emulsion",
      subtitle: "Extra Sheen Finish for Lasting Elegance",
      description:
        "Planet Paints MARVAL Luxury Emulsion – A premium paint with an extra sheen finish for a smooth, elegant look. Designed for long-lasting protection, it resists stains and features anti-dust technology for easy maintenance. Its washable formula ensures effortless cleaning, keeping walls fresh and vibrant. Elevate your space with MARVAL – where luxury meets durability.",
      image: "/assets/1.png",
      bgColor: "bg-blue-200",
      textColor: "text-black",
    },
    {
      title: "SPARX Acrylic Emulsion",
      subtitle: "Premium Interior & Exterior Paint for a Smooth Finish",
      description:
        "SPARX Acrylic Emulsion is a high-quality paint designed for both interior and exterior applications. It provides a smooth finish with excellent coverage, ensuring vibrant and long-lasting walls. Its washable formula makes maintenance effortless, while anti-fungal properties protect surfaces from damage. The durable composition ensures resistance against stains and weather conditions. Choose SPARX for elegance, protection, and lasting beauty.",
      image: "/assets/2.png",
      bgColor: "bg-green-200",
      textColor: "text-black",
    },
    {
      title: "TRENCH COAT Luxury Emulsion",
      subtitle: "Extra Sheen Finish",
      description:
        "TRENCH COAT Luxury Emulsion offers a premium extra sheen finish for a rich and elegant look. Designed for long-lasting protection, it ensures vibrant and durable walls. Its washable formula allows for easy cleaning, maintaining a fresh appearance. The excellent stain resistance keeps your walls spotless. With elastomeric properties, it provides superior flexibility and crack resistance. Experience luxury, durability, and effortless maintenance with TRENCH COAT.",
      image: "/assets/3.png",
      bgColor: "bg-yellow-200",
      textColor: "text-black",
    },
    {
      title: "VITARA Premium Emulsion",
      subtitle: "Interior & Exterior",
      description:
        "VITARA Premium Emulsion offers superior coverage with a smooth and elegant finish for both interior and exterior walls. Its long-lasting protection ensures durability against weather and daily wear. The washable formula allows easy maintenance, keeping walls fresh and clean. Featuring antibacterial resistance, it helps maintain a healthier environment. The best coverage technology ensures fewer coats for a flawless look. Choose VITARA for beauty, protection, and lasting performance.",
      image: "/assets/4.png",
      bgColor: "bg-purple-200",
      textColor: "text-black",
    },
    {
      title: "EXPERT Acrylic Water-Based Primer",
      subtitle: "Lasting Gloss and Durability",
      description:
         "EXPERT Acrylic Water-Based Primer provides a strong foundation for your walls, ensuring excellent adhesion for topcoats. Its alkali resistance protects surfaces from moisture damage, enhancing durability. Designed for easy application, it ensures smooth and uniform coverage. The primer effectively seals dry porous surfaces, reducing paint absorption for a flawless finish. Suitable for both interior and exterior use, EXPERT Primer enhances the longevity and appearance of your paint.",
      image: "/assets/5.png",
      bgColor: "bg-cyan-200",
      textColor: "text-black",
    },
    {
      title: "ELITE Acrylic Washable Distempers",
      subtitle: "Interior | 100% Acrylic",
      description:
         "ELITE Acrylic Washable Distemper is a high-quality interior paint designed for long-lasting beauty. Its 100% acrylic formula ensures excellent washability, allowing easy removal of stains and dirt. The paint provides a smooth and rich finish, enhancing the elegance of your walls. With its superior coverage, it minimizes paint consumption while offering a vibrant look. ELITE Distemper is durable, resistant to peeling, and maintains its charm for years. Perfect for residential and commercial interiors, it is an ideal choice for modern spaces.",
      image: "/assets/7.png",
      bgColor: "bg-pink-200",
      textColor: "text-black",
    },
    {
      title: "Planet Paints WALL PUTTY",
      subtitle: "100% Waterproof Super White | Water Resistant | No Curing Required",
      description:
          "Planet Wall Putty is a high-performance wall preparation material designed to create a smooth, durable, and even surface for painting. Its polymer-based formula ensures superior adhesion and strength, preventing cracks and shrinkage. With anti-fungal properties, it resists microbial growth, making it ideal for humid environments. The putty provides a white, smooth, and glossy finish, enhancing paint longevity and aesthetics. Being water-resistant, it offers long-lasting protection against moisture damage. Perfect for interior and exterior walls, this putty requires no curing, ensuring a hassle-free application process.",
      image: "/assets/6.png",
      bgColor: "bg-amber-300",
      textColor: "text-black",
    },
    {
      title: "ACRYLIC WALL TEXTURE",
      subtitle: "Premium Water-Resistant Wall Finish for Interior & Exterior",
      description:
         "Planet Paints Acrylic Wall Texture is a high-quality textured coating designed to give walls a rich, decorative, and durable finish. It is formulated with acrylic-based resins that provide excellent adhesion and flexibility, ensuring long-lasting performance. The water-resistant properties make it ideal for both interior and exterior surfaces, protecting walls from moisture, cracks, and environmental damage. Additionally, its anti-fungal and anti-algae formulation keeps walls fresh and clean for years.",
      image: "/assets/13.png",
      bgColor: "bg-red-200",
      textColor: "text-black",
    },
    {
      title: "Orchid Paints WALL PUTTY",
      subtitle: "Superior Finish for Stronger Walls",
      description:
       "Orchid Paints Wall Putty is a high-performance wall preparation material designed to provide a smooth and durable base for paint application. It enhances the adhesion and longevity of paints by filling cracks, leveling surfaces, and preventing moisture absorption. This premium-quality putty ensures flawless walls with a superior finish, making it ideal for both interior and exterior applications.Perfect for residential and commercial spaces, it strengthens walls and improves the overall aesthetic appeal of painted surfaces.",
      image: "/assets/15.png",
      bgColor: "bg-indigo-300",
      textColor: "text-black",
    },
  ];
export default function HeroParallax() {
  return (
    <div className="relative w-full overflow-hidden">
      {sections.map((section, index) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"],
        });
        const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

        return (
          <section
            key={index}
            ref={ref}
            className={`relative h-screen flex items-center justify-center ${section.bgColor}`}
          >
            <div className="relative flex w-full h-full max-w-6xl mx-auto px-8 lg:px-16">
              <div className={`flex flex-col items-start justify-center w-1/2 ${section.textColor}`}>
                <h1 className="text-5xl font-bold">{section.title}</h1>
                <p className="text-lg mt-4">{section.subtitle}</p>
                <p className="text-base mt-2">{section.description}</p>
                <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-md hover:bg-yellow-600 transition">
                  Know More
                </button>
              </div>
              <div className="w-1/2 relative h-full overflow-hidden">
                <motion.div style={{ y }} className="absolute w-full h-full">
                  <Image
                    src={section.image}
                    alt={section.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
