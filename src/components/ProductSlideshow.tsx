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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-4">
          <Badge className="mb-2 bg-primary/80 backdrop-blur-sm">
            {slides[currentSlide].badge}
          </Badge>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
          {slides[currentSlide].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            <Link to="/products" className="flex items-center gap-2">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Link to="/contact">Join Our Cooperative</Link>
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Cooperative Union Title Overlay */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white/90">
          Bunno Bedelle Farmers' Cooperative Union
        </h2>
        <p className="text-white/70 text-lg">
          Empowering Ethiopian Agriculture Through Innovation
        </p>
      </div>
    </section>
  );
}