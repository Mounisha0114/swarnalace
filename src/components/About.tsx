import { Heart, Award, Sparkles, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Handcrafted with Love",
      description: "Every piece is made with care and attention to detail by skilled artisans."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest yarns and materials to ensure lasting beauty."
    },
    {
      icon: Sparkles,
      title: "Unique Designs",
      description: "Original patterns and timeless designs that stand out from the crowd."
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "Traditional techniques passed down through generations of craftspeople."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            About Swarna & Co
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Founded with a passion for preserving the art of crochet, Swarna & Co represents 
            the perfect blend of traditional craftsmanship and contemporary design. Our journey 
            began with a simple belief: that handmade items carry a soul that machine-made 
            products simply cannot match.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each piece in our collection tells a story of dedication, skill, and love. From 
            the careful selection of premium yarns to the final finishing touches, we ensure 
            that every item meets our exacting standards of quality and beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;