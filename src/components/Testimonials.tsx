import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    content: "OrderPilot transformed our order management completely. The real-time analytics helped us increase efficiency by 40% and our customer satisfaction is at an all-time high.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Manager, GrowthCo",
    content: "The dashboard is incredible. We can see everything at a glance - orders, customers, trends. It's like having a crystal ball for our business operations.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "Founder, StyleHub",
    content: "Before OrderPilot, we were drowning in spreadsheets. Now everything is automated and organized. We've saved 20 hours per week and reduced errors by 95%.",
    rating: 5,
    avatar: "EW"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent-soft/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loved by{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join over 10,000 businesses that trust OrderPilot to manage their orders 
            and grow their revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-8 shadow-card border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4" />
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-card-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center font-semibold text-accent-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 border border-accent/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your free trial today and see why businesses choose OrderPilot 
              for their order management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-glow">
                  Start Free Trial
                </button>
              </motion.div>
              <button className="text-accent hover:text-accent/80 px-8 py-4 font-semibold transition-colors">
                Schedule Demo →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;