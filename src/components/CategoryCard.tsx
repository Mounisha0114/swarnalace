import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const CategoryCard = ({ title, description, image, href }: CategoryCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image Container */}
      <Link to={href} className="relative h-64 overflow-hidden block">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <Link to={href}>
          <Button 
            variant="ghost" 
            className="group/btn text-primary hover:text-primary-glow p-0 h-auto font-semibold"
          >
            Explore {title}
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-300" />
    </div>
  );
};

export default CategoryCard;