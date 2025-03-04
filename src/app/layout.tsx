// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/custom/Navbar';
import ProfileSidebar from '../app/_components/custom/SideBarProfile';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Waqar Ahmed | Software Engineer',
  description:
    'Portfolio website of Waqar Ahmed, a Software Engineer specializing in web design, development, and innovative technology solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} bg-black text-white min-h-screen antialiased`}>
        <Navbar />
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar container - fixed position on the left */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky ml-32 lg:top-12">
                <ProfileSidebar />
              </div>
            </div>
            
            {/* Main content area */}
            <div className="lg:col-span-6 xl:col-span-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

