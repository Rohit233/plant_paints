"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

import { Button } from "@/components/ui/button"

const slides = [
  {
    title: "Transform Your Space with Premium Color",
    description: "Our designer palette brings luxury and style to any room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&h=600&fit=crop",
  },
  {
    title: "Eco-Friendly & Low VOC Formulas",
    description: "Breathe easy with our sustainable, non-toxic paint collection",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&h=600&fit=crop",
  },
  {
    title: "Professional Results, Every Time",
    description: "Superior coverage and durability trusted by contractors nationwide",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?q=80&w=1200&h=600&fit=crop",
  },
  {
    title: "Find Your Perfect Shade",
    description: "Browse over 2,000 curated colors or create your custom match",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=1200&h=600&fit=crop", 
  },
  {
    title: "The Ultimate Finish for Every Project",
    description: "From matte to high-gloss, interior to exterior, we've got you covered",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&h=600&fit=crop",
  },
]

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                width={1200}
                height={600}
                className="w-full object-cover h-[600px]"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
                  <p className="text-lg md:text-xl">{slide.description}</p>
                  <Button size="lg" className="mt-4">
                    Explore Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

