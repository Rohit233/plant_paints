"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Contactus() {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const whatsappMessage = `Hello, my name is ${fullName}. My mobile number is ${mobileNumber}. Message: ${message}`;
    const whatsappURL = `https://wa.me/7350503873?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Get in Touch</CardTitle>
              <CardDescription>
                Have a question or need assistance? Fill out the form below and we&apos;ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" placeholder="Enter your mobile number" type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <Button className="w-full" size="lg" onClick={handleSendMessage}>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
