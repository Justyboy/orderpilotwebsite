import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 99,
    description: "Perfect for small businesses",
    features: [
      "Custom Website + OrderPilot Dashboard",
      "Up to 2,000 orders/month",
      "Website hosting + domain setup",
      "Email support",
      "Secure database for orders & users",
      "Stripe integration"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: 149,
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Unlimited orders & users",
      "Advanced analytics & reports",
      "Priority support",
      "Automatic backups & monitoring",
      "Custom notifications"
      
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 249,
    description: "For large organizations with custom requirements",
    features: [
      
      "Custom analytics",
      "24/7 phone support",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom onboarding",
      "Quarterly strategy check-in"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent-soft/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple,{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial 
            with no credit card required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 shadow-card border transition-all duration-300 hover:shadow-glow hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-accent shadow-glow scale-105' 
                  : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "accent" : "outline"} 
                className="w-full h-12 text-base font-semibold"
              >
                Start Free Trial
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We're here to help.
          </p>
          <Button variant="ghost" className="text-accent hover:text-accent">
            Contact Us →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;