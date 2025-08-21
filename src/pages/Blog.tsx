import { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logowhite.png";
import dashboardImage from "@/assets/dashboard-mockup.jpg";
import heroAlt from "@/assets/orderpilotdark.png";
import img1 from "@/assets/1 (1).jpg";
import img2 from "@/assets/1 (2).jpg";
import img3 from "@/assets/1 (3).jpg";

const Blog = () => {
  // Basic SEO for SPA: set title and meta description
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Real-time Order Management for Long Island, NY Businesses | OrderPilot Blog";

    const desc =
      "OrderPilot helps Long Island, NY businesses optimize real-time order tracking, analytics, and customer communication across Nassau and Suffolk Counties.";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", desc);

    // Optional: Open Graph tags for richer link previews
    const setOg = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setOg("og:title", "Real-time Order Management for Long Island, NY Businesses | OrderPilot Blog");
    setOg("og:description", desc);
    setOg("og:type", "article");
    setOg("og:image", "/logo.png");

    // Inject FAQPage structured data for SEO
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you support businesses across Long Island, NY?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. OrderPilot supports businesses across Nassau County and Suffolk County, including Hempstead, Garden City, Mineola, Huntington, Smithtown, Patchogue, Riverhead, and more."
          }
        },
        {
          "@type": "Question",
          "name": "Can OrderPilot handle high seasonal order volume for Long Island shops?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our real-time pipeline scales during peak seasons for restaurants, delis, bakeries, and retail shops along Long Island’s North and South Shores."
          }
        },
        {
          "@type": "Question",
          "name": "Does OrderPilot work with local delivery and pickup workflows?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Set delivery windows, pickup scheduling, and auto-notifications to streamline last‑mile logistics across Nassau and Suffolk Counties."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(faqScript);
    };
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Header / Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <img src={logo} alt="OrderPilot logo" className="w-24 h-24" />
          </div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How OrderPilot Transforms
            <span className="text-transparent bg-gradient-accent bg-clip-text"> Real-time Order Management</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From instant tracking to predictive analytics, here’s how modern teams use OrderPilot to
            streamline operations and delight customers.
          </motion.p>

          <motion.div
            className="mt-8 grid md:grid-cols-1 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={heroAlt}
              alt="OrderPilot brand showcase"
              className="w-full rounded-xl border border-gray-200 shadow-sm"
            />
       
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <article className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Real-time Matters</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Today’s customers expect transparency and speed. Real-time order visibility reduces customer
              support inquiries, accelerates fulfillment, and creates a tighter feedback loop across your
              teams.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              For Long Island businesses—whether you’re in bustling Nassau County or scenic Suffolk County—
              managing orders across dine-in, curbside pickup, local delivery, and eCommerce can get complex fast.
              OrderPilot centralizes updates so your team, drivers, and customers always know what’s next.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mt-12 text-gray-900">Key Benefits</h3>
            <ul className="list-disc pl-6 text-lg md:text-xl leading-relaxed text-gray-700">
              <li>Instant status updates across all channels</li>
              <li>Actionable analytics that guide daily decisions</li>
              <li>Automated alerts to prevent bottlenecks</li>
            </ul>

            <div className="my-10 rounded-2xl p-6 bg-gray-50 border border-gray-200">
              <p className="text-sm text-gray-700">
                “OrderPilot helped us cut our average response time by 42% and unlock patterns we simply
                couldn’t see before.” — Acme Deli
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold mt-12 text-gray-900">How OrderPilot Helps</h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              With intelligent notifications, unified customer profiles, and rich analytics, OrderPilot
              becomes your operating hub for fulfillment. Teams save time, spot opportunities, and keep
              customers informed from purchase to delivery.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mt-12 text-gray-900">Built for Long Island, NY</h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              We work with restaurants, delis, bakeries, retail storefronts, and delivery-first brands across
              Long Island. From weekend beach crowds to weekday commuter rushes, your order flow changes by the
              hour. OrderPilot adapts with real-time dashboards, surge-aware notifications, and accurate ETAs.
            </p>
            <img
                src={img3}
                alt="Customer support dashboard and notifications"
                className="rounded-xl border border-gray-200 shadow-sm object-cover w-full h-56"
              />
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="rounded-xl border border-gray-200 p-5 bg-white">
                <h4 className="font-semibold text-gray-900 mb-2">Areas We Serve</h4>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Nassau County: Hempstead, Garden City, Mineola, Rockville Centre, Freeport, Long Beach
                  — Suffolk County: Huntington, Smithtown, Babylon, Islip, Patchogue, Riverhead, Southampton,
                  East Hampton, and more.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5 bg-white">
                <h4 className="font-semibold text-gray-900 mb-2">Industries</h4>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                  Restaurants & delis, coffee shops, bakeries, specialty grocers, local retailers,
                  florists, and service businesses coordinating appointments and on-site visits.
                </p>
              </div>
            </div>

            <div className=" my-10">
              <img
                src={img1}
                alt="Operations team reviewing real-time analytics"
                className="rounded-xl border border-gray-200 shadow-sm object-cover w-full h-56"
              />
            
           
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold mt-12 text-gray-900">Local Delivery & Pickup Logistics</h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Streamline last‑mile logistics across Long Island with order batching, route-friendly time
              windows, and proactive customer notifications. Reduce phone calls, shorten wait times, and
              keep your front-of-house moving during peak hours.
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold mt-12 text-gray-900">FAQs for Long Island Businesses</h3>
            <ul className="list-disc pl-6 text-lg md:text-xl leading-relaxed text-gray-700">
              <li><strong>Do you support seasonal spikes?</strong> Yes—summer and holiday traffic are
                common across the Island. OrderPilot scales automatically during demand surges.</li>
              <li><strong>Can customers get accurate ETAs?</strong> Absolutely. Send SMS/email updates with
                live status and pickup timing to reduce inbound calls.</li>
              <li><strong>Is onboarding fast?</strong> Most teams launch within days with our guided setup and
                templates for common Long Island workflows.</li>
            </ul>
            <img
                src={img2}
                alt="Order fulfillment process in action"
                className="rounded-xl border border-gray-200 shadow-sm object-cover w-full h-56"
              />
            <h3 className="text-2xl md:text-3xl font-semibold mt-12 text-gray-900">Get Started</h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Start your free trial and see how real-time order management can change the way your team
              operates. No credit card required.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Serving Nassau and Suffolk Counties, including Hempstead, Garden City, Mineola, Long Beach,
              Huntington, Smithtown, Babylon, Islip, Patchogue, Riverhead, and the Hamptons.
            </p>
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl p-6 bg-gray-50 border border-gray-200 flex items-start gap-4">
            <img src={logo} alt="OrderPilot" className="w-10 h-10" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Build a Real-time Workflow</h4>
              <p className="text-gray-700">Join thousands of teams who ship faster with OrderPilot.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
