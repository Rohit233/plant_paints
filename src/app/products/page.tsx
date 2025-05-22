"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Product from "@/components/product";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Products() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <Navbar />
      
      <Suspense fallback={<div>Loading...</div>}>
        <ProductContent />
      </Suspense>
      
      <Footer />
    </main>
  );
}

function ProductContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  
  return <Product id={id} />;
}