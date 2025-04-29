import Image from "next/image"
import { Button } from "@/components/ui/button"
import {  Award, TrendingUp, Users } from "lucide-react"

export default function About() {
  return (
    <section id="who-we-are" className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-primary font-medium italic mb-6">
            Create happy customers by delivering best-in-class premium paints at affordable prices
          </p>
          <h2 className="text-5xl font-bold text-blue-700 mb-6">WHO WE ARE?</h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed">
              Planet Paints is a budding new age paint manufacturer that believes in philosophy of 
              delivering premium quality paints at unbelievably affordable price. We are an 
              expansion phase family business. We continue to expand our family member in the 
              form of our customers and distributors across the country.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Experienced Team</h3>
                  <p className="text-muted-foreground">
                    Our team includes people with 20 years & experience in paint industry. Our top notch
                    engineers bring in paints from top international company.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Family Business</h3>
                  <p className="text-muted-foreground">
                    An expansion phase family business growing across the country through our
                    network of customers and distributors.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-md">
              <p className="text-blue-800 italic text-lg">
                We do not hire big stars as brand ambassadors or buy prime TV slots for advertisement.
              </p>
              <p className="text-blue-600 font-medium mt-2">— Planet Paints Philosophy</p>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg transition-all">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/116.jpg"
                alt="Planet Paints Factory"
                fill
                // className="object-cover"
              />
              <div className="absolute inset-0 bg-gray-300 bg-opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="text-primary w-8 h-8" />
                    <h3 className="text-2xl font-bold text-blue-800">Our Philosophy</h3>
                  </div>
                  <p className="text-blue-700">
                    Premium quality at affordable prices. We prioritize product excellence and customer 
                    satisfaction over expensive marketing campaigns.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-primary text-white text-xl font-bold p-4 rounded-xl shadow-lg rotate-3">
              ISO Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}