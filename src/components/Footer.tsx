import { Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-tight text-white">
              BD<span className="text-emerald">.</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Meticulous Administrative Assistant and Virtual Support Specialist dedicated to optimizing operations and supporting your success.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-emerald transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="hover:text-emerald transition-colors text-sm">About</a></li>
              <li><a href="#services" className="hover:text-emerald transition-colors text-sm">Services</a></li>
              <li><a href="#experience" className="hover:text-emerald transition-colors text-sm">Experience</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Administrative Support</li>
              <li>Email Management</li>
              <li>Calendar Management</li>
              <li>Data Entry & Research</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Follow Me</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.link/4ptld2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
              {/* Replace "#" in hrefs above with actual social links later */}
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm text-center flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Babajide Daramola. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Akure, Ondo State, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
