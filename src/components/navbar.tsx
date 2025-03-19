"use client";

import Link from "next/link";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { useRouter } from "next/navigation";

const products = [
  { title: "MARVAL Luxury Emulsion", image: "/assets/1.png" },
  { title: "SPARX Acrylic Emulsion", image: "/assets/2.png" },
  { title: "TRENCH COAT Luxury Emulsion", image: "/assets/3.png" },
  { title: "VITARA Premium Emulsion", image: "/assets/4.png" },
  { title: "EXPERT Acrylic Water-Based Primer", image: "/assets/5.png" },
  { title: "ELITE Acrylic Washable Distemper", image: "/assets/7.png" },
  { title: "Planet Paints WALL PUTTY", image: "/assets/6.png" },
  { title: "ACRYLIC WALL TEXTURE", image: "/assets/13.png" },
  { title: "Orchid Paints WALL PUTTY", image: "/assets/15.png" },
];

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/logo.png" alt="Logo" width={230} height={40} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link href="/products" className="text-lg font-medium">Products</Link>
              <Link href="#services" className="text-lg font-medium">Services</Link>
              <Link href="#about" className="text-lg font-medium">About</Link>
              <Link href="#contact" className="text-lg font-medium">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden lg:flex gap-6">
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              className="flex items-center text-sm font-medium hover:text-primary transition-colors"
              onClick={() => router.push("/products")}
            >
              Products {isProductsOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
            </button>
            {isProductsOpen && (
              <div className="absolute left-1/2 top-full transform -translate-x-1/2 mt-2 bg-white border rounded-lg shadow-lg p-6 w-[36rem] grid grid-cols-3 gap-6 items-center justify-center text-center">
                {products.map((product, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={250}
                      height={250}
                      className="rounded"
                    />
                    <span className="text-sm">{product.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
