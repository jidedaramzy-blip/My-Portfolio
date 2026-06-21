import { CheckCircle2 } from 'lucide-react';

const skills = [
  'Microsoft Office Suite',
  'Google Workspace',
  'Email Management',
  'Scheduling & Coordination',
  'Deep Research',
  'Data Entry & Processing',
  'Customer Support',
  'Document Formatting',
  'Project Coordination',
  'Virtual Operations'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Core Skills</h2>
        <div className="w-20 h-1 bg-emerald mx-auto rounded-full mb-12"></div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-center space-x-2 bg-soft-bg px-6 py-3 rounded-full border border-gray-100 hover:border-emerald/30 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald" />
              <span className="font-medium text-navy">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
