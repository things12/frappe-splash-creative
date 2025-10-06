import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <Coffee className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold text-primary">Starbucks</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-foreground hover:text-primary transition-colors">
            Menu
          </a>
          <a href="#rewards" className="text-foreground hover:text-primary transition-colors">
            Rewards
          </a>
          <a href="#gift" className="text-foreground hover:text-primary transition-colors">
            Gift Cards
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex">
            Sign In
          </Button>
          <Button variant="default">
            Join Now
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
