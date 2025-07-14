import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import vintageRoseBlanket from "@/assets/vintage-rose-blanket.jpg";
import geometricThrow from "@/assets/geometric-throw.jpg";
import babyAfghan from "@/assets/baby-afghan.jpg";

const Bedding = () => {
  const beddingProducts = [
    {
      id: 1,
      name: "Vintage Rose Blanket",
      price: "$189.99",
      originalPrice: "$249.99",
      image: vintageRoseBlanket,
      rating: 4.8,
      reviews: 24,
      description: "Hand-crocheted vintage rose pattern blanket in soft cream yarn",
      isOnSale: true
    },
    {
      id: 2,
      name: "Geometric Throw",
      price: "$149.99",
      image: geometricThrow,
      rating: 4.9,
      reviews: 31,
      description: "Modern geometric pattern throw perfect for any living space"
    },
    {
      id: 3,
      name: "Baby Soft Afghan",
      price: "$129.99",
      image: babyAfghan,
      rating: 5.0,
      reviews: 18,
      description: "Ultra-soft baby yarn afghan with delicate shell pattern"
    },
    {
      id: 4,
      name: "Lace Edge Bedspread",
      price: "$299.99",
      image: "/api/placeholder/400/400",
      rating: 4.7,
      reviews: 12,
      description: "Elegant bedspread with intricate lace edging"
    },
    {
      id: 5,
      name: "Granny Square Quilt",
      price: "$219.99",
      image: "/api/placeholder/400/400",
      rating: 4.8,
      reviews: 29,
      description: "Classic granny square design in rainbow pastels"
    },
    {
      id: 6,
      name: "Cable Knit Throw",
      price: "$169.99",
      image: "/api/placeholder/400/400",
      rating: 4.6,
      reviews: 15,
      description: "Chunky cable knit throw in warm neutral tones"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 mb-8">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Bedding</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Bedding Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your bedroom with our luxurious hand-crocheted blankets, throws, and bedspreads
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beddingProducts.map((product) => (
              <div key={product.id} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.isOnSale && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Sale
                    </Badge>
                  )}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-4 right-4 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-golden-yarn fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>


                </div>
              </div>
            ))}
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link to="/">
              <Button variant="elegant" size="lg">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Collections
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bedding;