import { Briefcase, Mail, Calendar, FileText, Search, Headset } from 'lucide-react';

const services = [
  {
    title: 'Administrative Support',
    description: 'Comprehensive general back-office support, document formatting, and ensuring daily operations run smoothly.',
    icon: <Briefcase className="w-8 h-8 text-emerald" />,
  },
  {
    title: 'Email Management',
    description: 'Inbox triage, drafting professional responses, organizing folders, and keeping communication channels clear.',
    icon: <Mail className="w-8 h-8 text-emerald" />,
  },
  {
    title: 'Calendar Management',
    description: 'Scheduling appointments, coordinating across time zones, and optimizing your daily itinerary.',
    icon: <Calendar className="w-8 h-8 text-emerald" />,
  },
  {
    title: 'Data Entry',
    description: 'Accurate data input, database maintenance, and organizing spreadsheets with a high degree of precision.',
    icon: <FileText className="w-8 h-8 text-emerald" />,
  },
  {
    title: 'Research',
    description: 'Gleaning insights, market research, and compiling detailed reports for informed decision-making.',
    icon: <Search className="w-8 h-8 text-emerald" />,
  },
  {
    title: 'Customer Support',
    description: 'Handling inquiries, providing professional client interactions, and maintaining high satisfaction rates.',
    icon: <Headset className="w-8 h-8 text-emerald" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-soft-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Services & Expertise</h2>
          <div className="w-20 h-1 bg-emerald mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Providing comprehensive virtual support tailored to the needs of modern businesses and organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-emerald/10 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
