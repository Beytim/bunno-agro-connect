import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Calendar, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Bunno Bedelle</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A leading farmers' cooperative union dedicated to empowering agricultural communities 
            and promoting sustainable farming practices in the region.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Member Farmers</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">15</p>
              <p className="text-sm text-muted-foreground">Districts Covered</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">20+</p>
              <p className="text-sm text-muted-foreground">Awards Won</p>
            </CardContent>
          </Card>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading farmers' cooperative union that transforms agricultural 
                communities through sustainable practices, innovation, and equitable market 
                access, ensuring prosperity for all members while preserving our environment 
                for future generations.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To empower smallholder farmers by providing comprehensive support services, 
                facilitating access to markets, promoting sustainable agricultural practices, 
                and fostering collaborative growth that enhances food security and economic 
                development in our communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* History & Establishment */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Bunno Bedelle Farmers' Cooperative Union was established with the vision of 
                transforming the agricultural landscape in our region. Founded by a group of 
                dedicated farmers who recognized the power of collective action, our union has 
                grown from a small local initiative to a significant force in agricultural development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we have built strong partnerships with government agencies, 
                international organizations, and private sector entities to create sustainable 
                solutions for our farming communities. Our commitment to excellence and 
                innovation has made us a trusted name in agricultural cooperation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Core Values */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Our Core Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Sustainability",
                "Innovation",
                "Collaboration",
                "Integrity",
                "Excellence",
                "Community Focus",
                "Environmental Stewardship",
                "Economic Empowerment",
                "Quality Assurance"
              ].map((value) => (
                <Badge key={value} variant="secondary" className="p-2 justify-center">
                  {value}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}