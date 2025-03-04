import React from "react";
import Skills from "../_components/custom/SkillTool";
import Contactus from "../_components/custom/Contactus";
export default function page() {
  return (
    <>
      <div className="flex justify-end">
        <Skills />
      </div>
      <Contactus />
    </>
  );
}
