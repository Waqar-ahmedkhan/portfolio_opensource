import React from "react";
import ProfessionalStats from "./_components/custom/ProfessionalStatus";
import Projects from "./_components/custom/Projects";
import ExperienceSection from "./_components/custom/ExperienceComp";
import Skills from "./_components/custom/SkillTool";
import Thougths from "./_components/custom/DesignThoughts";
import ContactUs from "./_components/custom/Contactus";
import SidebarProfile from "./_components/custom/SideBarProfile";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="md:hidden mb-8">
        <SidebarProfile />
      </div>
      <div className="w-full max-w-8xl mx-auto px-0 sm:px-4 lg:px-8">
        {/* Show SidebarProfile only on mobile (hidden on md and above) */}
        
        <div className="flex justify-center sm:justify-end py-8">
          <ProfessionalStats />
        </div>
        
        <div className="flex justify-center sm:justify-end py-8">
          <Projects />
        </div>
        
        <div className="flex justify-center sm:justify-end py-8">
          <ExperienceSection />
        </div>
        
        <div className="flex justify-center sm:justify-end py-8">
          <Skills />
        </div>
        
        <div className="flex justify-center sm:justify-end py-8">
          <Thougths />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-0 sm:px-4 lg:px-8 py-8">
        <ContactUs />
      </div>
    </main>
  );
}