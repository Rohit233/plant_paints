"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, JSX } from "react";

interface Product {
  id: number;
  title: string;
  brand: string;
  subtitle?: string;
  description?: string;
  image?: string;
  bgColor?: string;
  textColor?: string;
  applications?: string[];
  detailedSpecifications?: {
    sizesAvailable?: string[];
    technicalSpecifications?: {
      Size?: string;
      Thickness?: string;
      SizeTolerance?: string;
      CompressiveStrength?: string;
      OvenDryDensity?: string;
      FireResistance?: string;
      ThermalConductivity?: string;
      SoundReduction?: string;
      ModulusOfElasticity?: string;
      ThermalResistance?: string;
      DryShrinkage?: string;
      SoundTransmissionClassRating?: string;
    };
    features?: string[];
    applications?: string[];
  };
  detailedInstructions?: {
    cleaning?: string;
    primer?: string;
    topcoat?: string;
    putty?: string;
    packaging?: string;
    features?: string[];
    mainDescription?:string;
    finish?:string;
    application?:string;
    coverage?:string;
    directions?:string;
    warning?:string;
    precautions?:string[];
    warranty?:string;
    
  };
}

// Enhanced product data with detailed descriptions from the images
const sections = [
  {
    id: 20,
    brand: "PlanetPaints",
    title: "PVC Blocks",
    subtitle: "Versatile and Durable Building Solution",
    description: "High-quality PVC blocks designed for various construction needs. These blocks are lightweight, fire-resistant, and offer excellent thermal and sound insulation. Ideal for creating durable and efficient walls with minimal maintenance.",
    image: "/assets/110.webp",
    bgColor: "bg-blue-200",
    textColor: "text-black",
    applications: [],
    detailedInstructions: {
      cleaning: "Sand the surface with emery Paper 180 to remove loose particles. Wipe clean to ensure proper adhesion.",
      primer: "Apply surface preparation primer for optimal adhesion. Allow drying for 6-8 hours before proceeding.",
      topcoat: "Not applicable for PVC blocks installation.",
      putty: "Use appropriate adhesive or mortar for joining blocks. Ensure proper alignment and leveling during installation.",
      packaging: "Available in standard packs with sizes: 625 x 240 mm and 600 x 200 mm with varying thickness options",
      features: [
        "Lightweight and easy to install",
        "Excellent thermal insulation",
        "Superior sound reduction",
        "Fire-resistant",
        "Low maintenance",
        "Durable and long-lasting"
      ]
    }
  },
  {
    id: 1,
    brand:"PlanetPaints",
    applications:[],
    title: "MARVAL Luxury Emulsion",
    subtitle: "Extra Sheen Finish for Lasting Elegance",
    description: "A premium paint with an extra sheen finish for an elegant look. It offers long-lasting protection with stain resistance and anti-dust technology. The washable formula ensures easy maintenance and vibrant walls. Elevate your space with luxury and durability.",
    image: "/assets/1.png",
    bgColor: "bg-fuchsia-300",
    textColor: "text-black",
    detailedInstructions: {
      cleaning: "Sand the surface with emery Paper 180 to remove loose Particles, paint, dust/grease, Cracked or flaked paints. Wipe clean",
      primer: "Apply a coat of wall Primer. Allow drying for 6-8 hours. Another coat of wall Primer. Sand with Emery Paper 320 or 400. Wipe Clean.",
      topcoat: "Thin 1 liter of Paints with 400-500 ml of water and with Brush followed by rolling with a sponge or a felt roller. Apply 2-3 coats of with an interval of 3-4 hours between successive coats. For Deep shades apply an addition coat of Emulsion.",
      putty: "Smoothen the surface by filling dents with thin coats of Acrylic Wall Putty. Allow drying for 4-5 hours. Send with Emery Paper 180 and Wipe clean",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["Luxury Finish", "Weather Protection", "Stain Resistant", "Superior Stain Resistance", "Dirt Guard Technology"]
    }
  },
  {
    id: 2,
    title: "SPARX Acrylic Emulsion",
    brand:"PlanetPaints",
    subtitle: "Premium Interior & Exterior Paint for a Smooth Finish",
    description: "A premium paint for interior and exterior surfaces, offering a smooth finish with excellent coverage. Its washable formula ensures easy maintenance, while anti-fungal properties protect surfaces. Resistant to stains and weather conditions, it ensures long-lasting beauty. Choose SPARX for elegance and durability.",
    image: "/assets/2.png",
    bgColor: "bg-violet-300",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "The Science of High Volume solid matt emulsion in this paint delivers higher coverage and uniform finish. It is an eco-friendly product which contains no added Lead, Mercury.",
      finish: "Smooth & Matt",
      application: "All kind of interior plaster, concrete and masonry surfaces",
      cleaning: "Sand the surface with emery Paper 180 to remove loose Particles, paint, dust/grease, Cracked or flaked paints. Wipe clean",
      putty: "Smoothen the surface by filling dents with thin coats of Acrylic Wall Putty. Allow drying for 4-5 hours. Send with Emery Paper 180 and Wipe clean",
      primer: "Apply a coat of wall Primer. Allow drying for 6-8 hours. Another coat of wall Primer. Sand with Emery Paper 320 or 400. Wipe Clean.",
      topcoat: "Thin 1 liter of Paints with 400-500 ml of water and with Brush followed by rolling with a sponge or a felt roller. Apply 2-3 coats of with an interval of 3-4 hours between successive coats. For Deep shades apply an addition coat of Emulsion.",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["Smooth Finish", "Excellent Coverage", "Easily Washable", "Anti-Fungus"]
    }
  },
  {
    id: 3,
    brand:"PlanetPaints",
    title: "TRENCH COAT Luxury Emulsion",
    subtitle: "Extra Sheen Finish",
    description: "A premium extra sheen paint for a rich, elegant finish. It offers long-lasting protection with stain resistance and superior flexibility. The washable formula ensures easy maintenance and a fresh look. Elastomeric properties provide crack resistance for durable walls. Experience luxury and lasting beauty with TRENCH COAT.",
    image: "/assets/3.png",
    bgColor: "bg-blue-300 ",
    textColor: "text-black",
    detailedInstructions: {
      cleaning: "Sand the surface with emery Paper 180 to remove loose Particles, paint, dust/grease, Cracked or flaked paints. Wipe clean",
      primer: "Apply a coat of wall Primer. Allow drying for 6-8 hours. Another coat of wall Primer. Sand with Emery Paper 320 or 400. Wipe Clean.",
      topcoat: "Thin 1 liter of Paints with 400-500 ml of water and with Brush followed by rolling with a sponge or a felt roller. Apply 2-3 coats of with an interval of 3-4 hours between successive coats. For Deep shades apply an addition coat of Emulsion.",
      putty: "Smoothen the surface by filling dents with thin coats of Acrylic Wall Putty. Allow drying for 4-5 hours. Send with Emery Paper 180 and Wipe clean",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      warranty: "5 Years",
      features: ["Luxury Finish", "Superior Protection", "Stain Resistance", "Weather Resistant"]
    }
  },
  {
    id: 4,
    brand:"PlanetPaints",
    title: "VITARA Premium Emulsion",
    subtitle: "Interior & Exterior",
    description: "A high-quality paint for interior and exterior walls with a smooth, elegant finish. It offers long-lasting protection against weather and daily wear. The washable formula ensures easy maintenance and freshness. Antibacterial properties promote a healthier environment. Enjoy superior coverage with fewer coats for a flawless look.",
    image: "/assets/4.png",
    bgColor: "bg-yellow-200",
    textColor: "text-black",
    detailedInstructions: {
      cleaning: "Sand the surface with emery Paper 180 to remove loose Particles, paint, dust/grease, Cracked or flaked paints. Wipe clean",
      primer: "Apply a coat of wall Primer. Allow drying for 6-8 hours. Another coat of wall Primer. Sand with Emery Paper 320 or 400. Wipe Clean.",
      topcoat: "Thin 1 liter of Paints with 400-500 ml of water and with Brush followed by rolling with a sponge or a felt roller. Apply 2-3 coats of with an interval of 3-4 hours between successive coats. For Deep shades apply an addition coat of Emulsion.",
      putty: "Smoothen the surface by filling dents with thin coats of Acrylic Wall Putty. Allow drying for 4-5 hours. Send with Emery Paper 180 and Wipe clean",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["Best Coverage", "Lasting Protection", "Easy Washable", "Alkaline Resistance"]
    }
  },
  {
    id: 5,
    brand:"PlanetPaints",
    title: "EXPERT Acrylic Water-Based Primer",
    subtitle: "Lasting Gloss and Durability",
    description: "A high-performance primer ensuring strong adhesion for topcoats. Its alkali resistance protects surfaces from moisture damage. Designed for smooth, uniform coverage and reduced paint absorption. Suitable for interior and exterior use, it enhances durability. Achieve a flawless, long-lasting finish with EXPERT Primer.",
    image: "/assets/5.png",
    bgColor: "bg-cyan-200",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "Expert wall Primer is a water based wall coating suitable for applications on interior as an under coat to interior Emulsion",
      directions: "Surface preparation for interior use: Ensure thorough cleaning of the surface with wire brushing followed by High-pressure water jet cleaning. All structural cracks must be filled with suitable cement based plaster. In case of fungus affected area apply a coat of planet paints fungicidal wall wash solution and leave for 6-8 hours apply suitable Primer recommended for interior and exterior applications allow priming coat to hard dry for min 6-8 hrs followed by planet paints finishing coat",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["Easy Application", "Excellent Coverage", "Alkali Resistance", "Seals Dry Porous Surface"]
    }
  },
  {
    id: 6,
    brand:"PlanetPaints",
    title: "ELITE Acrylic Washable Distempers",
    subtitle: "Interior | 100% Acrylic",
    description: "A premium 100% acrylic interior paint with excellent washability. It offers a smooth, rich finish for elegant walls. Superior coverage ensures minimal paint consumption and vibrant results. Durable and resistant to peeling for long-lasting beauty. Ideal for modern residential and commercial spaces.",
    image: "/assets/7.png",
    bgColor: "bg-pink-200",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "A water based interior wall distemper with better bond and high coverage offering rich matt finish's washable features give brighter and cleaner shades resulting in beautiful smooth walls.",
      finish: "Smooth & Matt",
      coverage: "80-100 sqft /coat",
      application: "All kind of interior plaster, concrete and masonry surfaces",
      cleaning: "Sand the surface with emery Paper 180 to remove loose Particles, paint, dust/grease, Cracked or flaked paints. Wipe clean",
      putty: "Smoothen the surface by filling dents with thin coats of Acrylic Wall Putty. Allow drying for 4-5 hours. Send with Emery Paper 180 and Wipe clean",
      primer: "Apply a coat of wall Primer. Allow drying for 6-8 hours. Another coat of wall Primer. Sand with Emery Paper 320 or 400. Wipe Clean.",
      topcoat: "Thin 1 liter of Paints with 400-500 ml of water and with Brush followed by rolling with a sponge or a felt roller. Apply 2-3 coats of with an interval of 3-4 hours between successive coats",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["Smooth Finish", "Excellent Coverage", "Easily Washable", "Anti-Fungus"]
    }
  },
  {
    id: 7,
    brand:"PlanetPaints",
    title: "GREEK",
    subtitle: "ACRYLIC WATER BASED EXTERIOR PRIMER",
    description: "GREEK Acrylic Water Based Exterior Primer offers a smooth and elegant finish designed for superior surface preparation. It provides excellent coverage, reducing the number of coats needed for a flawless look. The easily washable formula ensures your walls remain fresh and vibrant for years.",
    image: "/assets/2c.png",
    bgColor: "bg-amber-100",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "GREEK Acrylic water based primer wall coating suitable for applications on exterior surfaces as an undercoat to exterior emulsion paints.",
      directions: "Surface preparation for exterior use: Clean the surface thoroughly with wire brushing and remove all dust, grease, and loose particles. Fill all cracks with suitable cement-based filler. Apply a coat of GREEK primer and allow to dry for 6-8 hours before applying top coats.",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["Strong Adhesion", "Weather Resistant", "Reduces Paint Consumption", "Seals Porous Surfaces"]
    }
  },
  {
    id: 8,
    brand:"PlanetPaints",
    title: "TREO",
    subtitle: "Premium Acrylic Water-Based Formula",
    description: "Transform your interior walls with TREO's professional-grade primer from Orchid Paints. This water-based acrylic formula ensures smooth application and excellent coverage for all indoor surfaces. TREO primer creates the perfect base for your paint, reducing overall paint consumption and enhancing the final finish.",
    image: "/assets/3c.png",
    bgColor: "bg-green-200",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "TREO interior wall primer is specially formulated to provide superior adhesion and uniform surface for interior paints.",
      directions: "Surface should be clean, dry and free from dust, grease and loose particles. Apply TREO primer with brush or roller in uniform strokes. Allow to dry for 4-6 hours before applying top coats. For best results, apply two coats of primer.",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["Easy Application", "Excellent Coverage", "Reduces Paint Consumption", "Creates Uniform Surface"]
    }
  },
  {
    id: 9,
    brand:"PlanetPaints",
    title: "ASTIR",
    subtitle: "Acrylic Exterior Emulsion",
    description: "ASTIR exterior emulsion by Orchid Paints delivers superior protection against harsh weather conditions. This premium acrylic formula ensures excellent durability and color retention for your outdoor surfaces. Its advanced technology provides resistance against UV damage, mold, and moisture infiltration. Enjoy smooth application and exceptional coverage with this high-performance exterior paint.",
    image: "/assets/4c.png",
    bgColor: "bg-slate-400",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "ASTIR exterior acrylic emulsion provides long-lasting protection and beautiful finish for exterior walls.",
      finish: "Smooth & Semi-Gloss",
      coverage: "90-110 sq.ft./liter per coat",
      application: "All exterior plastered, concrete and masonry surfaces",
      cleaning: "Clean surface thoroughly removing all dust, dirt and loose particles. Wash with water if necessary and allow to dry completely.",
      primer: "Apply suitable exterior primer and allow to dry for 6-8 hours",
      topcoat: "Apply 2-3 coats of ASTIR emulsion with brush or roller, allowing 4-6 hours drying time between coats",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["UV Resistant", "Weatherproof", "Anti-Fungal", "Excellent Color Retention", "Washable"]
    }
  },
  {
    id: 10,
    brand:"PlanetPaints",
    title: "INSTA",
    subtitle: "Interior | 100% Acrylic",
    description: "A premium 100% acrylic interior paint with excellent washability. It offers a smooth, rich finish for elegant walls. Superior coverage ensures minimal paint consumption and vibrant results. Durable and resistant to peeling for long-lasting beauty. Ideal for modern residential and commercial spaces.",
    image: "/assets/5c.png",
    bgColor: "bg-blue-300",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "INSTA 100% acrylic interior emulsion provides luxurious finish with excellent durability and washability.",
      finish: "Smooth & Matt",
      coverage: "100-120 sq.ft./liter per coat",
      application: "All interior plastered walls and ceilings",
      cleaning: "Clean surface thoroughly removing all dust, dirt and loose particles. Repair any cracks or imperfections.",
      putty: "Apply acrylic wall putty if needed, sand smooth when dry",
      primer: "Apply suitable interior primer and allow to dry for 4-6 hours",
      topcoat: "Apply 2 coats of INSTA emulsion with brush or roller, allowing 4 hours drying time between coats",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["100% Acrylic", "Washable", "Stain Resistant", "Low Odor", "Excellent Coverage"]
    }
  },
  {
    id: 11,
    brand:"PlanetPaints",
    title: "SMART",
    subtitle: "Acrylic Interior Emulsion",
    description: "Elevate your interior spaces with SMART acrylic emulsion by Orchid Paints. This premium interior paint delivers rich, vibrant colors with exceptional coverage and a smooth, elegant finish. The advanced formula resists stains and is easy to clean, making it ideal for busy households and commercial spaces. Experience reduced odor during application and faster drying time for minimal disruption to your daily routine.",
    image: "/assets/6c.png",
    bgColor: "bg-purple-300",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "SMART acrylic interior emulsion combines beauty with practical performance for modern living spaces.",
      finish: "Silky Smooth & Matt",
      coverage: "110-130 sq.ft./liter per coat",
      application: "Interior walls and ceilings in residential and commercial spaces",
      cleaning: "Surface must be clean, dry and free from dust, grease and loose particles",
      putty: "Apply acrylic wall putty if needed, sand smooth when dry",
      primer: "Apply suitable interior primer and allow to dry for 4-6 hours",
      topcoat: "Apply 2 coats of SMART emulsion with brush or roller, allowing 3-4 hours drying time between coats",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["Stain Resistant", "Easy to Clean", "Low VOC", "Fast Drying", "Excellent Coverage"]
    }
  },
  {
    id: 12,
    brand:"PlanetPaints",
    title: "SPLASH",
    subtitle: "Acrylic Water Based Primer Exterior",
    description: "SPLASH exterior primer from Planet Paints creates the perfect foundation for your outdoor painting projects. This specialized water-based formula ensures superior adhesion on various exterior surfaces, promoting longer-lasting paint finishes. Its moisture-resistant properties help protect against weather damage while preventing common issues like peeling and cracking.",
    image: "/assets/10c.png",
    bgColor: "bg-pink-300",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "Splash Acrylic water based primer wall coating suitable for applications on interior and exterior as an undercoat to interior and exterior Emulsion",
      directions: "Surface preparation for interior and exterior use: Ensure thorough cleaning of the surface with wire brushing followed by High-pressure water jet cleaning. All structural cracks must be filled with suitable cement based plaster. In case of fungus affected area apply a coat of planet paints fungicidal wall wash solution and leave for 6-8 hours apply suitable Primer recommended for interior and exterior applications allow priming coat to hard dry for min 6-8 hrs followed by planet paints finishing coat",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["Easy Application", "Excellent Coverage", "Alkali Resistance", "Seals Dry Porous Surface"]
    }
  },
  {
    id: 13,
    brand:"PlanetPaints",
    title: "STROKE",
    subtitle: "Exterior Emulsion",
    description: "STROKE exterior emulsion by Planet Paints delivers exceptional protection for all outdoor surfaces. This professional-grade formula creates a durable shield against harsh weather conditions, UV radiation, and pollution. Its advanced technology ensures excellent color retention and resistance to fading over time. Experience easy application with superior coverage that saves time and reduces material consumption.",
    image: "/assets/8c.png",
    bgColor: "bg-orange-300",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "Stroke exterior Acrylic emulsion is economical water dilutable coating designed for application on exterior walls. It provides excellent performance in dry or moderate humid climate condition.The shades do not fade over an extended time & surface repainting is minimized ensuring that the exterior walls retain original beauty for years.",
      finish: "Smooth & Matt",
      coverage: "100-120 sq.ft./coat",
      application: "All kind of Exterior plaster, concrete and masonry surfaces",
      cleaning: "Sand the surface with emery Paper 180 to remove loose Particles, paint, dust/grease, Cracked or flaked paints. Wipe clean",
      putty: "Smoothen the surface by filling dents with thin coats of Acrylic Wall Putty. Allow drying for 4-5 hours. Send with Emery Paper 180 and Wipe clean",
      primer: "Apply a coat of wall Primer. Allow drying for 6-8 hours. Another coat of wall Primer. Sand with Emery Paper 320 or 400. Wipe Clean.",
      topcoat: "Thin 1 liter of Paints with 400-500 ml of water and with Brush followed by rolling with a sponge or a felt roller. Apply 2-3 coats of with an interval of 3-4 hours between successive coats. For Deep shades apply an addition coat of Emulsion.",
      packaging: "1ltr, 4 ltr, 10 ltr, 20 ltr",
      features: ["Algae Resistant", "Weather Resistant", "Anti Fading", "Protection from Dirt & Dust", "Tough & Durable Film"]
    }
  },
  {
    id: 14,
    brand:"PlanetPaints",
    title: "Block Joining Mortar",
    subtitle: "Premium Construction Material",
    description: "A premium construction material for joining blocks with superior bonding strength. Specially formulated for masonry work, it provides excellent workability and durability. The high-performance mortar ensures strong adhesion between blocks, reducing cracks and improving structural integrity. Ideal for both interior and exterior construction projects.",
    image: "/assets/11c.png",
    bgColor: "bg-gray-400",
    textColor: "text-black",
    isConstructionMaterial: true,
    detailedInstructions: {
      mainDescription: "High-quality mortar specially formulated for joining concrete blocks and bricks in construction projects.",
      mixing: "Mix with clean water in recommended proportions (typically 3-4 parts powder to 1 part water by volume). Mix thoroughly to achieve uniform consistency without lumps.",
      application: "Apply evenly on block surfaces using trowel. Join blocks immediately, ensuring proper alignment. Remove excess mortar before it sets.",
      curing: "Keep the joined blocks moist for at least 24 hours for optimal strength development.",
      coverage: "Approximately 1 kg per 10-12 standard blocks depending on joint thickness",
      packaging: "25 kg bags",
      features: ["High Bond Strength", "Excellent Workability", "Reduced Shrinkage", "Water Retentive", "Crack Resistant"]
    }
  },
  {
    id: 15,
    brand:"PlanetPaints",
    title: "Wall Plaster",
    subtitle: "Professional Grade Wall Finish",
    description: "A professional-grade plaster for creating smooth, durable wall surfaces. This ready-mix plaster provides excellent workability and adhesion to various substrates. It offers superior crack resistance and produces a uniform finish that's ideal for both interior and exterior applications. The formulation ensures minimal shrinkage and quick drying time for efficient project completion.",
    image: "/assets/19c.png",
    bgColor: "bg-emerald-200",
    textColor: "text-black",
    isConstructionMaterial: true,
    detailedInstructions: {
      mainDescription: "Premium quality wall plaster for creating smooth, durable surfaces on interior and exterior walls.",
      surfacePreparation: "Ensure the surface is clean, free from dust, grease and loose particles. Dampen the surface before application for better adhesion.",
      mixing: "Mix with clean water in recommended proportions (typically 25-30% water by weight). Mix thoroughly to achieve lump-free consistency.",
      application: "Apply in uniform thickness (typically 6-12mm) using steel trowel. For thicker applications, apply in multiple layers with proper curing between layers.",
      curing: "Keep the plaster moist for at least 3 days by sprinkling water periodically.",
      coverage: "Approximately 10-12 sq.ft. per kg at 10mm thickness",
      packaging: "25 kg bags",
      features: ["Excellent Workability", "Low Shrinkage", "Crack Resistant", "Good Adhesion", "Smooth Finish"]
    }
  },
  {
    id: 16,
    brand:"PlanetPaints",
    title: "Tile Adhesive",
    subtitle: "Strong Bonding Solution",
    description: "A high-performance tile adhesive that provides superior bonding strength for ceramic, porcelain, and natural stone tiles. This polymer-modified adhesive offers excellent workability and extended open time for precise tile placement. It's suitable for both floor and wall tile installations, providing durable results with reduced risk of tile slippage or debonding.",
    image: "/assets/20c.png",
    bgColor: "bg-indigo-300",
    textColor: "text-black",
    isConstructionMaterial: true,
    detailedInstructions: {
      mainDescription: "Premium polymer-modified tile adhesive for strong, durable tile installations.",
      surfacePreparation: "Ensure the substrate is clean, dry, and free from dust, grease, and loose particles. Uneven surfaces should be leveled first.",
      mixing: "Mix with clean water in recommended proportions (typically 5-6 liters per 20kg bag). Mix thoroughly to achieve smooth, lump-free consistency. Let stand for 5-10 minutes, then remix before use.",
      application: "Apply adhesive using notched trowel (6mm x 6mm notch for most tiles). Press tiles firmly into place with twisting motion. Maintain consistent joint spacing.",
      curing: "Allow 24 hours before grouting. Avoid heavy loads for 48 hours.",
      coverage: "Approximately 3-4 sq.m. per 20kg bag for 6mm trowel",
      packaging: "20 kg bags",
      features: ["High Bond Strength", "Extended Open Time", "Non-Slip Formula", "Suitable for Most Tiles", "Water Resistant"]
    }
  },
  {
    id: 17,
    brand:"PlanetPaints",
    title: "Planet Paints WALL PUTTY",
    subtitle: "100% Waterproof Super White | Water Resistant | No Curing Required",
    description: "A high-performance, 100% waterproof putty for smooth, durable surfaces. Its polymer-based formula ensures superior adhesion, preventing cracks and shrinkage. Anti-fungal and water-resistant properties protect against moisture damage. Provides a super white, glossy finish for enhanced paint longevity. No curing required, ensuring hassle-free application.",
    image: "/assets/6.png",
    bgColor: "bg-stone-400",
    textColor: "text-black",
    detailedInstructions: {
      warning: "Although this 'Planet wall putty' containing White cement & German chemicals is quite safe, yet avoid its inhalation & entry in to eyes, even than it's better to rinse your eyes with plenty fresh water.",
      precautions: [
        "Avoid moisture and keep it a dry place.",
        "Use only plastic tub or bucket don't prepare it in a metal utensils.",
        "Keep it beyond children's access.",
        "Before applying 'Planet wall putty' make the wall clean with the help of emery paper or putty blade."
      ],
      application: [
        "Before applying the wall - apply sufficient water on it.",
        "Make a paste by slowly mixing 'Planet wall putty' with 35 to 45 % clean water in a plastic tub.",
        "With this prepared putty paste the help of putty blade on the moistened wall.",
        "Slowly rub the wall clean with a soft piece of cloth, after the first coat of putty gets dried up, allow the wall to get dry for at least 3 to 4 hours, then apply a second coat of putty on the wall.",
        "The total thickness of the second coat of the putty must not be more than 1.5 mm. when the final coat of putty starts getting dry, rub a wet sponge on it softly to remove the marks caused by the putty blade, let the surface get dry for sometime. Now you can apply any kind of paint or Luxury Emulsion your choice on the wall already prepared with the 'Planet wall putty'"
      ],
      packaging: "5 kg, 10 kg, 20 kg",
      features: ["100% Waterproof", "Super White Finish", "No Curing Required", "Anti-Fungal", "Crack Resistant"]
    }
  },
  {
    id: 18,
    brand:"PlanetPaints",
    title: "ACRYLIC WALL TEXTURE",
    subtitle: "Premium Water-Resistant Wall Finish for Interior & Exterior",
    description: "A premium water-resistant textured coating for interior and exterior walls. Its acrylic-based formula ensures excellent adhesion, flexibility, and durability. Protects against moisture, cracks, and environmental damage. Anti-fungal and anti-algae properties keep walls fresh and clean. Enhance your space with a rich, decorative finish.",
    image: "/assets/13.png",
    bgColor: "bg-amber-200",
    textColor: "text-black",
    detailedInstructions: {
      finish: "FINISH IS MADE WITH HIGH QUALITY MARBLE POWDER",
      description: "Silicon sand and quartz in a rich acrylic-binding medium. This paint gives a very unique and different feel making the walls stand out. This material has excellent binding to the surface and has the ability to hide small cracks.",
      surfacePreparation: "Surface must be clean, dry and free from dust, grease and loose particles. Repair any cracks or imperfections.",
      application: [
        "Apply with trowel or texture roller depending on desired effect",
        "Work in small sections for consistent texture",
        "Can be tinted with universal colorants for custom colors",
        "For exterior use, apply during moderate weather conditions"
      ],
      dryingTime: "Touch dry in 2-4 hours, recoat after 6-8 hours",
      coverage: "Approximately 40-60 sq.ft. per gallon depending on texture",
      packaging: "1 gallon, 5 gallon",
      features: ["Water Resistant", "Hides Imperfections", "Decorative Finish", "Durable", "UV Resistant (exterior)"]
    }
  },
  {
    id: 19,
    brand:"PlanetPaints",
    title: "Orchid Paints WALL PUTTY",
    subtitle: "Superior Finish for Stronger Walls",
    description: "A high-performance putty for a smooth, durable base. Enhances paint adhesion and longevity by filling cracks and leveling surfaces. Prevents moisture absorption for stronger walls. Ideal for interior and exterior applications. Ensures a flawless finish for residential and commercial spaces.",
    image: "/assets/15.png",
    bgColor: "bg-gray-300",
    textColor: "text-black",
    detailedInstructions: {
      mainDescription: "Orchid Paints wall putty creates perfect smooth surface for paint application, enhancing paint durability and finish.",
      surfacePreparation: "Clean the surface thoroughly removing all dust, dirt and loose particles. Dampen the surface before application.",
      mixing: "Mix with clean water (approximately 30-35% by weight) to achieve smooth, lump-free consistency. Let stand for 5 minutes, then remix before application.",
      application: [
        "Apply thin, even coats (1-1.5mm) using stainless steel trowel",
        "Allow first coat to dry for 4-6 hours before applying second coat if needed",
        "Sand lightly with fine sandpaper (180-220 grit) after final coat is completely dry"
      ],
      dryingTime: "Dries in 4-6 hours depending on weather conditions",
      coverage: "Approximately 12-15 sq.ft. per kg for two coats",
      packaging: "5 kg, 10 kg, 20 kg",
      features: ["Smooth Finish", "Excellent Adhesion", "Reduces Paint Consumption", "Water Resistant", "Crack Resistant"]
    }
  }
];
export default function HeroParallax({ id }: { id: string | null }) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleKnowMoreClick = (id: number) => {
    router.push(`/products?id=${id}`);
  };

  const parsedId = id ? parseInt(id) : null;
  const filteredSections = parsedId
    ? sections.filter((section) => section.id === parsedId)
    : sections;

  // Motion variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // Function to render product features with icons
  const renderFeatures = (features: string[]) => {
    const featureIcons: Record<string, JSX.Element> = {
      "Easy Application": (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      ),
      "Excellent Coverage": (
        <svg
          className="w-6 h-6 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
      "Alkali Resistance": (
        <svg
          className="w-6 h-6 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      ),
      "Seal Dry Porous Surface": (
        <svg
          className="w-6 h-6 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          ></path>
        </svg>
      ),
    };

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-3 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-2">
              {featureIcons[feature] || (
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </div>
            <span className="text-center text-sm font-medium">{feature}</span>
          </motion.div>
        ))}
      </div>
    );
  };

  // Function to render detailed instructions based on product
  const renderDetailedInstructions = (section:Product) => {
    if (!section.detailedInstructions) return null;

    const defaultFeatures = [
      "Easy Application",
      "Excellent Coverage",
      "Alkali Resistance",
      "Seal Dry Porous Surface",
    ];
    const features = section.detailedInstructions.features || defaultFeatures;

    return (
      <div className="space-y-8">
        {/* Main Description */}
        <motion.div
          className="bg-white/90 p-6 rounded-xl shadow-md backdrop-blur-sm"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
            Product Overview
          </h3>

          {section.detailedInstructions.mainDescription && (
            <p className="mb-4 text-base leading-relaxed">
              {section.detailedInstructions.mainDescription}
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {section.detailedInstructions.finish && (
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  {/* <svg
                    className="w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 2l9 4-9 4-9-4 9-4z"></path>
                    <path d="M12 14l9-4-9-4-9 4 9 4z"></path>
                    <path d="M12 10v10"></path>
                    <path d="M12 10l9 4v-6"></path>
                    <path d="M12 10l-9 4v-6"></path>
                  </svg> */}
                </div>
                <div>
                  <span className="font-medium text-gray-800 block">
                    Finish
                  </span>
                  <span className="text-sm text-gray-600">
                    {section.detailedInstructions.finish}
                  </span>
                </div>
              </div>
            )}

            {section.detailedInstructions.application &&
              !Array.isArray(section.detailedInstructions.application) && (
                <div className="flex items-start gap-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    {/* <svg
                      className="w-5 h-5 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg> */}
                  </div>
                  <div>
                    <span className="font-medium text-gray-800 block">
                      Area of Application
                    </span>
                    <span className="text-sm text-gray-600">
                      {section.detailedInstructions.application}
                    </span>
                  </div>
                </div>
              )}

            {section.detailedInstructions.coverage && (
              <div className="flex items-start gap-2">
                <div className="bg-purple-100 p-2 rounded-full">
                  {/* <svg
                    className="w-5 h-5 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path>
                    <polyline points="8 10 12 14 16 10"></polyline>
                  </svg> */}
                </div>
                <div>
                  <span className="font-medium text-gray-800 block">
                    Coverage
                  </span>
                  <span className="text-sm text-gray-600">
                    {section.detailedInstructions.coverage}
                  </span>
                </div>
              </div>
            )}

            {section.detailedInstructions.packaging && (
              <div className="flex items-start gap-2">
                <div className="bg-amber-100 p-2 rounded-full">
                  {/* <svg
                    className="w-5 h-5 text-amber-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg> */}
                </div>
                <div>
                  <span className="font-medium text-gray-800 block">
                    Packaging
                  </span>
                  <span className="text-sm text-gray-600">
                    {section.detailedInstructions.packaging}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Features */}
          {renderFeatures(features)}
        </motion.div>

        {/* Directions for Use */}
        {section.detailedInstructions.directions && (
          <motion.div
            className="bg-white/90 p-6 rounded-xl shadow-md backdrop-blur-sm"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-100 p-2 rounded-full">
                {/* <svg
                  className="w-5 h-5 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                 
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Direction For Use
              </h3>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
              <p className="text-base text-gray-700 leading-relaxed">
                {section.detailedInstructions.directions}
              </p>
            </div>

            {/* Process Steps */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

                <div className="relative flex items-start mb-6">
                  <div className="flex items-center justify-center bg-blue-500 rounded-full h-8 w-8 flex-shrink-0 z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="ml-4 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-600 mb-1">
                      Surface Preparation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ensure thorough cleaning of the surface with wire brushing
                      followed by High-pressure water jet cleaning.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-6">
                  <div className="flex items-center justify-center bg-blue-500 rounded-full h-8 w-8 flex-shrink-0 z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="ml-4 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-600 mb-1">
                      Fill Cracks
                    </h4>
                    <p className="text-sm text-gray-600">
                      All structural cracks must be filled with suitable
                      cement-based plaster.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start mb-6">
                  <div className="flex items-center justify-center bg-blue-500 rounded-full h-8 w-8 flex-shrink-0 z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="ml-4 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-600 mb-1">
                      Anti-Fungal Treatment
                    </h4>
                    <p className="text-sm text-gray-600">
                      For fungus affected areas, apply a coat of fungicidal wall
                      wash solution and leave for 6-8 hours.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="flex items-center justify-center bg-blue-500 rounded-full h-8 w-8 flex-shrink-0 z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="ml-4 bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-blue-600 mb-1">
                      Application
                    </h4>
                    <p className="text-sm text-gray-600">
                      Apply the primer coat and allow to hard dry for min 6-8
                      hrs before the finishing coat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Warning Section */}
        {section.detailedInstructions.warning && (
          <motion.div
            className="bg-yellow-50 p-6 rounded-xl shadow-md backdrop-blur-sm border-l-4 border-yellow-400"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              {/* <svg
                className="w-6 h-6 text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg> */}
              <h3 className="text-lg font-semibold text-yellow-800">Warning</h3>
            </div>
            <p className="text-sm text-yellow-800">
              {section.detailedInstructions.warning}
            </p>
          </motion.div>
        )}

        {/* Precautions */}
        {section.detailedInstructions.precautions &&
          section.detailedInstructions.precautions.length > 0 && (
            <motion.div
              className="bg-white/90 p-6 rounded-xl shadow-md backdrop-blur-sm"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                {/* <svg
                  className="w-6 h-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                 
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg> */}
                <h3 className="text-lg font-semibold text-gray-800">
                  Precautions
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                {section.detailedInstructions.precautions.map(
                  (item: string, idx: number) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2"
                      variants={slideIn}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.5 + idx * 0.1 }}
                    >
                      {/* <svg
                        className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg> */}
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>
          )}

        {section.detailedInstructions.warranty && (
          <motion.div
            className="bg-green-50 p-4 rounded-lg inline-block"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              {/* <svg
                className="w-5 h-5 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg> */}
              <span className="font-medium text-green-700">
                Warranty: {section.detailedInstructions.warranty}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {filteredSections.map((section, index) => (
        <motion.section
          key={index}
          className={`relative ${section.bgColor} py-8 md:py-16`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
            {/* Product Title Section */}
            <motion.div
              className={`w-full text-center mb-8 ${section.textColor}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                  parsedId ? "pb-2 border-b-2 border-gray-300 inline-block" : ""
                }`}
              >
                {section.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mt-2 mb-2 opacity-90">
                {section.subtitle}
              </p>

              {/* Colored accent bar */}
              <div className="flex justify-center mt-4">
                <div className="h-1 w-20 bg-red-500 rounded-full mx-1"></div>
                <div className="h-1 w-20 bg-blue-500 rounded-full mx-1"></div>
                <div className="h-1 w-20 bg-green-500 rounded-full mx-1"></div>
              </div>
            </motion.div>

            {/* Main content area */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">
              {/* Product Image - Left aligned */}
              <motion.div
                className={`flex-shrink-0 ${
                  parsedId ? "w-full lg:w-2/5" : "w-full md:w-1/2"
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <div className="relative w-full">
                  {/* Brand badge */}
                  {section.brand && (
                    <div className="absolute -top-4 -right-4 z-10 bg-white rounded-full shadow-lg p-2">
                      <div className="bg-red-500 text-white text-xs font-bold rounded-full px-3 py-1">
                        {section.brand}
                      </div>
                    </div>
                  )}

                  {section.isConstructionMaterial ? (
                    <motion.div
                      className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 p-8 rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={500}
                        height={600}
                        className="w-full h-auto object-contain mx-auto"
                        priority
                      />

                      {/* Product packaging info overlay */}
                      {section.detailedInstructions?.packaging && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-800">
                            <span>
                              Available in:{" "}
                              {section.detailedInstructions.packaging}
                            </span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <Image
                        src={section.image}
                        alt={section.title}
                        width={600}
                        height={800}
                        className="w-full h-auto object-cover rounded-xl"
                        priority
                      />

                      {/* Product name overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <div className="w-full p-4 md:p-6 text-white">
                          <h3 className="text-xl md:text-2xl font-bold">
                            {section.title}
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            {section.subtitle}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Quick info badges - only show on smaller screens and when ID is present */}
                {parsedId && (
                  <div className="lg:hidden grid grid-cols-2 gap-3 mt-6">
                    {section.detailedInstructions?.finish && (
                      <div className="bg-white/90 p-3 rounded-lg shadow-sm flex items-center gap-2">
                        <div className="bg-blue-100 p-1.5 rounded-full">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <path d="M2 17l10 5 10-5"></path>
                            <path d="M2 12l10 5 10-5"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500">Finish</span>
                          <p className="text-sm font-medium">
                            {section.detailedInstructions.finish}
                          </p>
                        </div>
                      </div>
                    )}

                    {section.detailedInstructions?.coverage && (
                      <div className="bg-white/90 p-3 rounded-lg shadow-sm flex items-center gap-2">
                        <div className="bg-green-100 p-1.5 rounded-full">
                          <svg
                            className="w-4 h-4 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs text-gray-500">
                            Coverage
                          </span>
                          \
                          <p className="text-sm font-medium">
                            {section.detailedInstructions.coverage}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Content - Right aligned */}
              <div className={`flex-1 ${parsedId ? "" : "md:w-1/2"}`}>
                {parsedId ? (
                  // Detailed product view
                  renderDetailedInstructions(section as Product)
                ) : (
                  // Product card view
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: 0.3,
                    }}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {section.description}
                    </p>

                    {/* Key features list */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-gray-800">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {section.detailedInstructions?.features?.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                          >
                            <svg
                              className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications section */}
                    {section.applications && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-3 text-gray-800">
                          Applications
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {section.applications.map((app, idx) => (
                            <motion.div
                              key={idx}
                              className="bg-blue-50 rounded-lg p-2 text-center text-sm"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {app}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <motion.button
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleKnowMoreClick(section.id)}
                    >
                      Know More
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}
