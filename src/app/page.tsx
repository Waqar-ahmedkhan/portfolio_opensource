// app/page.tsx
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
    <main className="overflow-x-hidden overflow-hidden">
      <div className="md:hidden mb-20">
          <SidebarProfile />
        </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Show SidebarProfile only on mobile (hidden on md and above) */}
        
        
        <div className="flex justify-end ">
          <ProfessionalStats />
        </div>
        
        <div className="flex justify-end py-16">
          <Projects />
        </div>
        
        <div className="flex justify-end py-16">
          <ExperienceSection />
        </div>
        
        <div className="flex justify-end py-8">
          <Skills />
        </div>
        
        <div className="flex justify-end py-16">
          <Thougths />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactUs />
      </div>
    </main>
  );
}