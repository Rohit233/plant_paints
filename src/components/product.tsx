"use client";
import { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import HeroParallax from "./heroParalla";
import { Phone } from "lucide-react";

const product = [
  {
    title: "MARVAL Luxury Emulsion",
    image: "/assets/house/1.jpg",
    description: "A luxurious finish for modern interiors with long-lasting sheen.",
  },
  {
    title: "SPARX Acrylic Emulsion",
    image: "/assets/house/2.webp",
    description: "High-performance emulsion offering excellent coverage and durability.",
  },
  {
    title: "TRENCH COAT Luxury Emulsion",
    image: "/assets/house/19.jpg",
    description: "Sophisticated finish designed for elegant and timeless walls.",
  },
  {
    title: "VITARA Premium Emulsion",
    image: "/assets/house/17.avif",
    description: "Premium emulsion crafted for vibrant walls and smooth finishes.",
  },
  {
    title: "EXPERT Acrylic Water-Based Primer",
    image: "/assets/house/20.webp",
    description: "Superior adhesion for a flawless painting foundation.",
  },
  {
    title: "ELITE Acrylic Washable Distemper",
    image: "/assets/house/15.jpg",
    description: "Washable and budget-friendly solution for everyday walls.",
  },
  {
    title: "Planet Paints WALL PUTTY",
    image: "/assets/house/7.jpg",
    description: "Smoothens and prepares your walls for perfect painting.",
  },
  {
    title: "ACRYLIC WALL TEXTURE",
    image: "/assets/house/18.png",
    description: "Add depth and character with our stylish wall textures.",
  },
  {
    title: "Orchid Paints WALL PUTTY",
    image: "/assets/house/9.jpg",
    description: "Refined finish for interior and exterior walls.",
  },
  {
    title: "GREEK",
    image: "/assets/house/10.jpg",
    description: "Inspired by Mediterranean charm for a bright ambiance.",
  },
  {
    title: "TREO",
    image: "/assets/house/11.webp",
    description: "Modern textures and tones perfect for contemporary homes.",
  },
  {
    title: "ASTIR",
    image: "/assets/house/12.jpg",
    description: "Balanced tones with great coverage and durability.",
  },
  {
    title: "INSTA",
    image: "/assets/house/13.webp",
    description: "Quick-drying paint ideal for instant transformations.",
  },
  {
    title: "SMART",
    image: "/assets/house/14.jpg",
    description: "Intelligent color formulation with anti-fade technology.",
  },
  {
    title: "SPLASH",
    image: "/assets/house/51.webp",
    description: "Vibrant and joyful tones perfect for accent walls.",
  },
  {
    title: "STROKE",
    image: "/assets/house/52.jpg",
    description: "Bold strokes for creative and artistic wall designs.",
  },
];

export default function Product({ id }: { id: string | null }) {
  const [selectedProduct, setSelectedProduct] = useState<{
    title: string;
    image: string;
    description: string;
  } | null>(null);

  return (
    <>
      {id && !selectedProduct && <HeroParallax id={id} />}

      {selectedProduct && (
        <div className="w-full h-[90vh] relative">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.title}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-2xl sm:text-4xl font-bold mb-3">
              {selectedProduct.title}
            </h2>
            <p className="text-white text-base sm:text-lg max-w-xl">
              {selectedProduct.description}
            </p>
          </div>
        </div>
      )}

      <section id="product" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Premium Paint Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Discover our professional-grade paints and finishes, formulated with eco-friendly materials for stunning, durable results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {product.map((item, index) => (
              <Card
                key={index}
                onClick={() => setSelectedProduct(item)}
                className="cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden rounded-xl bg-white border border-gray-200"
              >
                <div className="relative h-64 sm:h-72 w-full rounded-t-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg font-semibold text-gray-800">
                    {item.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-12 bg-blue-900 text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to transform your space?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg">
              Get a free consultation and quote from our painting experts.
            </p>
          </div>
          <a
            href="tel:1234567890"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-6 py-3 rounded-lg font-bold transition duration-300 flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            <span>CALL US NOW</span>
          </a>
        </div>
      </section>
    </>
  );
}