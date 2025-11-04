import FlipCard from "./FlipCard";
import { reasons } from "@/data/reasons";

const ReasonsSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {reasons.map((reason, index) => (
          <FlipCard
            key={index}
            number={index + 1}
            reason={reason}
            delay={index * 0.02}
          />
        ))}
      </div>
    </div>
  );
};

export default ReasonsSection;
