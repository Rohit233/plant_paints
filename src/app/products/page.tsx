"use client"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Product from "@/components/product";
import { useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <Navbar />
      
      <Product id={id}/>
      <Footer />
    </main>
  );
}
