import { motion, useAnimation } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    content: "OrderPilot transformed our order management completely. The real-time analytics helped us increase efficiency by 40% and our customer satisfaction is at an all-time high.",
    rating: 5,
    avatar: "SC",
    company: "TechFlow"
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Manager, GrowthCo",
    content: "The dashboard is incredible. We can see everything at a glance - orders, customers, trends. It's like having a crystal ball for our business operations.",
    rating: 5,
    avatar: "MR",
    company: "GrowthCo"
  },
  {
    name: "Emily Watson",
    role: "Founder, StyleHub",
    content: "Before OrderPilot, we were drowning in spreadsheets. Now everything is automated and organized. We've saved 20 hours per week and reduced errors by 95%.",
    rating: 5,
    avatar: "EW",
    company: "StyleHub"
  },
  {
    name: "James Park",
    role: "Director of Operations, FastCommerce",
    content: "The real-time tracking feature is a game-changer. Our customers love being able to see exactly where their orders are, and we've reduced support tickets by 60%.",
    rating: 5,
    avatar: "JP",
    company: "FastCommerce"
  },
  {
    name: "Lisa Thompson",
    role: "Co-founder, ModernRetail",
    content: "OrderPilot's customer insights helped us identify our best customers and increase repeat purchases by 35%. The ROI was immediate and substantial.",
    rating: 5,
    avatar: "LT",
    company: "ModernRetail"
  },
  {
    name: "David Kim",
    role: "VP of Operations, ScaleUp",
    content: "We process over 1000 orders daily, and OrderPilot handles it effortlessly. The automated workflows have eliminated human errors and improved our fulfillment speed.",
    rating: 5,
    avatar: "DK",
    company: "ScaleUp"
  },
  {
    name: "Rachel Martinez",
    role: "Founder, EcoGoods",
    content: "The analytics dashboard gives us insights we never had before. We can predict trends, optimize inventory, and make data-driven decisions that drive growth.",
    rating: 5,
    avatar: "RM",
    company: "EcoGoods"
  },
  {
    name: "Tom Wilson",
    role: "Operations Director, QuickShip",
    content: "OrderPilot integrated seamlessly with our existing systems. The migration was smooth, and the team was productive from day one. Couldn't be happier!",
    rating: 5,
    avatar: "TW",
    company: "QuickShip"
  }
];

const Testimonials = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, -50],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-accent-soft/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Loved by{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              Thousands
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join over 10,000 businesses that trust OrderPilot to manage their orders 
            and grow their revenue.
          </motion.p>
        </motion.div>

        {/* First row - 3 columns */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-8 shadow-card border cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="absolute -top-4 left-8"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4" />
                </div>
              </motion.div>

              <div className="pt-4">
                <motion.div 
                  className="flex items-center gap-1 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p 
                  className="text-card-foreground leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.content}"
                </motion.p>

                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center font-semibold text-accent-foreground shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-accent font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scrolling testimonials row */}
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            className="flex gap-6"
            animate={controls}
            style={{ width: "200%" }}
          >
            {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-80 bg-card rounded-2xl p-6 shadow-card border"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-xs font-semibold text-accent-foreground">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom row - 2 columns centered */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.slice(6, 8).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative bg-card rounded-2xl p-8 shadow-card border cursor-pointer"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="absolute -top-4 left-8"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4" />
                </div>
              </motion.div>

              <div className="pt-4">
                <motion.div 
                  className="flex items-center gap-1 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.p 
                  className="text-card-foreground leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.content}"
                </motion.p>

                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center font-semibold text-accent-foreground shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-accent font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-8 border border-accent/20 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to Join Them?
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Start your free trial today and see why businesses choose OrderPilot 
              for their order management needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-glow"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.35)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                className="text-accent hover:text-accent/80 px-8 py-4 font-semibold transition-colors flex items-center justify-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Schedule Demo <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;