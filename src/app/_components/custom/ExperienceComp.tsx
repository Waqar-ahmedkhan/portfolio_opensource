// app/components/custom/ExperienceSection.tsx
import React from 'react';
import Link from 'next/link';

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceProps> = ({ title, company, period, description }) => {
  return (
    <div className="mb-16 relative">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-2xl font-semibold text-white">{company}</h3>
        <Link href="#" className="text-orange-500 hover:opacity-80 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-45">
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </Link>
      </div>
      <p className="text-gray-400 mb-3">{title}</p>
      <p className="text-gray-400 mb-4">{period}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-8xl font-bold mb-14 text-white">
        <span className="text-white">12 YEARS OF</span>
        <br />
        <span className="text-gray-700">EXPERIENCE</span>
      </h2>
      
      <div className="space-y-4">
        <ExperienceItem 
          company="PixelForge Studios"
          title="Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement."
          period="Jan 2020 - Present"
          description="Responsible for developing cutting-edge user interfaces and experiences, collaborating with cross-functional teams, and implementing modern design solutions."
        />
        
        <ExperienceItem 
          company="BlueWave Innovators"
          title="Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers."
          period="Jun 2017 - Dec 2019"
          description="Designed comprehensive UI/UX solutions for product teams, created intuitive user flows, and helped establish design systems that improved product development efficiency."
        />
        
        <ExperienceItem 
          company="TrendCraft Solutions"
          title="Managed design projects for high-profile clients, created responsive web and mobile designs, and mentored junior designers."
          period="Mar 2015 - May 2017"
          description="Led design initiatives for enterprise clients, developed responsive web applications, and helped establish the company's design methodology."
        />
      </div>
    </div>
  );
};

export default ExperienceSection;