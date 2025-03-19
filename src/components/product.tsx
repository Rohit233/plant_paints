import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const product = [
  { title: "MARVAL Luxury Emulsion", image: "/assets/house/1.jpg" },
  { title: "SPARX Acrylic Emulsion", image: "/assets/house/2.webp" },
  { title: "TRENCH COAT Luxury Emulsion", image: "/assets/house/19.jpg"},
  { title: "VITARA Premium Emulsion", image: "/assets/house/17.avif"},
  { title: "EXPERT Acrylic Water-Based Primer", image: "/assets/house/20.webp"},
  { title: "ELITE Acrylic Washable Distemper", image: "/assets/house/15.jpg"},
  { title: "Planet Paints WALL PUTTY", image: "/assets/house/7.jpg"},
  { title: "ACRYLIC WALL TEXTURE", image: "/assets/house/18.png"},
  { title: "Orchid Paints WALL PUTTY", image: "/assets/house/9.jpg"},
  { title: "GREEK", image: "/assets/house/10.jpg"},
  { title: "TREO", image: "/assets/house/11.jpeg"},
  { title: "ASTIR", image: "/assets/house/12.jpg"},
  { title: "INSTA", image: "/assets/house/13.webp"},
  { title: "SMART", image: "/assets/house/14.jpg"},
];

export default function Product() {
  return (
    <section id="product" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Premium Paint Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our professional-grade paints and finishes, formulated with eco-friendly materials for stunning, durable results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {product.map((product, index) => (
            <Card 
              key={index} 
              className="hover:shadow-2xl transition-shadow transform hover:scale-105 overflow-hidden rounded-xl p-4 bg-white border border-gray-200"
            >
              <div className="relative h-64 w-full rounded-t-xl overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <button className="text-primary font-medium hover:underline">View Product →</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}