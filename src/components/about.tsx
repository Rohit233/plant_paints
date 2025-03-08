import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About PlantPaints</h2>
            <p className="text-muted-foreground">
              With over two decades of experience in the paint industry, PlantPaints has been transforming spaces and
              bringing colors to life. Our premium paints combine durability, vibrant pigments, and eco-friendly 
              formulations to deliver exceptional results for every project.
            </p>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">20+</span>
                </div>
                <div>
                  <h3 className="font-semibold">Years of Excellence</h3>
                  <p className="text-sm text-muted-foreground">Setting color trends since 2000</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">5K+</span>
                </div>
                <div>
                  <h3 className="font-semibold">Happy Customers</h3>
                  <p className="text-sm text-muted-foreground">From homeowners to professional contractors</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-bold text-primary">2K+</span>
                </div>
                <div>
                  <h3 className="font-semibold">Color Options</h3>
                  <p className="text-sm text-muted-foreground">Custom tints and designer palettes</p>
                </div>
              </div>
            </div>
            <Button size="lg">Discover Our Story</Button>
          </div>
          <div className="space-y-4">
            <div className="relative h-[350px] w-full">
              <Image
                src="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="PlantPaints Paint Showroom"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[120px]">
                <Image
                  src="https://cdn.pixabay.com/photo/2017/01/16/14/58/color-patterns-1984230_1280.jpg"
                  alt="Custom Paint Mixing"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[120px]">
                <Image
                  src="https://cdn.pixabay.com/photo/2019/05/09/15/45/paint-4191399_1280.jpg"
                  alt="Color Sample Wall"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

