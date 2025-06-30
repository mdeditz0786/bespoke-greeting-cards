
import { Header } from "@/components/Header";
import { CardCreator } from "@/components/CardCreator";
import { PremiumSection } from "@/components/PremiumSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Gift, 
  Cake, 
  Sun, 
  Moon, 
  Baby, 
  Calendar,
  Download,
  Share2,
  Sparkles,
  Star,
  Users
} from "lucide-react";

const Index = () => {
  const occasions = [
    { icon: Cake, title: "Birthday Wishes", desc: "Special birthday cards with name & photo", color: "bg-pink-100 text-pink-600" },
    { icon: Heart, title: "Marriage & Anniversary", desc: "Romantic cards for special moments", color: "bg-red-100 text-red-600" },
    { icon: Gift, title: "Festival Greetings", desc: "Diwali, Eid, Holi celebration cards", color: "bg-orange-100 text-orange-600" },
    { icon: Baby, title: "New Baby", desc: "Congratulate new parents", color: "bg-blue-100 text-blue-600" },
    { icon: Sun, title: "Good Morning", desc: "Start the day with wishes", color: "bg-yellow-100 text-yellow-600" },
    { icon: Moon, title: "Good Night", desc: "Sweet dreams messages", color: "bg-purple-100 text-purple-600" },
  ];

  const features = [
    { icon: Download, title: "HD Downloads", desc: "High quality images for print & social media" },
    { icon: Share2, title: "WhatsApp Share", desc: "Direct share to WhatsApp with one click" },
    { icon: Sparkles, title: "100+ Templates", desc: "Beautiful designs for every occasion" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6 bg-red-100 text-red-600 text-lg px-6 py-2">
            🎉 Make Every Wish Special!
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Create Beautiful Greeting Cards
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Add names, photos & personal messages to make every greeting special.<br />
            <span className="text-red-500 font-semibold">Perfect for Indian festivals & celebrations!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 text-lg">
              <Gift className="mr-2 h-5 w-5" />
              Start Creating Now
            </Button>
            <Button size="lg" variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 px-8 py-4 text-lg">
              <Star className="mr-2 h-5 w-5" />
              Try Demo
            </Button>
          </div>

          {/* Features Row */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-gray-700">
                <feature.icon className="h-6 w-6 text-red-500" />
                <span className="font-semibold">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section id="occasions" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Choose Your Occasion</h2>
            <p className="text-xl text-gray-600">Perfect templates for every celebration</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-red-200">
                <CardContent className="p-8 text-center">
                  <div className={`${occasion.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <occasion.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{occasion.title}</h3>
                  <p className="text-gray-600">{occasion.desc}</p>
                  <Button className="mt-4 w-full" variant="outline">
                    View Templates
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-800">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Select Template</h3>
              <p className="text-gray-600">Choose from 100+ beautiful designs for your occasion</p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Customize</h3>
              <p className="text-gray-600">Add name, photo, and your personal message</p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Download & Share</h3>
              <p className="text-gray-600">Get HD image & share on WhatsApp instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Creator Section */}
      <CardCreator />

      {/* Premium Section */}
      <PremiumSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Amazing Wishes?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy users who make every celebration special
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Users className="mr-2 h-5 w-5" />
              Start Creating Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              View All Occasions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-6 w-6 text-red-500" />
            <h3 className="text-xl font-bold">WishCreator.in</h3>
          </div>
          <p className="text-gray-400 mb-6">Making every wish special with personalized greeting cards</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-gray-500 mt-6 text-sm">© 2025 WishCreator.in - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
