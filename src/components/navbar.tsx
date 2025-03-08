"use client"
import Link from "next/link"
import { Menu, Paintbrush } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Paintbrush className="h-6 w-6" />
          <span className="text-xl font-bold">PlantPaints</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden ml-auto">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link href="#products" className="text-lg font-medium">
                Products
              </Link>
              <Link href="#services" className="text-lg font-medium">
                Services
              </Link>
              <Link href="#about" className="text-lg font-medium">
                About
              </Link>
              <Link href="#contact" className="text-lg font-medium">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="ml-auto hidden lg:flex gap-6">
          <Link href="#products" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Button asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

