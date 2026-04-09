import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="small-caps mb-6 block">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-12 leading-tight">
              Book Your <br />
              <span className="italic">Transformation</span>
            </h1>
            <p className="text-white/50 font-light text-lg mb-12 max-w-md">
              Ready to elevate your vehicle's appearance? Fill out the form or reach out directly via phone or DM.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="small-caps opacity-40 block mb-1">Call or Text</span>
                  <span className="text-xl font-light">(602) 555-0123</span>
                </div>
              </div>
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="small-caps opacity-40 block mb-1">Email</span>
                  <span className="text-xl font-light">hello@trebolautocare.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="small-caps opacity-40 block mb-1">Location</span>
                  <span className="text-xl font-light">Phoenix, AZ • Mobile Service</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-brand-gray-dark p-8 md:p-12 rounded-2xl border border-white/5"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="small-caps opacity-60">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="small-caps opacity-60">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="(602) 000-0000"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors font-light"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="small-caps opacity-60">Vehicle Make & Model</label>
                <input 
                  type="text" 
                  placeholder="e.g. 2024 Porsche 911"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="small-caps opacity-60">Location in Phoenix</label>
                <input 
                  type="text" 
                  placeholder="e.g. Scottsdale, Paradise Valley"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors font-light"
                />
              </div>

              <div className="space-y-2">
                <label className="small-caps opacity-60">Service Interest</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-white outline-none transition-colors font-light appearance-none cursor-pointer">
                  <option className="bg-black">Select a service</option>
                  <option className="bg-black">Ceramic Coating</option>
                  <option className="bg-black">Full Detail</option>
                  <option className="bg-black">Basic Wash</option>
                  <option className="bg-black">Other / Custom</option>
                </select>
              </div>

              <div className="pt-8">
                <button className="w-full py-5 bg-white text-black rounded-full small-caps font-bold hover:bg-white/90 transition-all">
                  Request Quote
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
