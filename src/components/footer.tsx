import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Planet Paints</h3>
            <p className="text-gray-400 mb-4">
              Transforming homes with professional painting services since 2005.
              Quality, reliability, and customer satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {/* Facebook */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
  href="https://www.instagram.com/planetpaints50?utm_source=qr&igsh=aGlhbXZudzk1aGQz"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-yellow-400 transition-colors"
>
  {/* Instagram */}
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M7.75 2C5.126 2 3 4.126 3 6.75v10.5C3 19.874 5.126 22 7.75 22h8.5C18.874 22 21 19.874 21 17.25V6.75C21 4.126 18.874 2 16.25 2h-8.5zM2 6.75C2 3.574 4.574 1 7.75 1h8.5C19.426 1 22 3.574 22 6.75v10.5c0 3.176-2.574 5.75-5.75 5.75h-8.5C4.574 23 2 20.426 2 17.25V6.75zm12.25 4.25a4.25 4.25 0 1 0-8.5 0 4.25 4.25 0 0 0 8.5 0zm-1.5 0a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0zm3.25-4.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
</a>
<a
  href="https://www.twitter.com/yourpage"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white hover:text-yellow-400 transition-colors"
>
  {/* Twitter */}
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Government Color Provided",
                "Commercial Building Contractors",
                "Interior Painting",
                "Exterior Painting",
                "Wallpaper Installation",
                "Waterproofing Solutions",
                "Texture Painting",
                "Wood Finishing",
              ].map((service, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
  <div className="flex items-start">
    <MapPin size={20} className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
    <a
      href="https://www.google.com/maps?q=Plot+No53,+Industrial+area+Chikalthana+MIDC+Chhatrapati.Sambhajinagar"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
    >
      Plot No53, Industrial area Chikalthana MIDC Chhatrapati.Sambhajinagar.
    </a>
  </div>
  <div className="flex items-center">
    <Phone size={20} className="text-yellow-400 mr-3 flex-shrink-0" />
    <a
      href="tel:1234567890"
      className="text-gray-400 hover:text-white transition-colors"
    >
      (123) 456-7890
    </a>
  </div>
  <div className="flex items-center">
    <Mail size={20} className="text-yellow-400 mr-3 flex-shrink-0" />
    <a
      href="mailto:care@planetpaints.in"
      className="text-gray-400 hover:text-white transition-colors"
    >
      care@planetpaints.in
    </a>
  </div>
</div>

          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Planet Paints. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
