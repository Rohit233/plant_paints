"use client";
import Abouts from "@/components/about";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function About() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <Navbar />
      
      <Abouts />
      <Footer />
    </main>
  );
}
