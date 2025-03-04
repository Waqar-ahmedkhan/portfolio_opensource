import React from "react";
import Projects from "../_components/custom/Projects";
import Contactus from "../_components/custom/Contactus";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-end">
        <Projects />
      </div>
      <Contactus />
    </>
  );
}