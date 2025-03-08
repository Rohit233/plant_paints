import { PaintbrushIcon as Paint, Palette, Shield, Sparkles } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    title: "Premium Interior Paints",
    description: "Low-VOC, washable paints with superior coverage for beautiful, long-lasting interior walls",
    icon: Paint,
    image: "https://cdn.pixabay.com/photo/2024/01/22/12/07/ai-generated-8525194_1280.png"
  },
  {
    title: "Weather-Shield Exteriors",
    description: "UV and weather-resistant formulations that protect and beautify your home's exterior for years",
    icon: Shield,
    image: "https://cdn.pixabay.com/photo/2015/01/12/10/44/lost-places-597166_1280.jpg"
  },
  {
    title: "Designer Color Collections",
    description: "Expertly curated palettes from modern neutrals to bold statement colors for any design vision",
    icon: Palette,
    image: "https://cdn.pixabay.com/photo/2016/07/10/19/18/the-interior-of-the-1508271_1280.jpg"
  },
  {
    title: "Specialty Finishes",
    description: "Create stunning visual effects with our metallic, textured, and decorative finish options",
    icon: Sparkles,
    image: "https://cdn.pixabay.com/photo/2017/06/04/08/28/color-patterns-2370497_1280.jpg"
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Premium Paint Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our professional-grade paints and finishes, formulated with eco-friendly materials for stunning, durable results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <product.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-primary font-medium hover:underline">View Products →</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

