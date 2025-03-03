// app/page.tsx
import React from "react";
import ProfessionalStats from "./components/custom/ProfessionalStatus";
import Projects from "./components/custom/Projects";
import ExperienceSection from "./components/custom/ExperienceComp";
import Skills from "./components/custom/SkillTool";
import Thougths from "./components/custom/DesignThoughts";
import ContactUs from "./components/custom/Contactus";

export default function Home() {
  return (
    <>
      <div className="flex justify-end">
        <ProfessionalStats />
      </div> 
      <div className="flex justify-end py-16">
        <Projects />
      </div>
      <div className="flex justify-end py-16">
        <ExperienceSection/>
      </div>
      <div className="flex justify-end py-16">
        <Skills />
      </div>
      <div className="flex justify-end py-16">
        <Thougths />
      </div>
      <div className="flex justify-end py-16">
        <ContactUs />
      </div>
    </>
  );
}
