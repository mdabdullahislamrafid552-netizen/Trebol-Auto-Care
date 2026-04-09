import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://instagram.fdac2-1.fna.fbcdn.net/v/t51.75761-15/475910849_17908515081094378_2989988465304105715_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=104&ig_cache_key=MzU1OTY2OTkyMzIzODU4MjU1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5oZHIuQzMifQ%3D%3D&_nc_ohc=SiPdieIEOM4Q7kNvwEsifUj&_nc_oc=AdpAf21l1jvroDy1TzaXEpZ3htNYvilYwtuCd_aAwUVjgoMsV67OzWbUzV6NYqMrZl8&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=8l-RRJFnFJUGAM_mgEy3hw&_nc_ss=7a32e&oh=00_Af3_U_HFXI0J3LNWeH60QlXTsglMnIpJXGuP6tLBggq1Zg&oe=69DD7809" 
          alt="Luxury Black Car" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="small-caps mb-6 block">Phoenix, Arizona</span>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-8 leading-[0.9]">
            Luxury Mobile <br />
            <span className="italic font-extralight">Auto Detailing</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl font-light text-white/60 mb-12 tracking-tight">
            We come to you. Precision. Perfection. Protection. <br className="hidden md:block" />
            The ultimate care for your automotive investment.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-black rounded-full small-caps font-bold hover:bg-white/90 transition-all"
              >
                Book Your Service
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 border border-white/20 rounded-full small-caps hover:bg-white/10 transition-all"
              >
                View Packages
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="small-caps mb-2 opacity-40">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={20} className="opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
