import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Coffee, 
  Users, 
  Leaf, 
  TrendingUp, 
  ArrowRight, 
  Award,
  Globe,
  Heart
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import transportTruck from "@/assets/transport-truck.jpg";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: `url(${heroImage})`}}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bunno Bedelle Farmers' Cooperative Union
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Empowering agricultural communities through sustainable practices, 
            innovation, and collaborative growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Link to="/about" className="flex items-center gap-2">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/contact">Join Our Cooperative</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "82,977", label: "Member Farmers" },
              { icon: Coffee, number: "180", label: "Primary Cooperatives" },
              { icon: Globe, number: "7", label: "Districts Covered" },
              { icon: Award, number: "2003", label: "Established" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Purpose</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leading Ethiopian agriculture through modern farming and quality products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To see modern farmers leading local and foreign markets by producing and 
                  supplying quality products using modern agricultural methods.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ensuring efficient supply of inputs and modern technology to improve 
                  production and productivity, achieving better market prices through 
                  increased bargaining power.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium agricultural products from Ethiopian highlands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-cover bg-center" style={{backgroundImage: `url(${coffeeBeans})`}}>
                <div className="w-full h-full bg-black/40 flex items-end p-6">
                  <div>
                    <Badge className="mb-2 bg-primary">Export Quality</Badge>
                    <h3 className="text-2xl font-bold text-white">Premium Coffee</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  High-quality Ethiopian coffee with exceptional flavor profiles, 
                  sustainably grown and ethically sourced.
                </p>
                <Button variant="outline" className="w-full">
                  <Link to="/products">View Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-cover bg-center" style={{backgroundImage: `url(${transportTruck})`}}>
                <div className="w-full h-full bg-black/40 flex items-end p-6">
                  <div>
                    <Badge className="mb-2 bg-accent">Comprehensive</Badge>
                    <h3 className="text-2xl font-bold text-white">Member Services</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Complete support including training, transportation, 
                  insurance, and market access for all our members.
                </p>
                <Button variant="outline" className="w-full">
                  <Link to="/services">Our Services</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Cooperative Today
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Be part of Ethiopia's leading agricultural cooperative with 82,977+ members 
            across 7 districts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white/30 text-white hover:bg-white/20">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}