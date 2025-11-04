import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerConfetti = () => {
    // Burst from multiple points for extra celebration
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { 
      startVelocity: 30, 
      spread: 360, 
      ticks: 60, 
      zIndex: 0,
      colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C', '#FF69B4']
    };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Create confetti from left side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      
      // Create confetti from right side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const handleOpenLetter = () => {
    setIsOpen(true);
    triggerConfetti();
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto perspective-1000">
      {!isOpen ? (
        <div
          onClick={handleOpenLetter}
          className="cursor-pointer group"
        >
          <Card className="relative p-8 bg-gradient-to-br from-secondary to-card border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Heart className="text-primary animate-pulse" fill="currentColor" size={24} />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  A Letter For You
                </h3>
                <Heart className="text-primary animate-pulse" fill="currentColor" size={24} />
              </div>
              
              <div className="relative py-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12">
                  <Sparkles className="text-white w-16 h-16 animate-pulse" />
                </div>
              </div>

              <p className="text-lg text-muted-foreground font-medium">
                Click to open and read your special message
              </p>
              
              <div className="pt-4 text-primary font-semibold animate-bounce">
                ↓ Tap here ↓
              </div>
            </div>
          </Card>
        </div>
      ) : (
        <div className="animate-scale-in">
          <Card className="relative p-8 md:p-12 bg-gradient-to-br from-card via-secondary/50 to-card border-2 border-primary/30 shadow-2xl">
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40" />

            <div className="space-y-6 animate-fade-in">
              <div className="text-center pb-4 border-b border-primary/20">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  Dear Madhu,
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <Heart size={16} className="text-accent" fill="currentColor" />
                  <p className="text-sm text-muted-foreground italic">My Love, My Everything</p>
                  <Heart size={16} className="text-accent" fill="currentColor" />
                </div>
              </div>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="text-lg">
                  Happy Birthday to the most incredible person I know! Today is all about celebrating YOU and the beautiful soul that you are.
                </p>

                <p className="text-lg">
                  From the moment you came into my life, everything changed for the better. Your smile lights up my darkest days, your laughter is my favorite sound, and your presence makes every moment special. You have this amazing way of making the ordinary feel extraordinary.
                </p>

                <p className="text-lg">
                  I am so grateful for every memory we've created together - from our silly moments to our deep conversations, from our adventures to our quiet times together. Each photo we've taken, each laugh we've shared, each dream we've talked about - they all mean the world to me.
                </p>

                <p className="text-lg">
                  On this special day, I want you to know how much you mean to me. You inspire me to be better, you support me through everything, and you love me in ways I never knew were possible. You are my best friend, my partner, and my greatest blessing.
                </p>

                <p className="text-lg font-semibold text-primary">
                  Here's to you, Madhu - to your dreams, your happiness, and all the beautiful moments that lie ahead. May this year bring you everything your heart desires and more.
                </p>

                <div className="pt-6 border-t border-primary/20 text-center">
                  <p className="text-2xl font-bold text-foreground mb-2">
                    I love you more than words can say
                  </p>
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Heart fill="currentColor" size={20} />
                    <Heart fill="currentColor" size={24} />
                    <Heart fill="currentColor" size={20} />
                  </div>
                  <p className="text-lg text-muted-foreground italic mt-4">
                    Forever yours,
                  </p>
                  <p className="text-xl font-semibold text-foreground mt-2">
                    With all my love ❤️
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;
