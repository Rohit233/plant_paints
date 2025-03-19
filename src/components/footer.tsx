import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              
              <span className="text-xl font-bold text-white">PlantPaints</span>
            </div>
            <p className="text-sm">Transform your space with our premium quality paints and expert color solutions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="text-sm hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-sm">Plot No53, Industrial area</li>
              <li className="text-sm">chikalthana MIDC Cha.Sambhajinagar.</li>
              <li className="text-sm">Phone: (123) 456-7890</li>
              <li className="text-sm">care@planetpaints.in</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container py-6 text-center text-sm">
          © {new Date().getFullYear()} PlantPaints. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

