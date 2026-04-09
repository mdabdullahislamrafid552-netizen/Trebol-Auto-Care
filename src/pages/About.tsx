import { motion } from 'motion/react';

export default function About() {
  return (
    <main className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="small-caps mb-6 block">About Trebol</span>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-12 leading-tight">
              Precision. <br />
              Protection. <br />
              <span className="italic">Perfection.</span>
            </h1>
            <p className="text-xl font-light text-white/80 leading-relaxed mb-8">
              Trebol Auto Care delivers premium mobile detailing services focused on precision, protection, and high-end results.
            </p>
            <p className="text-white/50 font-light leading-relaxed mb-12">
              Based in Phoenix, Arizona, we recognized a gap in the market for truly high-end mobile care. We don't just wash cars; we preserve automotive art. Our mobile studio is equipped with the same professional-grade tools and lighting found in the world's top detailing shops, allowing us to deliver showroom results at your doorstep.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <span className="text-4xl font-light block mb-2">100%</span>
                <span className="small-caps opacity-50">Mobile Service</span>
              </div>
              <div>
                <span className="text-4xl font-light block mb-2">500+</span>
                <span className="small-caps opacity-50">Vehicles Perfected</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://instagram.fdac2-1.fna.fbcdn.net/v/t51.71878-15/474076522_604596022171969_8171524912725217082_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzU0OTc3NTE1NTY4NzEyNjQzNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=XeUTQg0IUGUQ7kNvwEv68ep&_nc_oc=Adr3em-tnAEuE68nZP98o3YoDY1z399IMHvO1rrt_XVeVdzZ5YpaH7s8Nw1syXrLkug&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=niVKXN0k6PnFQfT63Xga-g&_nc_ss=7a32e&oh=00_Af3b-8zeioKMtpgvXCcbImcROENKntvhi1DShctp4islDA&oe=69DD82ED" 
              alt="Detailing Specialist" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
