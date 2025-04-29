"use client";
import React, { useState, FormEvent } from "react";
import Image from 'next/image';
import {
  Phone,
  MapPin,
  CheckCircle,
  Navigation,
  ChevronRight,
  User,
  Clock,
  Shield,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [email,] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);
  const [constructionWork,] = useState("");
  const [localPainter,] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile.replace(/\D/g, ""))) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    if (!constructionWork)
      newErrors.constructionWork = "Please select an option";
    if (!localPainter) newErrors.localPainter = "Please select an option";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Format the message for WhatsApp
      const message = `Hello ColorPro Paints! I'm interested in your painting services.\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nPincode: ${pincode}\nConstruction Work: ${constructionWork}\nLocal Painter: ${localPainter}\nWhatsApp Updates: ${
        whatsappUpdates ? "Yes" : "No"
      }`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);

      // Replace with your actual WhatsApp business number
      const whatsappNumber = "919876543210";

      // Open WhatsApp with pre-filled message
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        "_blank"
      );

      // Reset submission state after a delay
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="flex items-center justify-between px-8 py-4 shadow-sm">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">ColorPro <span className="text-red-500">Paints</span></h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-red-500 font-medium flex items-center gap-1">
            <span>Paints & colours</span>
            <ChevronRight size={16} />
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 font-medium flex items-center gap-1">
            <span>Services</span>
            <ChevronRight size={16} />
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 font-medium flex items-center gap-1">
            <span>Waterproofing</span>
            <ChevronRight size={16} />
          </a>
          <a href="#" className="text-gray-700 hover:text-red-500 font-medium flex items-center gap-1">
            <span>Tools</span>
            <ChevronRight size={16} />
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-yellow-600 transition duration-300">
            <Calendar size={18} />
            <span>Book free site visit</span>
          </button>
        </div>
      </header> */}
      <Navbar />
      {/* Hero Section */}
      <section
  className="relative overflow-hidden"
  style={{
    backgroundImage: "url('https://readdy.ai/api/placeholder/1440/600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>

  <div className="container mx-auto h-full flex flex-col lg:flex-row relative z-10">
    {/* Left Side Content */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 text-center lg:text-left">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400 text-gray-800 text-sm font-medium mb-6">
        <Clock size={16} className="mr-2" />
        <span>Limited Time Offer: 15% Off on Premium Services</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Professional Painting Service with
        <div className="text-yellow-400 mt-2">
          Advanced Mechanized Tools
        </div>
      </h1>

      <p className="text-white/90 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
        Transform your living spaces with our expert painting services. We combine skilled craftsmanship with cutting-edge technology for flawless results.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="bg-yellow-400 rounded-full p-2 mr-3">
            <CheckCircle size={24} className="text-gray-800" />
          </div>
          <p className="text-white font-medium">On-time completion guarantee</p>
        </div>

        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="bg-yellow-400 rounded-full p-2 mr-3">
            <Shield size={24} className="text-gray-800" />
          </div>
          <p className="text-white font-medium">5-year warranty</p>
        </div>
      </div>

      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold w-48 flex items-center justify-center gap-2 transition duration-300 shadow-lg mx-auto lg:mx-0">
        <span>GET STARTED</span>
      </button>
    </div>

    {/* Contact Form Card */}
    <div className="lg:block w-full lg:w-1/2 relative mt-8 lg:mt-0">
      <div className="absolute top-12 right-12 bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Get a Free Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Full Name*"
              className={`w-full pl-10 p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone size={18} className="text-gray-400" />
            </div>
            <input
              type="tel"
              placeholder="Mobile Number*"
              className={`w-full pl-10 p-3 border ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPin size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Pincode*"
              className={`w-full pl-10 p-3 border ${
                errors.pincode ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            {errors.pincode && (
              <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="whatsapp"
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              checked={whatsappUpdates}
              onChange={() => setWhatsappUpdates(!whatsappUpdates)}
            />
            <label htmlFor="whatsapp" className="ml-2 text-sm text-gray-600">
              Update me on WhatsApp
            </label>
          </div>

          <p className="text-xs text-gray-500">
            By proceeding, you authorize ColorPro Paints and its contractors to contact you via calls, SMS, or email.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Processing...</span>
            ) : (
              <>
                <Navigation size={18} />
                <span>SUBMIT & CONNECT ON WHATSAPP</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


      {/* Mobile Contact Form */}
      <div className="lg:hidden bg-white px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Get a Free Consultation
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Full Name*"
              className={`w-full pl-10 p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone size={18} className="text-gray-400" />
            </div>
            <input
              type="tel"
              placeholder="Mobile Number*"
              className={`w-full pl-10 p-3 border ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPin size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Pincode*"
              className={`w-full pl-10 p-3 border ${
                errors.pincode ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            {errors.pincode && (
              <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="whatsappMobile"
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              checked={whatsappUpdates}
              onChange={() => setWhatsappUpdates(!whatsappUpdates)}
            />
            <label
              htmlFor="whatsappMobile"
              className="ml-2 text-sm text-gray-600"
            >
              Update me on WhatsApp
            </label>
          </div>

          

          

          <p className="text-xs text-gray-500">
            By proceeding, you authorize ColorPro Paints and its contractors to
            contact you via calls, SMS, or email.
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Processing...</span>
            ) : (
              <>
                <Navigation size={18} />
                <span>SUBMIT & CONNECT ON WHATSAPP</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Why Choose Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose ColorPro Paints Services?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md transition-transform group-hover:scale-105 duration-300">
  <Image
    src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D"
    alt="Expert Site Supervision"
    className="w-full h-full object-cover"
    width={128}  // Provide the width of the image
    height={128} // Provide the height of the image
  />
</div>
              <h3 className="font-medium text-lg text-gray-800">Expert Site</h3>
              <p className="text-gray-600">Supervision</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="https://i.pinimg.com/736x/53/91/e9/5391e90ffeaf66e776ac3199a42e5be0.jpg"
                  alt="Trained Professionals"
                  className="w-full h-full object-cover"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
              </div>
              <h3 className="font-medium text-lg text-gray-800">Trained</h3>
              <p className="text-gray-600">Professionals</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="https://i.pinimg.com/736x/27/93/c8/2793c84bfb6c7334179c4eebca661e40.jpg"
                  alt="Dust Free Mechanised Painting"
                  className="w-full h-full object-cover"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
              </div>
              <h3 className="font-medium text-lg text-gray-800">Dust Free</h3>
              <p className="text-gray-600">Mechanised Painting</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rb7VOQKEctFz9_7TJ3OEreJlrHgVJcLyztJ2Iuc6tybdqEu82cxbT-ZmD3VRNBT3aaU&usqp=CAU"
                  alt="Superior Finish"
                  className="w-full h-full object-cover"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
              </div>
              <h3 className="font-medium text-lg text-gray-800">
                Superior Finish
              </h3>
              <p className="text-gray-600">Quality Guaranteed</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEC0TGTiAWD2puRzJeSB8w2-5AXUll1oetw&s"
                  alt="Full Home Cleaning After Painting"
                  className="w-full h-full object-cover"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
              </div>
              <h3 className="font-medium text-lg text-gray-800">
                Full Home Cleaning
              </h3>
              <p className="text-gray-600">After Painting</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-md transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mcJxHOkZMFt5AbrjLJhrvH3JXBAWCqUmZw&s"
                  alt="ColorPro Paints Warranty"
                  className="w-full h-full object-cover"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
              </div>
              <h3 className="font-medium text-lg text-gray-800">
                ColorPro Paints
              </h3>
              <p className="text-gray-600">5-Year Warranty*</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Home Improvement Services We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="https://www.lascrucesbulletin.com/uploads/original/20190709-170146-Hotel%201.JPG"
                  alt="Government Color Provided"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    Government Color Provided
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  We also work with government-approved paints and the for color
                  schemes for residential and commercial projects.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2">
                  <span>Learn More</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="https://5.imimg.com/data5/SELLER/Default/2021/6/BJ/KG/GU/51997066/commercial-building-painting-service.jpg"
                  alt=" Commercial Building Contractors"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    {" "}
                    Commercial Building Contractors
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Our commercial building services cover large-scale painting
                  and maintenance projects for offices, apartments, and more.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2">
                  <span>Learn More</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="https://5.imimg.com/data5/HF/JC/GLADMIN-39799522/house-interior-painting-service.jpg"
                  alt="Interior Painting"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    Interior Painting
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Transform your home with our premium interior painting
                  services using advanced techniques and top-quality paints.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2">
                  <span>Learn More</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="https://i0.wp.com/www.colourdrive.in/diy/wp-content/uploads/2018/06/dancing-waves-4.jpg?fit=1140%2C728&ssl=1"
                  alt="Exterior Painting"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    Exterior Painting
                  </h3>
                </div>
              </div>
              <div className="p-6">
              <p className="text-gray-600 mb-4">
              Protect and beautify your home exterior with our durable
              painting solutions and the for weather-resistant paints.
              </p>

                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2">
                  <span>Learn More</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="https://www.bpmcdn.com/f/files/salmonarm/import/2017-06/web1_20170619-SAA-Rainbow-Building-JE-0001.jpg"
                  alt="Wallpaper Installation"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    Wallpaper Installation
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Add character and style to your walls with our professional
                  wallpaper installation from a wide range of designs.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2">
                  <span>Learn More</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="https://assets.architecturaldigest.in/photos/66ffa18e11e19065f420e338/16:9/w_1616,h_909,c_limit/Untitled%20design%20-%202024-10-04T132207.133.png"
                  alt="Waterproofing Solutions"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    Waterproofing Solutions
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Prevent water damage with our comprehensive waterproofing
                  services using advanced techniques for long-lasting
                  protection.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2">
                  <span>Learn More</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="https://www.thespruce.com/thmb/OzJ3aLbbhYJJuIXa6hHV9P_FgNI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67_canvas_jc_buck_1200px-d3a9070209b447b28ec2bc116dafb5ff.jpg"
                  alt="Texture Painting"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    Texture Painting
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Add character and style to your walls with our professional
                  wallpaper installation from a wide range of designs.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2">
                  <span>Learn More</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOc1qrRWDQi8y8FOsGkDkAwh3ruWsAu2-CxbkSa_GT_oL0hxSOqimCB7nfsm8EWvlMaM&usqp=CAU"
                  alt="Wood Finishing"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">
                    Wood Finishing
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Add character and style to your walls with our professional
                  wallpaper installation from a wide range of designs.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2">
                  <span>Learn More</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                The team at plant Paints did an amazing job on our living room
                The attention to detail and the quality of work exceeded our
                expectations. Highly recommended.
              </p>

              <div className="flex items-center mt-6">
                <Image
                  src="https://media.istockphoto.com/id/1216248810/photo/young-man-at-white-background-stock-images.webp?a=1&b=1&s=612x612&w=0&k=20&c=OCl-o7ZqeZLJHQpb4QeLZ1jNquFCIHaPUW4pi5qdqcI="
                  alt="Customer"
                  className="w-10 h-10 rounded-full mr-3"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div>
                  <h4 className="font-medium text-gray-800">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-500">Mumbai</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                Professional service from start to finish. The painters were
                punctual, clean and precise. Our home looks brand new and the
                mechanized painting made a huge difference in the finish
                quality.
              </p>

              <div className="flex items-center mt-6">
                <Image
                  src="https://media.istockphoto.com/id/164667814/photo/portrait-of-young-beautiful-indian-smiling-women.jpg?s=612x612&w=0&k=20&c=Fv3_npB6g5yVQ-Ac7_rRwvDedLQ4ZlQPZo5nEudIZk4="
                  alt="Customer"
                  className="w-10 h-10 rounded-full mr-3"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div>
                  <h4 className="font-medium text-gray-800">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Delhi</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                I was impressed by their waterproofing solutions. Not only did
                they fix our leakage issues, but they also gave us a 5-year
                warranty. The team was knowledgeable and efficient.
              </p>

              <div className="flex items-center mt-6">
                <Image
                  src="https://media.istockphoto.com/id/1005817658/photo/middle-aged-man-with-pleasant-face-expression.jpg?s=612x612&w=0&k=20&c=3YTdAT-m9io-zEF2aOmJsRz7tKVHlHSHvDFSILp6FAY="
                  alt="Customer"
                  className="w-10 h-10 rounded-full mr-3"
                  width={128}  // Provide the width of the image
                  height={128} // Provide the height of the image
                />
                <div>
                  <h4 className="font-medium text-gray-800">Vikram Singh</h4>
                  <p className="text-sm text-gray-500">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-blue-900 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Ready to transform your space?
            </h2>
            <p className="text-blue-100 text-lg">
              Get a free consultation and quote from our painting experts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:7350503873" className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-6 py-3 rounded-lg font-bold transition duration-300 flex items-center justify-center gap-2">
  <Phone size={20} />
  <span>CALL US NOW</span>
</a>


            
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;
