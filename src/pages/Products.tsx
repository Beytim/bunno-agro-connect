import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Wheat, Droplets, Truck, ArrowUpRight, Leaf } from "lucide-react";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import sesameSeeds from "@/assets/sesame-seeds.jpg";
import agriculturalInputs from "@/assets/agricultural-inputs.jpg";
import soyaBeans from "@/assets/soya-beans.jpg";
import maizeCorn from "@/assets/maize-corn.jpg";
import teffGrain from "@/assets/teff-grain.jpg";
import nigerSeed from "@/assets/niger-seed.jpg";
import riceGrains from "@/assets/rice-grains.jpg";

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Products & Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our premium agricultural products and comprehensive services designed 
            to support farmers and promote sustainable agriculture.
          </p>
        </div>

        {/* Main Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Coffee */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-cover bg-center" style={{backgroundImage: `url(${coffeeBeans})`}}>
              <div className="w-full h-full bg-black/40 flex items-end p-6">
                <div>
                  <Badge className="mb-2 bg-primary">Premium Quality</Badge>
                  <h3 className="text-2xl font-bold text-white">Coffee Beans</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                High-quality Arabica coffee beans grown sustainably by our member farmers. 
                We ensure fair trade practices and premium processing standards.
              </p>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Export Ready</span>
              </div>
            </CardContent>
          </Card>

          {/* Sesame */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-cover bg-center" style={{backgroundImage: `url(${sesameSeeds})`}}>
              <div className="w-full h-full bg-black/40 flex items-end p-6">
                <div>
                  <Badge className="mb-2 bg-accent">Organic Certified</Badge>
                  <h3 className="text-2xl font-bold text-white">Sesame Seeds</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Premium white and mixed sesame seeds with excellent oil content. 
                Carefully processed and packaged to meet international standards.
              </p>
              <div className="flex items-center gap-2">
                <Wheat className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">High Oil Content</span>
              </div>
            </CardContent>
          </Card>

          {/* Soya Beans */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-cover bg-center" style={{backgroundImage: `url(${soyaBeans})`}}>
              <div className="w-full h-full bg-black/40 flex items-end p-6">
                <div>
                  <Badge className="mb-2 bg-secondary">High Protein</Badge>
                  <h3 className="text-2xl font-bold text-white">Soya Beans</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Premium quality soybeans with high protein content, perfect for oil extraction 
                and food processing. Grown using sustainable farming methods.
              </p>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Protein Rich</span>
              </div>
            </CardContent>
          </Card>

          {/* Maize */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-cover bg-center" style={{backgroundImage: `url(${maizeCorn})`}}>
              <div className="w-full h-full bg-black/40 flex items-end p-6">
                <div>
                  <Badge className="mb-2 bg-primary">Staple Crop</Badge>
                  <h3 className="text-2xl font-bold text-white">Maize (Corn)</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                High-yield yellow and white maize varieties, processed to food-grade standards. 
                Essential staple crop for food security and livestock feed.
              </p>
              <div className="flex items-center gap-2">
                <Wheat className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">High Yield</span>
              </div>
            </CardContent>
          </Card>

          {/* Teff */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-cover bg-center" style={{backgroundImage: `url(${teffGrain})`}}>
              <div className="w-full h-full bg-black/40 flex items-end p-6">
                <div>
                  <Badge className="mb-2 bg-accent">Ancient Grain</Badge>
                  <h3 className="text-2xl font-bold text-white">Teff</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Ethiopia's indigenous superfood grain with exceptional nutritional value. 
                Gluten-free and rich in minerals, perfect for health-conscious consumers.
              </p>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Gluten-Free</span>
              </div>
            </CardContent>
          </Card>

          {/* Niger Seed */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-cover bg-center" style={{backgroundImage: `url(${nigerSeed})`}}>
              <div className="w-full h-full bg-black/40 flex items-end p-6">
                <div>
                  <Badge className="mb-2 bg-secondary">Oil Seed</Badge>
                  <h3 className="text-2xl font-bold text-white">Niger Seed</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                High-quality niger seed (Guizotia abyssinica) with excellent oil content. 
                Indigenous oilseed crop with growing international demand.
              </p>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Rich Oil Content</span>
              </div>
            </CardContent>
          </Card>

          {/* Rice */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-cover bg-center" style={{backgroundImage: `url(${riceGrains})`}}>
              <div className="w-full h-full bg-black/40 flex items-end p-6">
                <div>
                  <Badge className="mb-2 bg-primary">Premium Grade</Badge>
                  <h3 className="text-2xl font-bold text-white">Rice</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Premium quality rice varieties grown in optimal highland conditions. 
                Carefully processed and graded to meet international quality standards.
              </p>
              <div className="flex items-center gap-2">
                <Wheat className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coffee Export Plan */}
        <Card className="mb-12 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl text-primary">Coffee Export Plan</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Export Objectives</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Establish direct trade relationships with international buyers</li>
                  <li>• Achieve premium pricing for high-quality coffee</li>
                  <li>• Build sustainable export volumes of 500+ tons annually</li>
                  <li>• Develop certified organic and fair trade products</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Target Markets</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• European Union specialty coffee markets</li>
                  <li>• North American direct trade partners</li>
                  <li>• Asian emerging coffee markets</li>
                  <li>• Regional African trade networks</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Timeline:</strong> We aim to achieve full export capacity within 18 months, 
                with first shipments scheduled for the next harvest season.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Agricultural Inputs */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Agricultural Inputs & Supplies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-video bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${agriculturalInputs})`}}>
                <div className="w-full h-full bg-black/30 rounded-lg"></div>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  We provide comprehensive agricultural input supply services to our member farmers, 
                  ensuring access to quality seeds, fertilizers, and farming equipment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-primary" />
                    <span className="text-sm">Quality Seeds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wheat className="w-4 h-4 text-primary" />
                    <span className="text-sm">Fertilizers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-primary" />
                    <span className="text-sm">Equipment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-primary" />
                    <span className="text-sm">Processing Tools</span>
                  </div>
                </div>
                <Button className="w-full">Request Supply Catalog</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Export Products", 
              items: ["Premium Coffee Beans", "Sesame Seeds", "Soya Beans", "Niger Seeds", "Teff Grain"],
              icon: ArrowUpRight
            },
            {
              title: "Local Market",
              items: ["Maize (Corn)", "Rice", "Fresh Produce", "Processed Grains"],
              icon: Wheat
            },
            {
              title: "Value Added",
              items: ["Coffee Processing", "Seed Cleaning", "Oil Extraction", "Quality Grading"],
              icon: Coffee
            }
          ].map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}