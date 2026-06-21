import { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image?: string;
  responsibilities: string[];
  outcome: string;
};

const projects: Project[] = [
  {
    title: "Email & Calendar Management",
    description: "Streamlined executive communications and daily scheduling to optimize leadership productivity.",
    image: "/experience-1.jpeg",
    responsibilities: [
      "Inbox triage and prioritization of critical communications",
      "Drafting templates for routine inquiries",
      "Cross-timezone scheduling and meeting coordination"
    ],
    outcome: "Reduced unread emails by 80% and reclaimed 10+ hours per week for executive focus."
  },
  {
    title: "Data Entry & Documentation",
    description: "Organized scattered organizational data into structured, easy-to-navigate databases.",
    image: "/experience-2.jpeg",
    responsibilities: [
      "Inputting high-volume data into central CRM systems",
      "Formatting complex spreadsheets and verifying accuracy",
      "Creating Standard Operating Procedure (SOP) documents"
    ],
    outcome: "Achieved 99.9% data accuracy and reduced information retrieval time across the team."
  },
  {
    title: "Research & Report Preparation",
    description: "Conducted in-depth market and competitor research to support strategic initiatives.",
    image: "/experience-3.jpeg",
    responsibilities: [
      "Gathering market trends and competitive analysis data",
      "Synthesizing findings into clear, executive-summary presentations",
      "Summarizing meeting notes and actionable takeaways"
    ],
    outcome: "Delivered comprehensive briefing decks that guided quarterly strategic planning."
  },
  {
    title: "Customer/Client Support",
    description: "Served as the first point of contact for external inquiries, ensuring professional brand representation.",
    image: "/experience-1.jpeg", // Reusing image 1 for aesthetic symmetry 
    responsibilities: [
      "Handling client questions via email and helpdesk portals",
      "Resolving tier-1 support issues and escalating appropriately",
      "Following up on pending inquiries and maintaining relationships"
    ],
    outcome: "Maintained a 95%+ client satisfaction rating through prompt, professional, and empathetic communication."
  }
];

export default function Experience() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="experience" className="py-20 bg-soft-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Professional Experience</h2>
          <div className="w-20 h-1 bg-emerald mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            A showcase of my recent administrative work and operational projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-300 flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 md:h-64 overflow-hidden bg-gray-100">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No visual available
                  </div>
                )}
                <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/90 text-navy px-4 py-2 rounded-full font-medium flex items-center">
                    <ZoomIn className="w-4 h-4 mr-2" />
                    View Details
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-emerald transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20">
          <div 
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-navy p-2 rounded-full shadow-sm backdrop-blur-sm transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-grow flex flex-col">
              {selectedProject.image && (
                <div className="w-full h-48 sm:h-64 md:h-80 flex-shrink-0 bg-gray-100">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-8 text-lg">{selectedProject.description}</p>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {selectedProject.responsibilities.map((task, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-emerald mr-3 mt-1.5 min-w-[6px] h-1.5 rounded-full bg-emerald"></span>
                          <span className="text-gray-600 leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-emerald/5 p-6 rounded-xl border border-emerald/10">
                    <span className="font-semibold text-emerald text-sm uppercase tracking-wider block mb-2">Value Delivered:</span>
                    <span className="text-navy font-medium text-lg leading-relaxed">{selectedProject.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
