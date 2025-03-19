import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Product from "@/components/product";

export default function Products() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <Navbar />
      
      <Product />
      <Footer />
    </main>
  );
}
