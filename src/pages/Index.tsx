import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import PostFeed from '@/components/HomePage/PostFeed';
import StoriesSection from '@/components/HomePage/StoriesSection';
import SuggestedGroupsSection from '@/components/HomePage/SuggestedGroupsSection';

/**
 * Homepage component
 * 
 * This is the main page of the application, typically corresponding to `src/pages/Index.tsx`.
 * It utilizes `MainAppLayout` to structure the page with a header, left sidebar, main content area,
 * and a right sidebar.
 *
 * The main content area displays the `PostFeed`.
 * The right sidebar displays `StoriesSection` and `SuggestedGroupsSection`.
 * Data for these sections is self-contained within the respective components.
 */
const Homepage: React.FC = () => {
  // Content for the right sidebar
  // The layout requirements for rightSidebar specify "flex flex-col gap-6".
  // We use `space-y-6` which applies vertical spacing between direct children.
  const rightSidebarContent = (
    <div className="flex flex-col space-y-6">
      <StoriesSection />
      <SuggestedGroupsSection />
    </div>
  );

  return (
    <MainAppLayout rightSidebarContent={rightSidebarContent}>
      {/* Main content area children */}
      {/* PostFeed is the primary component for the main content area. */}
      {/* It handles its own internal layout, including max-width and centering. */}
      <PostFeed />
    </MainAppLayout>
  );
};

export default Homepage;
