import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import sesameSeeds from "@/assets/sesame-seeds.jpg";
import soyaBeans from "@/assets/soya-beans.jpg";
import maizeCorn from "@/assets/maize-corn.jpg";
import teffGrain from "@/assets/teff-grain.jpg";
import nigerSeed from "@/assets/niger-seed.jpg";
import riceGrains from "@/assets/rice-grains.jpg";

const slides = [
  {
    image: coffeeBeans,
    badge: "Premium Quality",
    title: "Premium Coffee Beans",
    description: "High-quality Ethiopian Arabica coffee with exceptional flavor profiles, sustainably grown and ethically sourced by our cooperative members."
  },
  {
    image: sesameSeeds,
    badge: "Organic Certified",
    title: "Premium Sesame Seeds",
    description: "Premium white and mixed sesame seeds with excellent oil content, carefully processed and packaged to meet international standards."
  },
  {
    image: soyaBeans,
    badge: "High Protein",
    title: "Quality Soya Beans",
    description: "Premium quality soybeans with high protein content, perfect for oil extraction and food processing using sustainable farming methods."
  },
  {
    image: maizeCorn,
    badge: "Staple Crop",
    title: "Golden Maize",
    description: "High-yield yellow and white maize varieties, processed to food-grade standards. Essential for food security and livestock feed."
  },
  {
    image: teffGrain,
    badge: "Ancient Grain",
    title: "Ethiopian Teff",
    description: "Ethiopia's indigenous superfood grain with exceptional nutritional value. Gluten-free and rich in minerals for health-conscious consumers."
  },
  {
    image: nigerSeed,
    badge: "Oil Seed",
    title: "Niger Seeds",
    description: "High-quality niger seed with excellent oil content. Indigenous oilseed crop with growing international demand and market value."
  },
  {
    image: riceGrains,
    badge: "Premium Grade",
    title: "Highland Rice",
    description: "Premium quality rice varieties grown in optimal highland conditions, carefully processed and graded to international quality standards."
  }
];

export default function ProductSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden rounded-none md:rounded-3xl md:mx-8 md:mt-8 shadow-2xl">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 backdrop-blur-md text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/15 backdrop-blur-md text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <div className="mb-6">
          <Badge className="mb-3 bg-primary/90 backdrop-blur-md px-4 py-2 text-sm font-medium border border-white/20">
            {slides[currentSlide].badge}
          </Badge>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 animate-fade-in max-w-3xl mx-auto leading-relaxed">
          {slides[currentSlide].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-10 py-3 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg">
            <Link to="/products" className="flex items-center gap-3">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-10 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md">
            <Link to="/contact">Join Our Cooperative</Link>
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 bg-black/20 backdrop-blur-md px-4 py-3 rounded-full border border-white/20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Cooperative Union Title Overlay */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center bg-black/20 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white/95 mb-1">
          Bunno Bedelle Farmers' Cooperative Union
        </h2>
        <p className="text-white/75 text-sm md:text-base">
          Empowering Ethiopian Agriculture Through Innovation
        </p>
      </div>
    </section>
  );
}