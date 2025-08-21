import { motion } from "framer-motion";
import { BarChart3, Users, Zap, Shield, Globe, Smartphone } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Get instant insights into your order performance, revenue trends, and customer behavior with live dashboards.",
    color: "text-accent"
  },
  {
    icon: Globe,
    title: "Online Order Management",
    description: "ake orders 24/7 directly from your website. Track every order in real-time, update statuses, and never miss a sale again.",
    color: "text-primary-light"
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Stay updated with real-time alerts for new orders, status changes, and important business events.",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "Customer Profiles & Loyalty",
    description: "Track repeat customers, their order history, and reward them with loyalty points. Build lasting relationships that drive repeat business.",
    color: "text-primary-light"
  },
  {
    icon: Users,
    title: "Mobile-Friendly Dashboard",
    description: "Manage orders and menus from anywhere—desktop, tablet, or phone. Your business runs smoothly, even on the go.",
    color: "text-accent"
  },
  {
    icon: Smartphone,
    title: "Staff Roles & Permissions",
    description: "Give team members limited access to the dashboard. Control who can view orders, update menus, or manage customer data.",
    color: "text-primary-light"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-transparent bg-gradient-accent bg-clip-text">
              Scale
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            OrderPilot provides all the tools you need to manage orders efficiently, 
            understand your customers, and grow your business with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-card border hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-glass backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;