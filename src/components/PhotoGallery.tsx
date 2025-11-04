import { Card } from "@/components/ui/card";
import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";
import photo5 from "@/assets/photo5.jpeg";
import photo6 from "@/assets/photo6.jpeg";
import photo7 from "@/assets/photo7.jpeg";
import photo8 from "@/assets/photo8.jpeg";
import photo9 from "@/assets/photo9.jpeg";
import photo10 from "@/assets/photo10.jpeg";
import photo11 from "@/assets/photo11.jpeg";
import photo12 from "@/assets/photo12.jpeg";
const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12];

const PhotoGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
      {photos.map((photo, index) => (
        <Card
          key={index}
          className="overflow-hidden group cursor-pointer animate-fade-in border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PhotoGallery;
