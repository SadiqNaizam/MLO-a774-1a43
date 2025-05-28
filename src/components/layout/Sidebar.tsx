import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../HomePage/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-40 h-screen w-[250px] bg-sidebar text-sidebar-foreground pt-[70px] flex flex-col',
        className
      )}
    >
      {/* SidebarNav handles its own internal scrolling, padding, and is h-full */}
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
