// app/page.tsx
import DesignThoughts from '../_components/custom/DesignThoughts';
import Contactus from "../_components/custom/Contactus"
export default function Home() {
  return (
    <main className="pb-16">
      <DesignThoughts />
      {/* Add more components here */}
      <Contactus />
    </main>
  );
}