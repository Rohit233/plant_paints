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
                href="https://wa.me/917350503873"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                {/* WhatsApp */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
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
                  <Link 
                    href="/services" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
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
                  href="tel:+917350503873"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +917350503873
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-yellow-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:Support@planetpaints.in"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support@planetpaints.in
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