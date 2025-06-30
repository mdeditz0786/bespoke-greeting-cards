
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Gift, Sparkles, Download, Share2, Camera, Type, Palette } from "lucide-react";
import { CardCreator } from "@/components/CardCreator";
import { PremiumSection } from "@/components/PremiumSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Index = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);

  const occasions = [
    { id: "birthday", title: "🎂 Birthday Wishes", desc: "Make special birthday cards with names", popular: true },
    { id: "festival", title: "🎉 Festival Greetings", desc: "Diwali, Eid, Holi celebrations", popular: true },
    { id: "marriage", title: "💍 Marriage & Anniversary", desc: "Wedding and love celebrations" },
    { id: "morning", title: "🌅 Good Morning/Night", desc: "Daily wishes with personal touch" },
    { id: "baby", title: "👶 New Baby", desc: "Congratulations for new arrivals" },
    { id: "special", title: "💝 Special Days", desc: "Valentine, Teacher's Day & more" }
  ];

  const features = [
    { icon: Type, title: "Add Custom Names", desc: "Personalize with any name in beautiful fonts" },
    { icon: Camera, title: "Upload Photos", desc: "Add personal photos to make it special" },
    { icon: Palette, title: "Beautiful Templates", desc: "100+ professionally designed templates" },
    { icon: Download, title: "HD Download", desc: "Download high-quality images instantly" }
  ];

  if (selectedOccasion) {
    return <CardCreator occasion={selectedOccasion} onBack={() => setSelectedOccasion(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" />
            <h1 className="text-2xl font-bold text-gray-800">WishCreator.in</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-pink-500 transition-colors">Home</a>
            <a href="#templates" className="text-gray-600 hover:text-pink-500 transition-colors">Templates</a>
            <a href="#premium" className="text-gray-600 hover:text-pink-500 transition-colors">Premium</a>
            <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
          </nav>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            Login / Sign Up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <Badge className="mb-4 bg-pink-100 text-pink-600 hover:bg-pink-200">
              ✨ India's #1 Greeting Card Maker
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Naam ke saath wishes banao,
            <br />
            Photo ke saath pyar jatao!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create beautiful, personalized greeting cards with names and photos. Perfect for birthdays, festivals, and special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Creating Now
            </Button>
            <Button size="lg" variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg">
              💡 Try Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🔧 How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-pink-100">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section id="templates" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            💌 Choose Your Occasion
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Select from our beautiful collection of templates for every special moment
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {occasions.map((occasion) => (
              <Card 
                key={occasion.id} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-pink-100 hover:border-pink-200"
                onClick={() => setSelectedOccasion(occasion.id)}
              >
                <CardContent className="p-6 relative">
                  {occasion.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white">
                      🔥 Popular
                    </Badge>
                  )}
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                    {occasion.title.split(' ')[0]}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {occasion.title.substring(2)}
                  </h3>
                  <p className="text-gray-600 mb-4">{occasion.desc}</p>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                    Create Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <PremiumSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Amazing Wishes? 🎉
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy users creating beautiful greeting cards every day
          </p>
          <Button 
            size="lg" 
            className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <Gift className="mr-2 h-5 w-5" />
            Start Creating for FREE
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-pink-500" />
                <h3 className="text-xl font-bold">WishCreator.in</h3>
              </div>
              <p className="text-gray-400">
                India's favorite platform for creating personalized greeting cards with love.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Premium</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Popular Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Birthday Cards</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Festival Wishes</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Wedding Cards</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Good Morning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-pink-400 hover:border-pink-400">
                  Instagram
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-pink-400 hover:border-pink-400">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 WishCreator.in - Made with ❤️ for creating beautiful memories</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
