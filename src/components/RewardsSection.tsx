import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift, Star, Zap } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Earn Stars",
    description: "Collect Stars with every purchase and redeem for free drinks",
  },
  {
    icon: Gift,
    title: "Birthday Reward",
    description: "Get a special treat on your birthday, on us",
  },
  {
    icon: Zap,
    title: "Quick Ordering",
    description: "Skip the line with mobile order and pay",
  },
];

const RewardsSection = () => {
  return (
    <section className="py-24 bg-gradient-hero text-primary-foreground" id="rewards">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Rewarded for Every Sip
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join Starbucks Rewards today and start earning free drinks, 
              exclusive offers, and special perks with every purchase.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8"
            >
              Join for Free
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 items-start bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl border border-primary-foreground/20"
                >
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-primary-foreground/80">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
