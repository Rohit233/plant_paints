import Contactus from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      <Navbar />
      
    <Contactus />
      <Footer />
    </main>
  );
}
