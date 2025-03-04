// app/page.tsx
import ExperienceSection from "../_components/custom/ExperienceComp";
import Contactus from "../_components/custom/Contactus";

export default function Home() {
  return (
    <>
      <main className="flex justify-end">
        <ExperienceSection />
      </main>
      <Contactus />
    </>
  );
}
