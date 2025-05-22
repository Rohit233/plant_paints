"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import HeroParallax from "./heroParalla";

const product = [
  {
    title: "AAC Blocks",
    image: "/assets/110.webp",
    bgColor: "bg-emerald-100", // Light green background
    id:20
  },
  {
    title: "MARVAL Luxury Emulsion",
    image: "/assets/1b.png",
    bgColor: "bg-emerald-100", // Light green background
    id:1
  },
  {
    id:2,
    title: "SPARX Acrylic Emulsion",
    image: "/assets/2b.png",
    bgColor: "bg-blue-100", // Light blue background
  },
  {
    id:3,
    title: "TRENCH COAT Luxury Emulsion",
    image: "/assets/3b.png",
    bgColor: "bg-amber-100", // Light amber background
  },
  {
    id:4,
    title: "VITARA Premium Emulsion",
    image: "/assets/4b.png",
    bgColor: "bg-purple-100", // Light purple background
  },
  {
    id:5,
    title: "EXPERT Acrylic Water-Based Primer",
    image: "/assets/5b.png",
    bgColor: "bg-gray-100", // Light gray background
  },
  {
    id:6,
    title: "ELITE Acrylic Washable Distemper",
    image: "/assets/6b.png",
    bgColor: "bg-sky-100", // Light sky blue background
  },
  {
    id:7,
    title: "GREEK",
    image: "/assets/10b.png",
    bgColor: "bg-cyan-100", // Light cyan background
  },
  {
    id:8,
    title: "TREO",
    image: "/assets/11b.png",
    bgColor: "bg-indigo-100", // Light indigo background
  },
  {
    id:9,
    title: "ASTIR",
    image: "/assets/12b.png",
    bgColor: "bg-teal-100", // Light teal background
  },
  {
    id:10,
    title: "INSTA",
    image: "/assets/13b.png",
    bgColor: "bg-rose-100", // Light rose background
  },
  {
    id:11,
    title: "SMART",
    image: "/assets/14b.png",
    bgColor: "bg-orange-100", // Light orange background
  },
  {
    id:12,
    title: "SPLASH",
    image: "/assets/15b.png",
    bgColor: "bg-pink-100", // Light pink background
  },
  {
    id:13,
    title: "STROKE",
    image: "/assets/16b.png",
    bgColor: "bg-violet-100", // Light violet background
  },
  {
    id:14,
    title: " Block Joining Mortar",
    image: "/assets/105.jpg",
    bgColor: "bg-stone-100", // Light stone background
  },
  {
    id:15,
    title: " Wall Plaster",
    image: "/assets/106.jpg",
    bgColor: "bg-neutral-100", // Light neutral background
  },
  {
    id:16,
    title: "Tile Adhesive",
    image: "/assets/107.jpg",
    bgColor: "bg-slate-100", // Light slate background
  },
  {
    id:17,
    title: "Planet Paints WALL PUTTY",
    image: "/assets/7b.png",
    bgColor: "bg-lime-100", // Light lime background
  },
  {
    id:18,
    title: "ACRYLIC WALL TEXTURE",
    image: "/assets/8b.png",
    bgColor: "bg-yellow-100", // Light yellow background
  },
  {
    id:19,
    title: "Orchid Paints WALL PUTTY",
    image: "/assets/9b.png",
    bgColor: "bg-red-100", // Light red background
  },
  {
    id:21,
    title: "CORPORATE GIFTING SOLOUTIONS",
    image: "/assets/corporate-gifts.jpg",
    bgColor: "bg-red-100", // Light red background
  },
  {
    id:22,
    title: "BOPP TAPE SUPPLIER",
    image: "/assets/self-adhesive.jpeg",
    bgColor: "bg-red-100", // Light red background
  },
  
];

export default function Product({id}: { id: string | null }) {
  const router = useRouter();

  return (
    <>
     {id && <HeroParallax id={id} />}

      {/* Product Section */}
      <section
        id="product"
        className="py-20 bg-[#f5f7fa] px-4 sm:px-6 lg:px-12"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Premium Paint Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Discover our professional-grade paints and finishes, formulated
              with eco-friendly materials for stunning, durable results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {product.map((item, index) => (
              <Card
                key={index}
                onClick={() => {router.push(`/products?id=${item.id}`);}}
                // onClick={() => {setSelectedProduct(item)}}
                className={`cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden rounded-2xl border border-gray-200 ${item.bgColor}`}
              >
                <div className="relative h-80 sm:h-96 w-full rounded-t-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
                  <CardTitle className="text-base sm:text-lg font-semibold text-gray-800">
                    {item.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
            href="tel:7350503873"
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
