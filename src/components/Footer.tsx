import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth-brown text-warm-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-golden-yarn" />
              <h3 className="text-2xl font-bold">Swarna & Co Crochet</h3>
            </div>
            <p className="text-warm-cream/80 leading-relaxed mb-6 max-w-md">
              Creating beautiful, handcrafted crochet pieces that bring warmth and 
              elegance to your home. Each item is made with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-golden-yarn/20 rounded-full flex items-center justify-center hover:bg-golden-yarn/30 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-golden-yarn/20 rounded-full flex items-center justify-center hover:bg-golden-yarn/30 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-golden-yarn/20 rounded-full flex items-center justify-center hover:bg-golden-yarn/30 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden-yarn">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-warm-cream/80 hover:text-warm-cream transition-colors">
                  About Store
                </a>
              </li>
              <li>
                <a href="/bedding" className="text-warm-cream/80 hover:text-warm-cream transition-colors">
                  Bedding
                </a>
              </li>
              <li>
                <a href="/garments" className="text-warm-cream/80 hover:text-warm-cream transition-colors">
                  Garments
                </a>
              </li>
              <li>
                <a href="/tablecloths" className="text-warm-cream/80 hover:text-warm-cream transition-colors">
                  Table Cloths
                </a>
              </li>
              <li>
                <a href="/pillowcases" className="text-warm-cream/80 hover:text-warm-cream transition-colors">
                  Pillow Cases
                </a>
              </li>
              <li>
                <a href="/totebags" className="text-warm-cream/80 hover:text-warm-cream transition-colors">
                  Tote Bags
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden-yarn">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-golden-yarn" />
                <span className="text-warm-cream/80">+91 9848159639</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-golden-yarn" />
                <span className="text-warm-cream/80">swarnalace@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-golden-yarn mt-1" />
                <span className="text-warm-cream/80">
                  Sitaramapuram, Narsapur Mandal<br />
                  W.G. Distt. Andhra Pradesh - 534280
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-golden-yarn/20 pt-8 text-center">
          <p className="text-warm-cream/60">
            © 2024 Swarna & Co Crochet. All rights reserved. Made with{" "}
            <Heart className="inline h-4 w-4 text-golden-yarn" /> by passionate artisans.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;