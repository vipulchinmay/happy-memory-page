import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Cake } from "lucide-react";
import FloatingHeart from "@/components/FloatingHeart";
import PhotoGallery from "@/components/PhotoGallery";

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
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
            <Sparkles className="text-primary w-5 h-5" />
            <span className="text-sm font-medium text-secondary-foreground">
              A Special Day for Someone Special
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
            Happy Birthday!
          </h1>

          <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl text-muted-foreground">
            <Heart className="text-primary animate-pulse" fill="currentColor" />
            <p className="font-light">To the most amazing person</p>
            <Heart className="text-primary animate-pulse" fill="currentColor" />
          </div>

          <Button
            size="lg"
            className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg rounded-full"
            onClick={() => {
              document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Cake className="mr-2" />
            See Our Memories
          </Button>
        </div>
      </section>

      {/* Message Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl animate-fade-in">
            <div className="text-center space-y-6">
              <Heart
                className="w-16 h-16 mx-auto text-primary animate-pulse"
                fill="currentColor"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                You Make Every Day Special
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Today we celebrate you and all the joy you bring into this world. 
                Thank you for being you, for your smile, your laughter, and all the 
                beautiful moments we share together. Here's to another year of amazing 
                memories, adventures, and endless love.
              </p>
              <div className="flex items-center justify-center gap-2 text-primary pt-4">
                <Heart size={20} fill="currentColor" />
                <span className="text-xl font-semibold">With All My Love</span>
                <Heart size={20} fill="currentColor" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="relative py-20 px-4 bg-secondary/30">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Beautiful Moments
          </h2>
          <p className="text-lg text-muted-foreground">
            Every photo tells a story of us
          </p>
        </div>
        <PhotoGallery />
      </section>

      {/* Final Message */}
      <section className="relative py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="text-accent animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Make a Wish!
            </h3>
            <Sparkles className="text-accent animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground">
            May all your dreams come true this year and always
          </p>
          <div className="pt-8">
            <Cake className="w-20 h-20 mx-auto text-primary animate-float" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
