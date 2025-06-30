
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Share2, Upload, Palette, Type, Heart, Star, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CardCreatorProps {
  occasion: string;
  onBack: () => void;
}

export const CardCreator = ({ occasion, onBack }: CardCreatorProps) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [selectedFont, setSelectedFont] = useState("font-serif");
  const [selectedColor, setSelectedColor] = useState("text-pink-600");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const occasionConfig = {
    birthday: {
      title: "🎂 Birthday Wishes",
      templates: [
        { bg: "bg-gradient-to-br from-pink-400 to-purple-500", emoji: "🎂" },
        { bg: "bg-gradient-to-br from-yellow-400 to-orange-500", emoji: "🎉" },
        { bg: "bg-gradient-to-br from-blue-400 to-indigo-500", emoji: "🎈" }
      ],
      defaultMessage: "Wishing you a very Happy Birthday! May all your dreams come true. ✨"
    },
    festival: {
      title: "🎉 Festival Greetings",
      templates: [
        { bg: "bg-gradient-to-br from-orange-400 to-red-500", emoji: "🪔" },
        { bg: "bg-gradient-to-br from-green-400 to-teal-500", emoji: "🎊" },
        { bg: "bg-gradient-to-br from-purple-400 to-pink-500", emoji: "✨" }
      ],
      defaultMessage: "May this festival bring joy, prosperity and happiness to your life! 🙏"
    },
    marriage: {
      title: "💍 Marriage & Anniversary",
      templates: [
        { bg: "bg-gradient-to-br from-rose-400 to-pink-500", emoji: "💕" },
        { bg: "bg-gradient-to-br from-red-400 to-rose-500", emoji: "❤️" },
        { bg: "bg-gradient-to-br from-purple-400 to-pink-400", emoji: "💖" }
      ],
      defaultMessage: "Congratulations on your special day! Wishing you both a lifetime of love and happiness! 💝"
    },
    morning: {
      title: "🌅 Good Morning/Night",
      templates: [
        { bg: "bg-gradient-to-br from-yellow-300 to-orange-400", emoji: "☀️" },
        { bg: "bg-gradient-to-br from-blue-300 to-purple-400", emoji: "🌙" },
        { bg: "bg-gradient-to-br from-green-300 to-blue-400", emoji: "🌸" }
      ],
      defaultMessage: "Good Morning! Have a wonderful day ahead filled with joy and success! 🌞"
    },
    baby: {
      title: "👶 New Baby",
      templates: [
        { bg: "bg-gradient-to-br from-pink-300 to-pink-400", emoji: "👶" },
        { bg: "bg-gradient-to-br from-blue-300 to-blue-400", emoji: "🍼" },
        { bg: "bg-gradient-to-br from-yellow-300 to-yellow-400", emoji: "⭐" }
      ],
      defaultMessage: "Congratulations on your bundle of joy! Wishing the little angel all the happiness! 👼"
    },
    special: {
      title: "💝 Special Days",
      templates: [
        { bg: "bg-gradient-to-br from-red-400 to-pink-500", emoji: "💝" },
        { bg: "bg-gradient-to-br from-purple-400 to-indigo-500", emoji: "🎁" },
        { bg: "bg-gradient-to-br from-teal-400 to-blue-500", emoji: "💎" }
      ],
      defaultMessage: "Sending you lots of love and best wishes on this special day! 🌟"
    }
  };

  const config = occasionConfig[occasion as keyof typeof occasionConfig];
  const fonts = ["font-serif", "font-sans", "font-mono", "font-bold"];
  const colors = ["text-white", "text-yellow-200", "text-pink-200", "text-blue-200"];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    toast({
      title: "🎉 Card Ready!",
      description: "Your beautiful greeting card has been prepared for download!",
    });
  };

  const handleShare = () => {
    toast({
      title: "📱 Share on WhatsApp",
      description: "Your card is ready to share with your loved ones!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={onBack} className="text-gray-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h1 className="text-xl font-bold text-gray-800">{config.title}</h1>
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleShare} variant="outline" className="text-green-600 border-green-200">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button onClick={handleDownload} className="bg-pink-500 hover:bg-pink-600 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download HD
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card Preview */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <Heart className="mr-2 h-6 w-6 text-pink-500" />
              Your Card Preview
            </h2>
            
            <Card className="overflow-hidden shadow-2xl">
              <div 
                ref={cardRef}
                className={`${config.templates[selectedTemplate].bg} aspect-square relative p-8 flex flex-col justify-center items-center text-center text-white min-h-[400px]`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 text-6xl">{config.templates[selectedTemplate].emoji}</div>
                  <div className="absolute top-4 right-4 text-4xl">✨</div>
                  <div className="absolute bottom-4 left-4 text-4xl">🌟</div>
                  <div className="absolute bottom-4 right-4 text-6xl">{config.templates[selectedTemplate].emoji}</div>
                </div>

                {/* Photo Upload Area */}
                {uploadedImage && (
                  <div className="mb-6">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded" 
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                )}

                {/* Main Content */}
                <div className="relative z-10 space-y-4">
                  <div className="text-5xl mb-4">{config.templates[selectedTemplate].emoji}</div>
                  
                  {name && (
                    <h3 className={`text-3xl font-bold ${selectedColor} ${selectedFont} drop-shadow-lg`}>
                      {name}
                    </h3>
                  )}
                  
                  <p className={`text-lg ${selectedColor} ${selectedFont} max-w-sm leading-relaxed drop-shadow-md`}>
                    {message || config.defaultMessage}
                  </p>
                  
                  <div className="flex justify-center space-x-2 mt-6">
                    <Sparkles className="h-6 w-6 text-yellow-200" />
                    <Star className="h-6 w-6 text-yellow-200" />
                    <Sparkles className="h-6 w-6 text-yellow-200" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Customization Panel */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <Palette className="mr-2 h-6 w-6 text-purple-500" />
              Customize Your Card
            </h2>

            {/* Templates */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded mr-2"></div>
                  Choose Template
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {config.templates.map((template, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedTemplate(index)}
                      className={`${template.bg} aspect-square rounded-lg cursor-pointer border-4 transition-all duration-300 flex items-center justify-center text-3xl ${
                        selectedTemplate === index ? 'border-white shadow-lg scale-105' : 'border-transparent'
                      }`}
                    >
                      {template.emoji}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Name Input */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Type className="mr-2 h-4 w-4 text-blue-500" />
                  Add Name
                </h3>
                <Input
                  placeholder="Enter name here..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-lg"
                />
              </CardContent>
            </Card>

            {/* Photo Upload */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Upload className="mr-2 h-4 w-4 text-green-500" />
                  Upload Photo
                </h3>
                <div className="space-y-3">
                  <Button 
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline" 
                    className="w-full border-dashed border-2 border-gray-300 h-20 text-gray-600"
                  >
                    {uploadedImage ? '✅ Photo Added' : '📷 Choose Photo'}
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  {uploadedImage && (
                    <Button 
                      onClick={() => setUploadedImage(null)}
                      variant="outline" 
                      size="sm" 
                      className="w-full text-red-500"
                    >
                      Remove Photo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Message */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">✍️ Custom Message</h3>
                <Textarea
                  placeholder={config.defaultMessage}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              </CardContent>
            </Card>

            {/* Font & Color */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">🎨 Style Options</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Font Style</label>
                    <div className="grid grid-cols-2 gap-2">
                      {fonts.map((font) => (
                        <Button
                          key={font}
                          variant={selectedFont === font ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedFont(font)}
                          className={font}
                        >
                          Sample Text
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Text Color</label>
                    <div className="grid grid-cols-2 gap-2">
                      {colors.map((color) => (
                        <Button
                          key={color}
                          variant={selectedColor === color ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedColor(color)}
                          className={`${color} bg-gray-800`}
                        >
                          Color Sample
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Premium Upgrade */}
            <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardContent className="p-6">
                <div className="text-center">
                  <Badge className="mb-3 bg-yellow-500 text-white">⭐ Premium Features</Badge>
                  <h3 className="font-bold mb-2">Unlock More Templates!</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get access to 50+ premium templates, HD downloads, and watermark-free cards
                  </p>
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white">
                    Upgrade for ₹49 only
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
