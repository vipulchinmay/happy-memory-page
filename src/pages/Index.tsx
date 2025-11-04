import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Cake } from "lucide-react";
import FloatingHeart from "@/components/FloatingHeart";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetter from "@/components/LoveLetter";
import ReasonsSection from "@/components/ReasonsSection";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Hero Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full mb-4 border border-primary/20">
            <Sparkles className="text-primary w-5 h-5" />
            <span className="text-sm font-medium text-secondary-foreground">
              A Special Day for the Most Special Person
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in drop-shadow-2xl">
            Happy Birthday
          </h1>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground drop-shadow-lg animate-fade-in">
            Chimtu ga! 🎉
          </h2>

          <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl text-foreground/90 drop-shadow-md">
            <Heart className="text-primary animate-pulse" fill="currentColor" />
            <p className="font-light">My love, my happiness, my everything</p>
            <Heart className="text-primary animate-pulse" fill="currentColor" />
          </div>

          <Button
            size="lg"
            className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg rounded-full"
            onClick={() => {
              document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Heart className="mr-2" fill="currentColor" />
            Read Your Letter
          </Button>
        </div>
      </section>

      {/* Love Letter Section */}
      <section id="letter" className="relative py-20 px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            A Message From My Heart
          </h2>
          <p className="text-lg text-muted-foreground">
            For Chimtu ga, with all my love
          </p>
        </div>
        <LoveLetter />
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="relative py-20 px-4 bg-secondary/30">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Beautiful Moments Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Chimtu ga, every photo tells our story
          </p>
        </div>
        <PhotoGallery />
      </section>

      {/* 52 Reasons Section */}
      <section className="relative py-20 px-4">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="text-primary w-8 h-8" fill="currentColor" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              52 Reasons Why I Love You
            </h2>
            <Heart className="text-primary w-8 h-8" fill="currentColor" />
          </div>
          <p className="text-lg text-muted-foreground">
            One for every week of the year, Chimtu ga ✨
          </p>
          <p className="text-sm text-muted-foreground italic">
            Click each card to reveal why you're so special to me
          </p>
        </div>
        <ReasonsSection />
      </section>

      {/* Final Message */}
      <section className="relative py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="text-accent animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Make a Wish, Chimtu ga!
            </h3>
            <Sparkles className="text-accent animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground">
            May all your dreams come true this year and always. You deserve all the happiness in the world!
          </p>
          <div className="pt-8">
            <Cake className="w-20 h-20 mx-auto text-primary animate-float" />
          </div>
          <p className="text-lg text-primary font-semibold pt-4">
            Here's to celebrating YOU today and every day! 🎂✨
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
