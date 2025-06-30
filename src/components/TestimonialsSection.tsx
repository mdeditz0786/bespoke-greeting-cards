
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      avatar: "PS",
      rating: 5,
      text: "Best site to make birthday wishes for my friends with photo! The templates are so beautiful and easy to customize. I use it for every celebration now! 🎉",
      occasion: "Birthday Cards"
    },
    {
      name: "Rahul Gupta",
      location: "Mumbai",
      avatar: "RG",
      rating: 5,
      text: "Amazing quality and super easy to use. Made beautiful Diwali cards for the whole family. Everyone loved them! The premium pack is totally worth it. ✨",
      occasion: "Festival Cards"
    },
    {
      name: "Sneha Patel",
      location: "Bangalore",
      avatar: "SP",
      rating: 5,
      text: "I created the most beautiful anniversary card for my husband. He was so surprised and happy! The romantic templates are just perfect. 💕",
      occasion: "Anniversary Cards"
    },
    {
      name: "Mohammed Ali",
      location: "Hyderabad",
      avatar: "MA",
      rating: 5,
      text: "Eid Mubarak cards with family photos turned out amazing! My relatives were asking where I got them made. The customization options are excellent! 🌙",
      occasion: "Eid Cards"
    },
    {
      name: "Anita Singh",
      location: "Jaipur",
      avatar: "AS",
      rating: 5,
      text: "Easy to use, and great designs. I use it for every family event - birthdays, festivals, everything! The HD quality is superb for printing too. 🎨",
      occasion: "All Occasions"
    },
    {
      name: "Vikash Kumar",
      location: "Kolkata",
      avatar: "VK",
      rating: 5,
      text: "The good morning cards I send to my family group every day are a hit! So many beautiful templates to choose from. Premium features are worth every penny! ☀️",
      occasion: "Good Morning Cards"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Users" },
    { number: "2,00,000+", label: "Cards Created" },
    { number: "4.9/5", label: "User Rating" },
    { number: "15+", label: "Categories" }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            💬 Loved by Thousands of Users
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our growing community of happy users who create beautiful memories every day
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-pink-100 relative">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-pink-200">
                  <Quote className="h-8 w-8" />
                </div>
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>

                {/* Occasion Badge */}
                <div className="mt-4">
                  <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full">
                    {testimonial.occasion}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              🛡️ Why Users Trust WishCreator.in
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="font-semibold mb-2 text-gray-800">Safe & Secure</h4>
                <p className="text-gray-600 text-sm">Your photos and data are completely safe with us</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold mb-2 text-gray-800">Lightning Fast</h4>
                <p className="text-gray-600 text-sm">Create and download cards in under 2 minutes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💯</div>
                <h4 className="font-semibold mb-2 text-gray-800">100% Satisfaction</h4>
                <p className="text-gray-600 text-sm">Money-back guarantee if you're not happy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
