import { motion } from 'motion/react';
import { Shield, Sparkles, MapPin } from 'lucide-react';

const features = [
  {
    icon: <MapPin size={32} />,
    title: "Mobile Convenience",
    description: "We bring the luxury detailing studio to your home or office in Phoenix."
  },
  {
    icon: <Shield size={32} />,
    title: "Ceramic Protection",
    description: "High-ticket paint protection that preserves your vehicle's value and shine."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Precision Quality",
    description: "Meticulous attention to detail. We focus on quality, not volume."
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-8 p-6 border border-white/10 rounded-full group-hover:border-white/40 transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-light tracking-tight mb-4">{feature.title}</h3>
              <p className="text-white/50 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
