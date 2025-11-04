import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingHeartProps {
  delay?: number;
}

const FloatingHeart = ({ delay = 0 }: FloatingHeartProps) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle({
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    });
  }, [delay]);

  return (
    <Heart
      className="absolute text-primary/20 animate-float"
      style={style}
      size={20 + Math.random() * 20}
      fill="currentColor"
    />
  );
};

export default FloatingHeart;
