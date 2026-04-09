import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-8 group">
              <div className="flex items-center">
                <img 
                  src="https://i.imgur.com/nWG4Q9Y.png" 
                  alt="Trebol Auto Care Logo" 
                  className="h-24 w-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            <p className="text-white/40 font-light max-w-sm leading-relaxed">
              Delivering premium mobile detailing services focused on precision, protection, and high-end results across Phoenix, Arizona.
            </p>
          </div>

          <div>
            <span className="small-caps mb-8 block">Navigation</span>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors font-light">Services</Link></li>
              <li><Link to="/gallery" className="text-white/60 hover:text-white transition-colors font-light">Gallery</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors font-light">About</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors font-light">Contact</Link></li>
            </ul>
          </div>

          <div>
            <span className="small-caps mb-8 block">Connect</span>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-white/60">
                <Phone size={16} />
                <span className="font-light">(602) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Mail size={16} />
                <span className="font-light">hello@trebolautocare.com</span>
              </li>
              <li className="flex items-center space-x-6 pt-4">
                <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={20} /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <span className="small-caps opacity-30">© 2026 Trebol Auto Care. All rights reserved.</span>
          <span className="small-caps opacity-30">Phoenix, AZ • Mobile Detailing</span>
        </div>
      </div>
    </footer>
  );
}
