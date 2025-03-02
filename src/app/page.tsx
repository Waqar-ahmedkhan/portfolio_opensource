// app/page.tsx
import React from "react";
import ProfessionalStats from "./components/custom/ProfessionalStatus";
import Projects from "./components/custom/Projects";
import ExperienceSection from "./components/custom/ExperienceComp";

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
    </>
  );
}
