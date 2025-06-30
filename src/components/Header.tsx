
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Heart, User } from "lucide-react";
import { AuthDialog } from "./AuthDialog";

export const Header = () => {
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const openLogin = () => {
    setAuthMode("login");
    setAuthDialogOpen(true);
  };

  const openSignup = () => {
    setAuthMode("signup");
    setAuthDialogOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-500" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">WishCreator.in</h1>
              <p className="text-xs text-gray-600">Naam ke saath wishes banao!</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-red-500 transition-colors">Home</a>
            <a href="#occasions" className="text-gray-700 hover:text-red-500 transition-colors">Occasions</a>
            <a href="#premium" className="text-gray-700 hover:text-red-500 transition-colors">Premium</a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-500 transition-colors">Reviews</a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={openLogin}>
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" onClick={openSignup}>
              Sign Up
            </Button>
            <Button variant="outline" size="sm" className="text-yellow-600 border-yellow-600 hover:bg-yellow-50">
              <Crown className="h-4 w-4 mr-2" />
              Premium
            </Button>
          </div>
        </div>
      </header>

      <AuthDialog 
        isOpen={authDialogOpen} 
        onClose={() => setAuthDialogOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};
