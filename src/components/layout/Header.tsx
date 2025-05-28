import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../HomePage/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // Dummy data for TopHeader props, taken from context component examples
  const userName = "Olenna Mason";
  const userAvatarUrl = "https://i.pravatar.cc/40?u=olenna";

  // TopHeader component from context is already a <header> element and handles its own fixed positioning and styling.
  // The className prop from HeaderProps is included as per the layout component template guidelines,
  // but it won't directly style the visual TopHeader unless TopHeader is modified to accept/use it,
  // or if this Header component were to wrap TopHeader in another element that takes the className.
  // For now, we render TopHeader directly as it's self-contained for its role.
  // If a wrapper is needed, it should be a non-header element like <div> to avoid nested <header> tags.
  // e.g. <div className={cn(className)}><TopHeader ... /></div>. But given TopHeader is fixed, this div's styling might be limited.
  // We will render TopHeader directly as it's the primary element for this section.
  if (className) {
    console.warn(
      'Header component received className, but TopHeader is self-styled. Consider wrapping TopHeader if specific styling for the Header layout component itself is needed.'
    );
  }

  return <TopHeader userName={userName} userAvatarUrl={userAvatarUrl} />;
};

export default Header;
