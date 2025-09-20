import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Leaf, TrendingUp, Globe, Heart, Award, Handshake } from "lucide-react";

export default function Objectives() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Objectives</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategic goals and objectives that guide our mission to transform 
            agricultural communities and promote sustainable development.
          </p>
        </div>

        {/* Primary Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Member Empowerment</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Empower our member farmers through comprehensive training, resources, 
                and support systems that enhance their agricultural productivity and income.
              </p>
              <div className="space-y-2">
                <Badge variant="secondary">Skills Development</Badge>
                <Badge variant="secondary">Resource Access</Badge>
                <Badge variant="secondary">Income Enhancement</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Sustainable Agriculture</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Promote environmentally friendly farming practices that ensure 
                long-term soil health, biodiversity conservation, and climate resilience.
              </p>
              <div className="space-y-2">
                <Badge variant="secondary">Organic Farming</Badge>
                <Badge variant="secondary">Climate Adaptation</Badge>
                <Badge variant="secondary">Biodiversity</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Economic Development */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Economic Development</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Increase farmer incomes by 40%</li>
                <li>• Create 500+ new employment opportunities</li>
                <li>• Establish value-addition facilities</li>
                <li>• Develop local processing capabilities</li>
              </ul>
            </CardContent>
          </Card>

          {/* Market Access */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Market Access</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Connect to international markets</li>
                <li>• Establish fair trade partnerships</li>
                <li>• Reduce middleman dependencies</li>
                <li>• Improve price negotiations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Social Impact */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Social Impact</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Improve healthcare access</li>
                <li>• Support education initiatives</li>
                <li>• Strengthen community bonds</li>
                <li>• Promote gender equality</li>
              </ul>
            </CardContent>
          </Card>

          {/* Quality Assurance */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Quality Assurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Achieve international certifications</li>
                <li>• Implement quality control systems</li>
                <li>• Meet export standards</li>
                <li>• Ensure product traceability</li>
              </ul>
            </CardContent>
          </Card>

          {/* Technology Innovation */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Technology Innovation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Introduce modern farming equipment</li>
                <li>• Implement digital farming solutions</li>
                <li>• Develop mobile applications</li>
                <li>• Enhance communication systems</li>
              </ul>
            </CardContent>
          </Card>

          {/* Partnership Development */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Handshake className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Partnership Development</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Build strategic alliances</li>
                <li>• Collaborate with NGOs</li>
                <li>• Engage government support</li>
                <li>• Foster international relationships</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Strategic Timeline */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Strategic Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-primary">Short Term (1-2 Years)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Member capacity building</li>
                  <li>• Infrastructure development</li>
                  <li>• Initial market connections</li>
                  <li>• Quality system implementation</li>
                </ul>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-primary">Medium Term (3-5 Years)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Export market establishment</li>
                  <li>• Value addition facilities</li>
                  <li>• Technology integration</li>
                  <li>• Partnership expansion</li>
                </ul>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h4 className="font-semibold text-lg mb-2 text-primary">Long Term (5+ Years)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Regional market leadership</li>
                  <li>• Sustainable impact measurement</li>
                  <li>• Innovation hub development</li>
                  <li>• Knowledge transfer programs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Success Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-2xl mb-1">1,000+</h4>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-2xl mb-1">40%</h4>
                <p className="text-sm text-muted-foreground">Income Increase</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-2xl mb-1">5</h4>
                <p className="text-sm text-muted-foreground">Export Markets</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-2xl mb-1">3</h4>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}