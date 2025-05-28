import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageSquare,
  Tv,
  Store,
  Users,
  CalendarDays,
  Flag,
  UserCog,
  HeartHandshake,
  ChevronDown,
  PlusSquare,
  Settings,
  ShieldQuestion,
  LogOut,
  MoreHorizontal
} from 'lucide-react';

interface NavItemProps {
  id: string;
  label: string;
  icon: React.ElementType;
  href?: string;
  isActive?: boolean;
  isSectionTitle?: boolean;
  actionIcon?: React.ElementType;
  count?: number;
}

const navItemsData: NavItemProps[] = [
  { id: 'user', label: 'Olenna Mason', icon: UserCog, href: '#profile' }, // Placeholder, actual user data would come from context/props
  { id: 'news-feed', label: 'News Feed', icon: Newspaper, href: '#news-feed', isActive: true, actionIcon: MoreHorizontal },
  { id: 'messenger', label: 'Messenger', icon: MessageSquare, href: '#messenger', count: 5 },
  { id: 'watch', label: 'Watch', icon: Tv, href: '#watch', count: 99 },
  { id: 'marketplace', label: 'Marketplace', icon: Store, href: '#marketplace' },
  { id: 'shortcuts', label: 'Shortcuts', isSectionTitle: true },
  { id: 'farmville2', label: 'FarmVille 2', icon: () => <img src="https://via.placeholder.com/20/FF0000/FFFFFF?Text=FV" alt="Farmville 2" className="w-5 h-5 rounded" />, href: '#farmville2' }, // Custom icon example
  { id: 'explore', label: 'Explore', isSectionTitle: true },
  { id: 'events', label: 'Events', icon: CalendarDays, href: '#events' },
  { id: 'pages', label: 'Pages', icon: Flag, href: '#pages', count: 3 },
  { id: 'groups', label: 'Groups', icon: Users, href: '#groups' },
  { id: 'friend-lists', label: 'Friend Lists', icon: UserCog, href: '#friend-lists' },
  { id: 'fundraisers', label: 'Fundraisers', icon: HeartHandshake, href: '#fundraisers' }, 
  { id: 'see-more', label: 'See More...', icon: ChevronDown, href: '#see-more' },
  { id: 'create', label: 'Create', isSectionTitle: true },
  { id: 'create-ad', label: 'Ad', icon: PlusSquare, href: '#create-ad' },
  { id: 'create-page', label: 'Page', icon: PlusSquare, href: '#create-page' },
  { id: 'create-group', label: 'Group', icon: PlusSquare, href: '#create-group' },
  { id: 'create-event', label: 'Event', icon: PlusSquare, href: '#create-event' },
  { id: 'create-fundraiser', label: 'Fundraiser', icon: PlusSquare, href: '#create-fundraiser' },
];

const SidebarNav: React.FC = () => {
  // First item (user) is handled separately
  const currentUserItem = navItemsData.find(item => item.id === 'user');
  const mainNavItems = navItemsData.filter(item => item.id !== 'user');

  return (
    <nav className="w-full h-full flex flex-col bg-sidebar text-sidebar-foreground p-2 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-sidebar-accent scrollbar-track-transparent">
      {currentUserItem && (
        <a
          href={currentUserItem.href}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-150 cursor-pointer mb-2"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://i.pravatar.cc/40?u=olenna" alt={currentUserItem.label} />
            <AvatarFallback>{currentUserItem.label.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm truncate">{currentUserItem.label}</span>
        </a>
      )}
      {mainNavItems.map((item) => {
        if (item.isSectionTitle) {
          return (
            <div key={item.id} className="pt-3 pb-1 px-2">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {item.label}
              </h3>
            </div>
          );
        }
        return (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'flex items-center justify-between space-x-3 p-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-150 cursor-pointer text-sm',
              item.isActive ? 'bg-sidebar-accent text-sidebar-primary font-semibold' : 'text-sidebar-foreground'
            )}
          >
            <div className="flex items-center space-x-3">
              <item.icon className={cn('h-5 w-5', item.isActive ? 'text-sidebar-primary' : 'text-sidebar-foreground/80')} />
              <span className="truncate">{item.label}</span>
              {item.count && (
                 <span className={cn(
                  'ml-auto text-xs font-medium px-1.5 py-0.5 rounded-full',
                  item.isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                 )}>
                  {item.count > 99 ? '99+' : item.count}
                 </span>
              )}
            </div>
            {item.actionIcon && <item.actionIcon className="h-4 w-4 text-sidebar-foreground/60 hover:text-sidebar-foreground" />}
          </a>
        );
      })}
      <Separator className="my-4 bg-sidebar-border" />
      <div className="px-2 space-y-1 text-sm">
        <a href="#privacy" className="text-muted-foreground hover:underline text-xs">Privacy</a> · 
        <a href="#terms" className="text-muted-foreground hover:underline text-xs"> Terms</a> · 
        <a href="#advertising" className="text-muted-foreground hover:underline text-xs"> Advertising</a> · 
        <a href="#ad-choices" className="text-muted-foreground hover:underline text-xs"> Ad Choices</a> · 
        <a href="#cookies" className="text-muted-foreground hover:underline text-xs"> Cookies</a> · 
        <span className="text-muted-foreground text-xs"> More</span> · 
        <span className="text-muted-foreground text-xs">Meta © 2024</span>
      </div>
    </nav>
  );
};

export default SidebarNav;
