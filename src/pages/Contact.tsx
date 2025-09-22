import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, CheckCircle, Loader2 } from "lucide-react";
import { FloatingElement, ParallaxContainer } from "@/components/FloatingElements";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleQuickAction = (action: string) => {
    toast({
      title: `${action} Request`,
      description: "We'll contact you shortly to arrange this.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background Elements */}
      <ParallaxContainer speed={0.2} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
        <div className="absolute top-60 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-cooperative-earth/10 rounded-full blur-xl" />
      </ParallaxContainer>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <FloatingElement delay={200}>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-cooperative-green bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with Bunno Bedelle Farmers' Cooperative Union. We're here to 
              support our members and partners in achieving agricultural excellence.
            </p>
          </div>
        </FloatingElement>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <FloatingElement delay={400}>
            <div className="lg:col-span-1 space-y-6">
              <Card className="backdrop-blur-sm bg-card/80 border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <p className="text-sm text-muted-foreground">
                      Bunno Bedelle District, Oromia Regional State<br />
                      Ethiopia, East Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Phone className="w-6 h-6 text-accent group-hover:text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <p className="text-sm text-muted-foreground">
                      Main Office: +251-XX-XXX-XXXX<br />
                      Emergency: +251-XX-XXX-XXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-cooperative-gold/20 to-cooperative-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-6 h-6 text-cooperative-gold group-hover:text-cooperative-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Addresses</h4>
                    <p className="text-sm text-muted-foreground">
                      info@bunnobedelle.coop<br />
                      support@bunnobedelle.coop
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group hover:bg-primary/5 p-3 rounded-lg transition-all duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-cooperative-earth/20 to-cooperative-earth/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Clock className="w-6 h-6 text-cooperative-earth group-hover:text-cooperative-earth" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 12:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

              {/* Quick Actions */}
              <Card className="backdrop-blur-sm bg-card/80 border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full justify-start group hover:bg-primary hover:text-primary-foreground transition-all duration-200" 
                    variant="outline"
                    onClick={() => handleQuickAction("Meeting Schedule")}
                  >
                    <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Schedule a Meeting
                  </Button>
                  <Button 
                    className="w-full justify-start group hover:bg-accent hover:text-accent-foreground transition-all duration-200" 
                    variant="outline"
                    onClick={() => handleQuickAction("Callback")}
                  >
                    <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Request a Callback
                  </Button>
                  <Button 
                    className="w-full justify-start group hover:bg-cooperative-gold hover:text-white transition-all duration-200" 
                    variant="outline"
                    onClick={() => handleQuickAction("Newsletter")}
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Join Our Newsletter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </FloatingElement>

          {/* Contact Form */}
          <FloatingElement delay={600}>
            <div className="lg:col-span-2">
              <Card className="backdrop-blur-sm bg-card/80 border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name" 
                          className="focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name" 
                          className="focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          className="focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+251-XX-XXX-XXXX" 
                          className="focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization/Farm Name</Label>
                      <Input 
                        id="organization" 
                        placeholder="Your organization or farm name" 
                        className="focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        placeholder="What is this message about?" 
                        className="focus:ring-primary/20 focus:border-primary transition-all duration-200" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry or how we can help you..."
                        className="min-h-[120px] focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        required 
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit" 
                        className="flex-1 bg-gradient-to-r from-primary to-cooperative-green hover:from-primary/90 hover:to-cooperative-green/90 transition-all duration-300 hover:shadow-glow"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                      <Button 
                        type="reset" 
                        variant="outline" 
                        className="flex-1 hover:bg-secondary/80 transition-all duration-200"
                        disabled={isSubmitting}
                      >
                        Clear Form
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
              </Card>
            </div>
          </FloatingElement>
        </div>

        {/* Additional Information */}
        <FloatingElement delay={800}>
          <Card className="mt-12 backdrop-blur-sm bg-card/80 border-0 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Visit Our Facilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 hover:bg-primary/5 rounded-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">Main Office</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Administrative headquarters and member services center
                </p>
              </div>
              <div className="text-center p-6 hover:bg-accent/5 rounded-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-10 h-10 text-accent" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">Processing Center</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Coffee and sesame processing and quality control facility
                </p>
              </div>
              <div className="text-center p-6 hover:bg-cooperative-earth/5 rounded-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-20 h-20 bg-gradient-to-br from-cooperative-earth/20 to-cooperative-earth/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-cooperative-earth" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">Training Center</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Educational programs and capacity building workshops
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-secondary/30 to-primary/10 rounded-xl text-center border border-primary/20">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">Note:</strong> Facility visits can be arranged by appointment. 
                Please contact us in advance to schedule your visit and ensure proper guidance.
              </p>
            </div>
          </CardContent>
        </Card>
        </FloatingElement>
      </div>
    </div>
  );
}