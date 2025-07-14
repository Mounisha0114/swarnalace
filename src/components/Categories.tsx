import CategoryCard from "./CategoryCard";
import beddingImage from "@/assets/bedding-crochet.jpg";
import garmentsImage from "@/assets/garments-crochet.jpg";
import tableclothImage from "@/assets/tablecloth-crochet.jpg";
import pillowsImage from "@/assets/pillows-crochet.jpg";
import totebagsImage from "@/assets/totebags-crochet.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Bedding",
      description: "Luxurious hand-crocheted blankets, throws, and bedspreads that bring warmth and elegance to your bedroom.",
      image: beddingImage,
      href: "/bedding"
    },
    {
      title: "Garments",
      description: "Beautiful handmade cardigans, tops, and accessories crafted with intricate patterns and premium yarns.",
      image: garmentsImage,
      href: "/garments"
    },
    {
      title: "Table Cloths",
      description: "Elegant table linens and doilies that add a touch of sophistication to your dining experience.",
      image: tableclothImage,
      href: "/tablecloths"
    },
    {
      title: "Pillow Cases",
      description: "Decorative cushion covers and pillow cases with stunning patterns to enhance your home decor.",
      image: pillowsImage,
      href: "/pillowcases"
    },
    {
      title: "Tote Bags",
      description: "Stylish and sustainable handmade bags perfect for shopping, beach trips, or everyday use.",
      image: totebagsImage,
      href: "/totebags"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each piece in our collection is carefully handcrafted using traditional techniques 
            and the finest materials, ensuring both beauty and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;