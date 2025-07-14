import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import doilyTablecloth from "@/assets/doily-tablecloth.jpg";

const TableCloths = () => {
  const tableclothProducts = [
    {
      id: 1,
      name: "Victorian Doily Set",
      price: "$249.99",
      originalPrice: "$299.99",
      image: doilyTablecloth,
      rating: 4.9,
      reviews: 12,
      description: "Exquisite Victorian-style doily collection with intricate patterns",
      isOnSale: true
    },
    {
      id: 2,
      name: "Round Table Runner",
      price: "$89.99",
      image: "/api/placeholder/400/400",
      rating: 4.7,
      reviews: 19,
      description: "Elegant round table runner perfect for special occasions"
    },
    {
      id: 3,
      name: "Lace Table Cloth",
      price: "$199.99",
      image: "/api/placeholder/400/400",
      rating: 4.8,
      reviews: 15,
      description: "Full-size lace table cloth with scalloped edges"
    },
    {
      id: 4,
      name: "Floral Placemats Set",
      price: "$69.99",
      image: "/api/placeholder/400/400",
      rating: 4.6,
      reviews: 28,
      description: "Set of 6 handmade placemats with delicate floral motifs"
    },
    {
      id: 5,
      name: "Vintage Table Topper",
      price: "$129.99",
      image: "/api/placeholder/400/400",
      rating: 4.8,
      reviews: 21,
      description: "Square table topper with vintage-inspired patterns"
    },
    {
      id: 6,
      name: "Holiday Table Set",
      price: "$179.99",
      image: "/api/placeholder/400/400",
      rating: 4.9,
      reviews: 9,
      description: "Special holiday-themed table linens set"
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
            <span className="text-foreground font-medium">Table Cloths</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Table Cloths Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elegant table linens and doilies that add sophistication to your dining experience
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tableclothProducts.map((product) => (
              <div key={product.id} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  {product.image.startsWith('/api') ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-hero">
                      <div className="text-center text-muted-foreground">
                        <Heart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm">Beautiful Table Linens</p>
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

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
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

export default TableCloths;