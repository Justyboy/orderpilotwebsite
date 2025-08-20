import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DemoSection from "@/components/DemoSection";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <DemoSection />
      <Testimonials />
      <Pricing />
      <Footer />
    </motion.div>
  );
};

export default Index;
