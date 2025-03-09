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
    <div className="mb-12 sm:mb-16 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">{company}</h3>
        <Link href="#" className="text-orange-500 hover:opacity-80 transition-opacity mt-2 sm:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform rotate-45"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
        </Link>
      </div>
      <p className="text-gray-400 text-sm sm:text-base mb-2">{title}</p>
      <p className="text-gray-400 text-sm sm:text-base mb-4">{period}</p>
      <p className="text-gray-300 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <div className="lg:ml-52">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-12 sm:mb-14 text-white">
        <span className="text-white">FULL STACK</span>
        <br />
        <span className="text-gray-700">EXPERIENCE</span>
      </h2>

      <div className="space-y-6 sm:space-y-8">
        <ExperienceItem
          company="National Incubation Center Kohat"
          title="Full Stack Developer"
          period="Jan 2021 - Present"
          description="Worked on multiple projects using Node.js, Express.js, MongoDB, and Next.js. Developed scalable applications, optimized performance, and led full-stack development initiatives."
        />

       <ExperienceItem
          company="Mobi Tech"
          title="Lead Developer - MeetHub Dashboard"
          period="Feb 2020 - Present"
          description="Designed and developed MeetHub, a business networking dashboard with real-time messaging, event management, and user analytics using Next.js, Node.js, and PostgreSQL."
        />

        <ExperienceItem
          company="KUST Incubation Center"
          title="Full Stack DevOps Engineer"
          period="Jul 2019 - Dec 2021"
          description="Deployed and managed multiple startup projects, ensuring high availability and scalability. Automated CI/CD pipelines and optimized cloud infrastructure for seamless deployments."
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
