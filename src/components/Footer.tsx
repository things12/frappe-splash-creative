import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-primary">Starbucks</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Inspiring and nurturing the human spirit – one person, 
              one cup and one neighborhood at a time.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">About Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Our Company</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Coffee</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Stories & News</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#rewards" className="hover:text-primary transition-colors">Rewards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Find a Store</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Starbucks Coffee Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
