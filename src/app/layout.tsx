import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; 
import './globals.css';
import Navbar from './_components/custom/Navbar';
import ProfileSidebar from '../app/_components/custom/SideBarProfile';

// Configure Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700'], 
});

export const metadata: Metadata = {
  title: 'Waqar Ahmed | Computer Scientists',
  description:
    'Portfolio website of Waqar Ahmed, a computer scientists specializing in web design, development, and innovative technology solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-black text-white min-h-screen antialiased`}>
        <Navbar />
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="order-2 lg:order-1 lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:ml-32 lg:top-12">
                <ProfileSidebar />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}