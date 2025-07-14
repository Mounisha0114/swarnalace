import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import geometricPillow from "@/assets/geometric-pillow.jpg";

const PillowCases = () => {
  const pillowProducts = [
    {
      id: 1,
      name: "Geometric Cushion Cover",
      price: "$49.99",
      originalPrice: "$69.99",
      image: geometricPillow,
      rating: 4.8,
      reviews: 34,
      description: "Modern geometric pattern cushion cover in cream and gold",
      isOnSale: true
    },
    {
      id: 2,
      name: "Floral Throw Pillow",
      price: "$39.99",
      image: "/api/placeholder/400/400",
      rating: 4.7,
      reviews: 28,
      description: "Delicate floral motif pillow perfect for any room"
    },
    {
      id: 3,
      name: "Boho Cushion Set",
      price: "$89.99",
      image: "/api/placeholder/400/400",
      rating: 4.9,
      reviews: 22,
      description: "Set of 3 bohemian-style cushion covers with tassels"
    },
    {
      id: 4,
      name: "Cable Knit Pillow",
      price: "$55.99",
      image: "/api/placeholder/400/400",
      rating: 4.6,
      reviews: 19,
      description: "Chunky cable knit pillow cover in neutral tones"
    },
    {
      id: 5,
      name: "Lace Accent Cushion",
      price: "$45.99",
      image: "/api/placeholder/400/400",
      rating: 4.8,
      reviews: 31,
      description: "Elegant lace-trimmed cushion cover for special occasions"
    },
    {
      id: 6,
      name: "Rainbow Granny Square",
      price: "$59.99",
      image: "/api/placeholder/400/400",
      rating: 4.9,
      reviews: 15,
      description: "Colorful granny square pillow cover in pastel rainbow"
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
            <span className="text-foreground font-medium">Pillow Cases</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Pillow Cases Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Decorative cushion covers and pillow cases with stunning patterns to enhance your home decor
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillowProducts.map((product) => (
              <div key={product.id} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  {product.image.startsWith('/api') ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-hero">
                      <div className="text-center text-muted-foreground">
                        <Heart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm">Beautiful Pillow Cases</p>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
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

export default PillowCases;