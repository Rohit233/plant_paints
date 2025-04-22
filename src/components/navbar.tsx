"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Package, Hammer, Info, Phone, Calendar, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-4 shadow-sm bg-white relative">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <img src="/assets/logocol.png" alt="Logo" className="h-20 w-auto" />
        </h1>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        <NavLink href="/" icon={<Home size={18} />} label="Home" />
        <NavLink href="/products" icon={<Package size={18} />} label="Products" />
        <NavLink href="/services" icon={<Hammer size={18} />} label="Services" />
        <NavLink href="/about" icon={<Info size={18} />} label="About Us" />
      </nav>

     {/* Book Visit Button */}
<div className="hidden md:flex items-center space-x-4">
  <Link href="/contact" className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-yellow-600 transition duration-300">
    <Calendar size={18} />
    <span>Contact Us</span>
  </Link>
</div>


      {/* Hamburger - Mobile */}
      <div className="md:hidden flex items-center space-x-3">
      <Link href="/contact" className="bg-yellow-500 text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 hover:bg-yellow-600 transition duration-300">
      <Calendar size={16} />
        Contact Us
      </Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t z-50 md:hidden flex flex-col p-4 gap-3">
          <MobileNavLink href="/" label="Home" />
          <MobileNavLink href="/products" label="Products" />
          <MobileNavLink href="/services" label="Services" />
          <MobileNavLink href="/about" label="About Us" />
          
        </div>
      )}
    </header>
  );
}

// Reusable nav link for desktop
function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="group text-gray-700 hover:text-red-500 font-medium flex items-center gap-2 transition duration-300">
      {icon}
      <span>{label}</span>
    </Link>
  );
}

// Reusable nav link for mobile
function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-red-500 font-medium text-base transition duration-300">
      {label}
    </Link>
  );
}
