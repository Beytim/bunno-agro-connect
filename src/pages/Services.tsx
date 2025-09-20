import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  Truck, 
  Shield, 
  Coins, 
  Leaf,
  BarChart3,
  Heart,
  Handshake
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support services designed to empower farmers and strengthen 
            agricultural communities through innovation and collaboration.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Training & Education */}
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Training & Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive training programs on modern farming techniques, sustainable 
                practices, and business management skills.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• Agricultural best practices</li>
                <li>• Sustainable farming methods</li>
                <li>• Business and financial literacy</li>
                <li>• Technology adoption</li>
              </ul>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          {/* Market Access */}
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Market Access</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Facilitating direct access to local and international markets for better 
                pricing and sustainable income generation.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• Direct buyer connections</li>
                <li>• Price negotiation support</li>
                <li>• Export facilitation</li>
                <li>• Market information services</li>
              </ul>
              <Button variant="outline" className="w-full">Explore Markets</Button>
            </CardContent>
          </Card>

          {/* Transportation Services */}
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Transportation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Reliable transportation services for agricultural inputs, equipment, 
                and produce to ensure timely delivery and reduced costs.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• Input delivery services</li>
                <li>• Produce collection</li>
                <li>• Equipment transportation</li>
                <li>• Logistics coordination</li>
              </ul>
              <Button variant="outline" className="w-full">Book Service</Button>
            </CardContent>
          </Card>

          {/* Insurance Services */}
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Insurance & Protection</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive insurance coverage to protect farmers against crop failures, 
                natural disasters, and other agricultural risks.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• Crop insurance coverage</li>
                <li>• Weather risk protection</li>
                <li>• Equipment insurance</li>
                <li>• Livestock protection</li>
              </ul>
              <Button variant="outline" className="w-full">Get Coverage</Button>
            </CardContent>
          </Card>

          {/* Financial Services */}
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Financial Services</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Access to credit, savings programs, and financial planning services 
                tailored for agricultural businesses and farming operations.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• Agricultural loans</li>
                <li>• Savings programs</li>
                <li>• Financial planning</li>
                <li>• Investment guidance</li>
              </ul>
              <Button variant="outline" className="w-full">Apply Now</Button>
            </CardContent>
          </Card>

          {/* Sustainability Programs */}
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Sustainability</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Environmental conservation programs and sustainable farming practices 
                to ensure long-term agricultural productivity.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                <li>• Organic farming certification</li>
                <li>• Soil conservation programs</li>
                <li>• Water management systems</li>
                <li>• Carbon credit programs</li>
              </ul>
              <Button variant="outline" className="w-full">Join Program</Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Services Section */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl text-primary">Social Services</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Healthcare Support</h4>
                <p className="text-sm text-muted-foreground">
                  Health insurance programs and medical support for member families
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Education Support</h4>
                <p className="text-sm text-muted-foreground">
                  Scholarships and educational assistance for farmers' children
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Community Development</h4>
                <p className="text-sm text-muted-foreground">
                  Infrastructure development and community improvement projects
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partnership Services */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Handshake className="w-6 h-6 text-primary" />
              <CardTitle className="text-2xl text-primary">Partnership & Collaboration</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              We work closely with various organizations to enhance our service delivery 
              and create more opportunities for our members.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Government Partnerships</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Ministry of Agriculture collaboration</li>
                  <li>• Regional development programs</li>
                  <li>• Policy advocacy and representation</li>
                  <li>• Extension services coordination</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">International Partnerships</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• NGO development programs</li>
                  <li>• International trade facilitation</li>
                  <li>• Technology transfer initiatives</li>
                  <li>• Capacity building programs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}