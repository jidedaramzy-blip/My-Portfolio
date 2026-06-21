import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-soft-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-emerald font-semibold tracking-wider uppercase text-sm md:text-base">
                Administrative Assistant & Virtual Support Specialist
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
                Babajide Daramola
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              I am a detail-oriented Administrative Assistant and Virtual Support Specialist skilled in operations coordination, research, scheduling, communication, and office support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white rounded-lg font-medium shadow-md hover:bg-navy-hover transition-colors duration-200"
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/Babajide-Daramola-Resume.pdf" 
                download="Babajide-Daramola-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy border border-gray-200 rounded-lg font-medium shadow-sm hover:border-emerald hover:text-emerald transition-colors duration-200"
              >
                Download Resume
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-white shadow-xl border-4 border-white">
              <img 
                src="https://i.ibb.co/5W1KC8wK/Daramola.jpg" 
                alt="Babajide Daramola" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
