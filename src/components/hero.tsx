"use client";

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
    image: "/assets/42.jpg",
  },
  {
    title: "Eco-Friendly & Low VOC Formulas",
    description: "Breathe easy with our sustainable, non-toxic paint collection",
    image: "/assets/41.webp",
  },
  {
    title: "Professional Results, Every Time",
    description: "Superior coverage and durability trusted by contractors nationwide",
    image: "/assets/43.jpg",
  },
  {
    title: "Find Your Perfect Shade",
    description: "Browse over 2,000 curated colors or create your custom match",
    image: "/assets/44.webp", 
  },
  {
    title: "The Ultimate Finish for Every Project",
    description: "From matte to high-gloss, interior to exterior, we've got you covered",
    image: "/assets/45.jpeg",
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
                <div className="text-center text-white space-y-4 px-4 md:px-8"> {/* Added padding */}
                  <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1> {/* Adjusted sizes */}
                  <p className="text-md md:text-lg">{slide.description}</p> {/* Adjusted sizes */}
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
