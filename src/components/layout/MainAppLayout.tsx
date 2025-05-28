import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
  rightSidebarContent?: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  rightSidebarContent,
  className,
}) => {
  return (
    <div className={cn('relative min-h-screen bg-background', className)}>
      <Header />
      <Sidebar />
      <div className="flex pt-[70px] pl-[250px]"> {/* Container adjusting for fixed Header and Sidebar */}
        <main className="flex-1 p-6 min-w-0 overflow-y-auto">
          {/* 
            Main content area specific styling (e.g., flex flex-col, gap) 
            should be handled by the children components themselves or their immediate wrapper.
            Layout sizing: mainContent: "min-w-0 overflow-y-auto"
            Layout spacing: mainContent: "p-6"
          */}
          {children}
        </main>
        {rightSidebarContent && (
          <aside 
            className={cn(
              'w-[300px]', // Layout sizing: rightSidebar: "w-[300px]"
              'h-[calc(100vh-70px)]', // Full height below header
              'overflow-y-auto', // Scrollable content
              'sticky top-[70px] right-0', // Sticky positioning
              'border-l border-border', // Visual separation
              'bg-card', // Background color, as per theme (surface-like)
              'p-4' // Layout spacing: rightSidebar: "p-4"
            )}
          >
            {/* 
              Right sidebar internal layout (e.g., flex flex-col, gap-6) 
              should be handled by the rightSidebarContent itself.
            */}
            {rightSidebarContent}
          </aside>
        )}
      </div>
    </div>
  );
};

export default MainAppLayout;
