import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import coffeeImage from "@/assets/coffee-beans.jpg";
import sesameImage from "@/assets/sesame-seeds.jpg";
import transportImage from "@/assets/transport-truck.jpg";
import inputsImage from "@/assets/agricultural-inputs.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Bunno Bedelle Farmers' Cooperative Union</h1>
              <p className="text-primary-foreground/80">Established 2003 | Serving 82,977 Members</p>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-primary-foreground/80 transition-colors">About</a>
              <a href="#products" className="hover:text-primary-foreground/80 transition-colors">Products</a>
              <a href="#services" className="hover:text-primary-foreground/80 transition-colors">Services</a>
              <a href="#contact" className="hover:text-primary-foreground/80 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl font-bold mb-4">Leading Ethiopian Agriculture</h2>
          <p className="text-xl mb-6">500 KM Southwest of Addis Ababa, Bedele Town</p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">Learn More</Button>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">To see the modern farmers those leading local and foreign market by producing and supplying quality of product by using modern agricultural method</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Ensuring efficient and effective supply of input and modern technology to improve production and productivity with high quality and quantity and to transform to agro-process. Achieving better market price through increasing bargaining power of the farmers and to control the post harvest of farmers' product</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">About Our Union</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Established</CardTitle>
              </CardHeader>
              <CardContent>
                <p>July 30, 2003 (Registration #630/96)</p>
                <p className="text-muted-foreground">Started with 15 primary cooperatives</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Current Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>180</strong> Primary Cooperatives</p>
                <p><strong>82,977</strong> Members (66,903 male, 16,073 female)</p>
                <p><strong>49.6 Million Birr</strong> Capital</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coverage Area</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Seven Districts: Dhidesa, Gachi, Borecha, Bedele, Dabo, Dega, Meko</p>
                <p className="text-muted-foreground">Buno Bedele Zone, Oromia Region</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Area of Operation</h3>
            <p className="text-lg mb-4">The operation area includes Dhidesa, Gachi, Borecha, Bedele, Dabo, Dega and Meko districts of Buno Bedele zone. The area is widely known for its production of best quality agricultural products.</p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div><strong>North:</strong> East Wolega</div>
              <div><strong>South:</strong> Cora District</div>
              <div><strong>East:</strong> Jima Zone</div>
              <div><strong>West:</strong> Southern Wolega</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Main Products</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Coffee", image: coffeeImage, description: "Premium quality Ethiopian coffee" },
              { name: "Sesame", image: sesameImage, description: "High-grade sesame seeds" },
              { name: "Soya Bean", description: "Nutritious protein-rich legumes" },
              { name: "Maize", description: "Quality corn for food and feed" },
              { name: "Teff", description: "Traditional Ethiopian grain" },
              { name: "Niger", description: "Oil-rich niger seeds" },
              { name: "Rice", description: "Premium rice varieties" }
            ].map((product, index) => (
              <Card key={index}>
                {product.image && (
                  <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${product.image})` }}></div>
                )}
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coffee Export Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">2018 Coffee Export Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Grade/Type</th>
                      <th className="text-left p-3">Amount (KG)</th>
                      <th className="text-left p-3">Containers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="p-3">Washed</td><td className="p-3">38,400</td><td className="p-3">2</td></tr>
                    <tr className="border-b"><td className="p-3">Grade 3</td><td className="p-3">57,600</td><td className="p-3">3</td></tr>
                    <tr className="border-b"><td className="p-3">Grade 4</td><td className="p-3">115,200</td><td className="p-3">6</td></tr>
                    <tr className="border-b"><td className="p-3">Grade 5</td><td className="p-3">19,200</td><td className="p-3">1</td></tr>
                    <tr className="font-bold bg-muted"><td className="p-3">Total</td><td className="p-3">230,400</td><td className="p-3">12</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Key Activities & Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${inputsImage})` }}></div>
              <CardHeader>
                <CardTitle>Agricultural Inputs Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Supplying fertilizers and improved seeds to increase productivity</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Product Purchasing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Purchasing farmers' products at fair market prices</p>
              </CardContent>
            </Card>
            <Card>
              <div className="h-48 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${transportImage})` }}></div>
              <CardHeader>
                <CardTitle>Transportation Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p>FSR ISUZU trucks and Hilux vehicles for commodity transport</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Audit Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Professional audit services to member primary cooperatives</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Training & Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Capacity building for members and workers</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Manufacturing Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Supplying manufacturing products at fair prices</p>
              </CardContent>
            </Card>
          </div>

          {/* Infrastructure */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Storage Facilities</h4>
                  <p>80,000 quintals capacity warehouse in Bedele town (12 million Birr investment)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Processing Equipment</h4>
                  <p>Two dry coffee processing machines for premium coffee preparation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Improve the bargaining power of members",
              "Promote modern agricultural technologies",
              "Increase product and productivity through quality inputs",
              "Establish modern agro-processing technologies",
              "Involve in natural resource management and social affairs",
              "Build capacity through education and training"
            ].map((objective, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Badge variant="secondary" className="mt-1">{index + 1}</Badge>
                    <p className="text-lg">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Partnerships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Shareholding Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Oromia Cooperative Bank</li>
                  <li>• Oromia Insurance</li>
                  <li>• Oromia Farmers' Cooperative Federation</li>
                  <li>• Oromia Coffee Producers Union</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Development Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• WFP (World Food Programme)</li>
                  <li>• ACDI/VOCA</li>
                  <li>• ATA (Agricultural Transformation Agency)</li>
                  <li>• Techno Serve</li>
                  <li>• AISCO</li>
                  <li>• Commercial Bank of Ethiopia</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Future Development Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Export main products internationally",
              "Import manufacturing products at fair prices",
              "Seed multiplication, cleaning, and packaging",
              "Construct standard warehouses",
              "Grain insurance services",
              "Recruit trained manpower",
              "Agricultural diversification (poultry, cattle, dairy)",
              "Construct dry coffee processing mill",
              "Tractor and post-harvest technology services",
              "Construct edible oil and animal feed factories"
            ].map((plan, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">{index + 1}</Badge>
                    <p>{plan}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p>Bedele Town, Buno Bedele Zone</p>
              <p>Oromia Region, Ethiopia</p>
              <p>500 KM Southwest of Addis Ababa</p>
              <p>Registration #630/96</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-primary-foreground/80">About Us</a></li>
                <li><a href="#products" className="hover:text-primary-foreground/80">Products</a></li>
                <li><a href="#services" className="hover:text-primary-foreground/80">Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Membership</h3>
              <p>82,977 Active Members</p>
              <p>180 Primary Cooperatives</p>
              <p>7 Districts Coverage</p>
              <p>49.6 Million Birr Capital</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 mt-8 text-center">
            <p>&copy; 2024 Bunno Bedelle Farmers' Cooperative Union. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
