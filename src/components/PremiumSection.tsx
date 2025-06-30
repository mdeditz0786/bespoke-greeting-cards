
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Zap, Download, Star, Sparkles, Gift } from "lucide-react";

export const PremiumSection = () => {
  const premiumPacks = [
    {
      title: "🎉 Festival Pack",
      price: "₹49",
      templates: "30+",
      occasions: ["Diwali", "Eid", "Holi", "Christmas"],
      popular: true
    },
    {
      title: "🎂 Birthday Pack",
      price: "₹39",
      templates: "25+",
      occasions: ["Kids Birthday", "Adult Birthday", "Milestone Ages"],
      popular: false
    },
    {
      title: "💝 Romance Pack",
      price: "₹59",
      templates: "35+",
      occasions: ["Valentine's Day", "Anniversary", "Love Notes"],
      popular: false
    }
  ];

  const features = [
    { icon: Crown, title: "Premium Templates", desc: "Access 100+ exclusive designs" },
    { icon: Download, title: "HD Downloads", desc: "High-quality, print-ready images" },
    { icon: Zap, title: "No Watermarks", desc: "Clean, professional cards" },
    { icon: Star, title: "Priority Support", desc: "Get help when you need it" }
  ];

  return (
    <section id="premium" className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-500 text-white text-lg px-6 py-2">
            <Crown className="mr-2 h-5 w-5" />
            ✨ Go Premium
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Unlock Festival Packs & Premium Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get access to exclusive templates, HD downloads, and watermark-free cards. 
            Perfect for creating professional-quality greeting cards.
          </p>
        </div>

        {/* Premium Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-yellow-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Packs */}
        <div className="grid md:grid-cols-3 gap-8">
          {premiumPacks.map((pack, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                pack.popular ? 'border-yellow-300 scale-105' : 'border-yellow-200'
              }`}
            >
              {pack.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-500 to-orange-500 text-white px-4 py-1 text-sm font-semibold">
                  🔥 Most Popular
                </div>
              )}
              
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{pack.title.split(' ')[0]}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {pack.title.substring(2)}
                </h3>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{pack.price}</div>
                  <div className="text-gray-600">
                    <span className="font-semibold">{pack.templates} Templates</span>
                    <div className="text-sm">One-time payment</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-700">Includes:</h4>
                  <div className="space-y-2">
                    {pack.occasions.map((occasion, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-600">
                        <Sparkles className="h-4 w-4 text-yellow-500 mr-2" />
                        {occasion}
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  className={`w-full ${
                    pack.popular 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600' 
                      : 'bg-yellow-500 hover:bg-yellow-600'
                  } text-white font-semibold py-3`}
                >
                  <Gift className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
                
                <p className="text-xs text-gray-500 mt-3">
                  30-day money-back guarantee
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offer */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold mb-4">Limited Time Offer!</h3>
              <p className="text-lg mb-6 opacity-90">
                Get ALL Premium Packs for just <span className="text-3xl font-bold">₹99</span>
                <span className="text-lg line-through opacity-70 ml-2">₹147</span>
              </p>
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Crown className="mr-2 h-5 w-5" />
                Get Complete Bundle
              </Button>
              <p className="text-sm mt-4 opacity-80">
                ⏰ Offer ends in 48 hours!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
