import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import frappuccinoImg from "@/assets/frappuccino-transparent.png";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="min-h-screen relative overflow-hidden bg-gradient-warm pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Enhanced background decoration with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent/20 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/25 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20"
            >
              <span className="text-primary font-semibold text-sm tracking-wide">✨ NEW THIS SEASON</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-[1.1] tracking-tight">
              Sip Into
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Something Fresh
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              Experience the perfect blend of rich coffee and creamy indulgence. 
              Our signature frappuccinos are crafted to perfection, just for you.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl">
                  Order Now
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2">
                  Learn More
                </Button>
              </motion.div>
            </div>

            <div className="flex gap-12 pt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  50M+
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Happy Customers</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  4.9★
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Average Rating</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content - Movable Frappuccino */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-2xl"
            >
              {/* Multi-layered glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-[80px]"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 bg-primary/20 rounded-full blur-[100px]"
              />

              <motion.img
                src={frappuccinoImg}
                alt="Delicious Frappuccino"
                className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-125"
                style={{
                  transform: "translateZ(50px)",
                  filter: "drop-shadow(0 0 30px rgba(0, 106, 78, 0.3))",
                }}
                whileHover={{ scale: 1.35 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* Enhanced floating elements */}
              <motion.div
                animate={{ y: [0, -30, 0], rotate: [0, 10, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 30, 0], rotate: [0, -10, 0], x: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 -right-20 w-20 h-20 bg-accent/10 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
