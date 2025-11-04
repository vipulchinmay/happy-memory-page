import { useState } from "react";
import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FlipCardProps {
  number: number;
  reason: string;
  delay?: number;
}

const FlipCard = ({ number, reason, delay = 0 }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 h-48 cursor-pointer animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <Card
          className={`absolute inset-0 backface-hidden bg-gradient-to-br from-primary to-accent border-2 border-primary/30 flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow ${
            isFlipped ? "pointer-events-none" : ""
          }`}
        >
          <Heart className="text-white w-10 h-10 animate-pulse" fill="white" />
          <span className="text-5xl font-bold text-white">{number}</span>
          <p className="text-sm text-white/90 font-medium">Click to reveal</p>
        </Card>

        {/* Back of card */}
        <Card
          className={`absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-secondary to-card border-2 border-primary/30 p-4 flex items-center justify-center shadow-lg ${
            !isFlipped ? "pointer-events-none" : ""
          }`}
        >
          <div className="text-center space-y-2">
            <Heart className="text-primary w-6 h-6 mx-auto" fill="currentColor" />
            <p className="text-sm md:text-base text-foreground font-medium leading-relaxed">
              {reason}
            </p>
            <p className="text-xs text-muted-foreground italic pt-2">
              Tap to flip back
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FlipCard;
