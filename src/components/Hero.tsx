import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users } from "lucide-react";
import dashboardImage from "@/assets/dashboard-mockup.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(195,200,255,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.1),transparent_70%)]" />
      
      <div className="relative container mx-auto px-4 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2  px-4 py-2 mb-6 "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={logo} alt="OrderPilot logo" className="w-28 h-28 object-contain" />
              <span className="text-sm font-medium text-primary-foreground">
                Real-time Order Management
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Master Your{" "}
              <span className="text-transparent bg-gradient-accent bg-clip-text">
                Orders
              </span>{" "}
              with OrderPilot
            </motion.h1>

            <motion.p 
              className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The complete order management platform that gives you real-time insights, 
              customer analytics, and seamless tracking - all in one beautiful dashboard.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto animate-glow-pulse"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="glass" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto text-primary-foreground"
                asChild
              >
                <a href="#demo">Watch Demo</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2K+</div>
                <div className="text-sm text-primary-foreground/70">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-primary-foreground/70">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">12M+</div>
                <div className="text-sm text-primary-foreground/70">Orders Tracked</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative bg-gradient-glass backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-glow">
              <img 
                src={dashboardImage} 
                alt="OrderPilot Dashboard Interface showing real-time order analytics and customer management"
                className="w-full rounded-xl shadow-elegant"
              />
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-lg px-3 py-2 shadow-card"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live</span>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-6 -left-6 bg-card rounded-lg p-3 shadow-card border"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">+24% Growth</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;