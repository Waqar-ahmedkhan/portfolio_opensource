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
        <span className="text-white">12 YEARS OF</span>
        <br />
        <span className="text-gray-700">EXPERIENCE</span>
      </h2>

      <div className="space-y-6 sm:space-y-8">
        <ExperienceItem
          company="TechWave Solutions"
          title="Led the development of a full-stack web application using React, Node.js, and MongoDB, integrating CI/CD pipelines with Jenkins for automated deployments."
          period="Jan 2020 - Present"
          description="Architected scalable web applications, optimized AWS cloud infrastructure, and automated deployment processes, reducing release cycles by 30%."
        />

        <ExperienceItem
          company="CloudNest Innovations"
          title="Designed and deployed a microservices architecture using Docker and Kubernetes, reducing deployment time by 40%."
          period="Jun 2017 - Dec 2019"
          description="Automated infrastructure provisioning with Terraform and Ansible, and implemented monitoring with Prometheus and Grafana for real-time system insights."
        />

        <ExperienceItem
          company="AIForge Labs"
          title="Developed and deployed machine learning models for predictive analytics using TensorFlow and PyTorch, integrated into production systems."
          period="Mar 2015 - May 2017"
          description="Collaborated with data scientists to productionize AI models, optimized performance, and ensured seamless integration with existing full-stack applications."
        />
      </div>
    </div>
  );
};

export default ExperienceSection;