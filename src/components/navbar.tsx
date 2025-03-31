"use client";

import Link from "next/link";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const products = [
  { title: "Marval luxury emulsion", image: "/assets/1.png", link: "/products/" },
  { title: "Sparx acrylic emulsion", image: "/assets/2.png", link: "/products/" },
  { title: "Trench coat luxury emulsion", image: "/assets/3.png", link: "/products/" },
  { title: "Vitara premium emulsion", image: "/assets/4.png", link: "/products/" },
  { title: "Expert acrylic water-based primer", image: "/assets/5.png", link: "/products/" },
  { title: "Elite acrylic washable distemper", image: "/assets/7.png", link: "/products/" },
  { title: "Planet paints wall putty", image: "/assets/6.png", link: "/products/" },
  { title: "Acrylic wall texture", image: "/assets/13.png", link: "/products/" },
  { title: "Orchid paints wall putty", image: "/assets/15.png", link: "/products/" },
];

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border bg-white shadow-lg">
      <div className="flex h-16 items-center justify-between px-2 w-full">
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/logo.png" alt="Logo" width={300} height={60} className="ml-[-62px]" />
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden ml-2" >
              <Menu className="!h-8 !w-6" strokeWidth={3} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <VisuallyHidden asChild>
              <SheetTitle >Mobile Navigation Menu</SheetTitle>
            </VisuallyHidden >
            <nav className="flex flex-col gap-4">
              <button
                className="flex w-min items-center text-lg font-medium"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              >
                Products
                {isMobileProductsOpen ? <ChevronUp className="ml-auto h-5 w-5" /> : <ChevronDown className="ml-auto h-5 w-5" />}
              </button>

              {isMobileProductsOpen && (
                <div className="ml-4 flex flex-col gap-2">
                  {products.map((product, index) => (
                    <Link key={index} href={product.link} className="text-sm font-medium text-black hover:text-primary">
                      {product.title}
                    </Link>
                  ))}
                </div>
              )}

              <Link href="/about" className="text-lg font-medium text-black hover:text-primary">About</Link>
              <Link href="/contact" className="text-lg font-medium text-black hover:text-primary">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              className="flex items-center text-sm font-medium text-black hover:text-primary transition-colors"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              Products {isProductsOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>

            {isProductsOpen && (
              <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 bg-white border rounded-lg shadow-lg p-6 w-[36rem] grid grid-cols-3 gap-6 items-center justify-center text-center">
                {products.map((product, index) => (
                  <Link key={index} href={product.link} className="flex flex-col items-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={250}
                      height={250}
                      className="rounded"
                    />
                    <span className="text-sm text-black">{product.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="text-sm font-medium text-black hover:text-primary transition-colors">About</Link>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
