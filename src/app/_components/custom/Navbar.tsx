"use client"

import React, { useState, useEffect, useMemo } from 'react';
import { Home, Folder, Briefcase, Settings, Edit } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  const [activeIcon, setActiveIcon] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  
  // Memoize the icons array to prevent it from being recreated on every render
  const icons = useMemo(() => [
    { id: 0, icon: <Home size={24} />, name: 'Home', path: '/' },
    { id: 1, icon: <Folder size={24} />, name: 'Projects', path: '/projects' },
    { id: 2, icon: <Briefcase size={24} />, name: 'Experience', path: '/experience' },
    { id: 3, icon: <Settings size={24} />, name: 'skills', path: '/skills' },
    { id: 4, icon: <Edit size={24} />, name: 'Thoughts', path: '/thoughts' }
  ], []);
  
  // Update active icon based on current path
  useEffect(() => {
    const currentIcon = icons.findIndex(icon => icon.path === pathname);
    if (currentIcon !== -1) {
      setActiveIcon(currentIcon);
    }
  }, [pathname, icons]);

  return (
    <nav className="pt-10 flex justify-center items-center w-full  h-16">
      <div className="flex items-center bg-stone-900 rounded-xl px-7 py-3 gap-9">
        {icons.map((item) => (
          <Link 
            href={item.path}
            key={item.id}
            onClick={() => setActiveIcon(item.id)}
          >
            <div
              className={`relative flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                activeIcon === item.id
                  ? 'text-indigo-400 scale-110'
                  : 'text-gray-400 hover:text-gray-200 hover:scale-105'
              }`}
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="flex items-center justify-center w-5 text-zinc-200 h-5 rounded-full transition-all duration-300 hover:bg-gray-700">
                {item.icon}
              </div>
              
              {/* Show name when hovered (regardless of active state) */}
              {hoveredIcon === item.id && (
                <div className="absolute -bottom-10 text-xs font-medium text-zinc-300 bg-stone-800 px-2 py-1 rounded-md transition-all duration-200 opacity-90">
                  {item.name}
                </div>
              )}
              
              {/* Show indicator dot when active */}
              {activeIcon === item.id && (
                <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-indigo-400" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;