import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Currently available for new administrative and virtual support opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-navy mb-6">Contact Information</h3>
            
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-soft-bg rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Email</h4>
                <a href="mailto:daramola_jide@yahoo.com" className="text-lg text-gray-600 hover:text-emerald transition-colors">
                  daramola_jide@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-soft-bg rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Phone</h4>
                <a href="tel:+2348035457937" className="text-lg text-gray-600 hover:text-emerald transition-colors">
                  +234 803 545 7937
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-soft-bg rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">Location</h4>
                <p className="text-lg text-gray-600">
                  Akure, Ondo State, Nigeria
                </p>
              </div>
            </div>
            
          </div>

          {/* Contact Form */}
          <div className="bg-soft-bg p-8 rounded-2xl shadow-sm border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submission goes here. Backend integration required."); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all"
                  placeholder="Inquiry regarding..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald focus:border-emerald outline-none transition-all resize-none"
                  placeholder="Hello Babajide, I would like to discuss..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-navy text-white rounded-lg font-medium shadow-md hover:bg-navy-hover transition-colors duration-200"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
              {/* Note: Connect form submission to a service like Formspree, EmailJS, or custom backend later */}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
