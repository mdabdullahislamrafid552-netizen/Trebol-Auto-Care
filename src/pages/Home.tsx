import { motion } from 'motion/react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import BeforeAfter from '../components/BeforeAfter';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      
      {/* Premium Positioning Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=2071&auto=format&fit=crop" 
                alt="Detailing Process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="small-caps mb-6 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-8 leading-tight">
                Quality Over <br />
                <span className="italic">Volume</span>
              </h2>
              <p className="text-white/60 font-light text-lg mb-10 leading-relaxed">
                We don't do "quick washes." We provide meticulous automotive restoration and protection. Every vehicle we touch receives our undivided attention and the highest grade products available.
              </p>
              <Link to="/about">
                <button className="px-8 py-4 border border-white/20 rounded-full small-caps hover:bg-white hover:text-black transition-all">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <BeforeAfter />

      {/* CTA Section */}
      <section className="py-48 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop" 
            alt="Abstract Car" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">
              Ready for the <br />
              <span className="italic">Trebol Standard?</span>
            </h2>
            <Link to="/contact">
              <button className="px-16 py-6 bg-white text-black rounded-full small-caps font-bold text-lg hover:bg-white/90 transition-all shadow-2xl">
                Get A Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
