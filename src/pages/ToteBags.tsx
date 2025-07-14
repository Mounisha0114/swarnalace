import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import marketTote from "@/assets/market-tote.jpg";

const ToteBags = () => {
  const toteProducts = [
    {
      id: 1,
      name: "Classic Market Tote",
      price: "$79.99",
      originalPrice: "$99.99",
      image: marketTote,
      rating: 4.9,
      reviews: 42,
      description: "Sturdy handmade market tote perfect for shopping and daily use",
      isOnSale: true
    },
    {
      id: 2,
      name: "Beach Mesh Bag",
      price: "$59.99",
      image: "/api/placeholder/400/400",
      rating: 4.7,
      reviews: 35,
      description: "Lightweight mesh tote bag ideal for beach trips"
    },
    {
      id: 3,
      name: "Boho Fringe Bag",
      price: "$89.99",
      image: "/api/placeholder/400/400",
      rating: 4.8,
      reviews: 28,
      description: "Bohemian-style tote with decorative fringe details"
    },
    {
      id: 4,
      name: "Mini Tote Set",
      price: "$119.99",
      image: "/api/placeholder/400/400",
      rating: 4.6,
      reviews: 19,
      description: "Set of 3 mini tote bags in coordinating colors"
    },
    {
      id: 5,
      name: "Laptop Carrier Bag",
      price: "$109.99",
      image: "/api/placeholder/400/400",
      rating: 4.8,
      reviews: 24,
      description: "Professional tote bag with padded laptop compartment"
    },
    {
      id: 6,
      name: "Eco Shopping Bag",
      price: "$49.99",
      image: "/api/placeholder/400/400",
      rating: 4.9,
      reviews: 51,
      description: "Sustainable eco-friendly shopping bag in organic cotton"
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
            <span className="text-foreground font-medium">Tote Bags</span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Tote Bags Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stylish and sustainable handmade bags perfect for shopping, work, and everyday adventures
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toteProducts.map((product) => (
              <div key={product.id} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  {product.image.startsWith('/api') ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-hero">
                      <div className="text-center text-muted-foreground">
                        <Heart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm">Beautiful Tote Bags</p>
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

export default ToteBags;