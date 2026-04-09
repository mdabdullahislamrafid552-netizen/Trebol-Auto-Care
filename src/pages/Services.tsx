import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    name: "Basic Wash",
    price: "From $80",
    description: "A professional exterior refresh for your daily driver.",
    features: [
      "Hand Wash & Dry",
      "Wheel & Tire Cleaning",
      "Glass Cleaning",
      "Spray Wax Protection",
      "Door Jamb Wipe Down"
    ]
  },
  {
    name: "Full Detail",
    price: "From $250",
    description: "Complete interior and exterior rejuvenation.",
    popular: true,
    features: [
      "Everything in Basic",
      "Deep Interior Vacuum",
      "Steam Cleaning",
      "Leather Conditioning",
      "Clay Bar Treatment",
      "Iron Decontamination"
    ]
  },
  {
    name: "Ceramic Coating",
    price: "From $800",
    description: "The ultimate long-term protection and shine.",
    features: [
      "Full Paint Correction",
      "Multi-year Protection",
      "Extreme Hydrophobicity",
      "UV & Chemical Resistance",
      "Mirror-like Finish",
      "Wheel Coating Included"
    ]
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24">
          <span className="small-caps mb-4 block">Our Services</span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-tight">
            Precision <br />
            <span className="italic">Packages</span>
          </h1>
          <p className="max-w-xl text-white/50 font-light text-lg">
            Transparent pricing for uncompromising quality. We offer tiered packages designed to meet the specific needs of your vehicle.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-2xl border ${
                pkg.popular ? 'border-white bg-white/5' : 'border-white/10'
              } flex flex-col h-full`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full small-caps text-[10px] font-bold">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-light mb-2">{pkg.name}</h3>
                <span className="text-3xl font-light tracking-tighter">{pkg.price}</span>
              </div>
              <p className="text-white/50 font-light mb-8 text-sm leading-relaxed">
                {pkg.description}
              </p>
              <ul className="space-y-4 mb-12 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm font-light text-white/80">
                    <Check size={16} className="mt-0.5 flex-shrink-0 opacity-50" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <button className={`w-full py-4 rounded-full small-caps transition-all ${
                  pkg.popular ? 'bg-white text-black hover:bg-white/90' : 'border border-white/20 hover:bg-white/10'
                }`}>
                  Select Package
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 py-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="small-caps mb-6 block">The High-End Choice</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-8 leading-tight">
                Why Ceramic <br />
                <span className="italic">Coating?</span>
              </h2>
              <p className="text-white/60 font-light mb-6 leading-relaxed">
                Traditional waxes last weeks. Ceramic coatings last years. It's a liquid polymer that chemically bonds with your vehicle's factory paint, creating a layer of protection that is harder than the clear coat itself.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-white/80 font-light">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Permanent protection against UV rays and oxidation</span>
                </li>
                <li className="flex items-center space-x-3 text-white/80 font-light">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Self-cleaning properties (hydrophobic)</span>
                </li>
                <li className="flex items-center space-x-3 text-white/80 font-light">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Enhanced gloss and depth of color</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" 
                alt="Ceramic Coating Application" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
