import { motion } from "framer-motion";
import { Play } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Watch a Demo
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            See OrderPilot in action. Watch how easy it is to manage your orders, 
            track customers, and gain insights with our intuitive dashboard.
          </p>

          <motion.div 
            className="relative bg-gradient-glass backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-glow max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-video bg-card rounded-xl overflow-hidden">
              {/* Placeholder for video - replace with actual video */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <motion.div 
                  className="bg-accent text-accent-foreground rounded-full p-6 shadow-glow cursor-pointer hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-12 h-12 ml-1" fill="currentColor" />
                </motion.div>
              </div>
              
              {/* Replace this div with actual video embed when available */}
              {/* Example for YouTube embed:
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="OrderPilot Demo"
                className="w-full h-full"
                allowFullScreen
              />
              */}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                3 minute overview • No signup required
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;