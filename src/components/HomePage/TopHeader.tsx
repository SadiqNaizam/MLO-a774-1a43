import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Search,
  Users,
  MessageCircle,
  Bell,
  HelpCircle,
  ChevronDown,
  Settings,
  LogOut,
  Moon, Sun
} from 'lucide-react';

// For the Facebook logo, lucide-react does not have it.
// We'll use a simple 'F' or a placeholder.
const FacebookLogo = () => (
  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-2xl">
    F
  </div>
);

interface TopHeaderProps {
  userName: string;
  userAvatarUrl: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ userName, userAvatarUrl }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  // Dummy theme state for dark mode toggle example
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, this would toggle a class on the body or use a theme provider
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 h-[70px] bg-card border-b border-border shadow-sm">
      {/* Left Section: Logo and Search */} 
      <div className="flex items-center space-x-2">
        <FacebookLogo />
        <form onSubmit={handleSearchSubmit} className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-10 pr-4 py-2 h-10 w-[240px] rounded-full bg-background border-none focus-visible:ring-primary focus-visible:ring-2"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
      </div>

      {/* Middle Section: Main Navigation (Simplified for Facebook clone) */}
      <nav className="hidden md:flex items-center space-x-2">
        {/* These could be icons or text links. For Facebook, they are typically icons. */}
        {/* Example: Home, Watch, Marketplace, Groups - For simplicity, this is typically in sidebar now */}
        {/* Based on image, the 'Home' and 'Find Friends' are near user profile in header */}
      </nav>

      {/* Right Section: User Profile and Actions */} 
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 hover:bg-muted/50 hidden sm:flex">
            <Users className="h-5 w-5 text-foreground" />
            <span className="sr-only">Friend Requests</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 hover:bg-muted/50 relative">
          <MessageCircle className="h-5 w-5 text-foreground" />
          <Badge className="absolute -top-1 -right-1 p-0.5 h-4 min-w-[16px] text-xs justify-center bg-red-500 text-white">8</Badge>
          <span className="sr-only">Messages</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 hover:bg-muted/50 relative">
          <Bell className="h-5 w-5 text-foreground" />
          <Badge className="absolute -top-1 -right-1 p-0.5 h-4 min-w-[16px] text-xs justify-center bg-red-500 text-white">36</Badge>
          <span className="sr-only">Notifications</span>
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 hover:bg-muted/50">
              <ChevronDown className="h-5 w-5 text-foreground" />
              <span className="sr-only">Account Controls</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 mr-4 p-2 bg-card border-border shadow-lg rounded-lg">
            <div className="p-2 flex items-center space-x-3 border-b border-border mb-2">
                <Avatar className="h-12 w-12">
                    <AvatarImage src={userAvatarUrl} alt={userName} />
                    <AvatarFallback>{userName.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-sm text-card-foreground">{userName}</p>
                    <a href="#profile" className="text-xs text-primary hover:underline">See your profile</a>
                </div>
            </div>
            <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start px-2 py-1.5 text-sm text-card-foreground hover:bg-muted">
                    <Settings className="mr-2 h-4 w-4" /> Settings & Privacy
                </Button>
                <Button variant="ghost" className="w-full justify-start px-2 py-1.5 text-sm text-card-foreground hover:bg-muted">
                    <HelpCircle className="mr-2 h-4 w-4" /> Help & Support
                </Button>
                <Button variant="ghost" className="w-full justify-start px-2 py-1.5 text-sm text-card-foreground hover:bg-muted" onClick={toggleDarkMode}>
                    {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />} Display & Accessibility
                </Button>
                <Button variant="ghost" className="w-full justify-start px-2 py-1.5 text-sm text-card-foreground hover:bg-muted">
                    <LogOut className="mr-2 h-4 w-4" /> Log Out
                </Button>
            </div>
             <p className="text-xs text-muted-foreground p-2 mt-2 border-t border-border">
              Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2024
            </p>
          </PopoverContent>
        </Popover>

        {/* The image shows 'Olenna Home Find Friends' next to each other. User profile is now in popover. */}
        {/* Let's add simple navigation for Home / Find Friends */}
        <Button variant="ghost" className="font-semibold text-sm text-foreground hover:bg-muted/50 px-3 h-10 hidden lg:flex items-center space-x-2">
             <Avatar className="h-7 w-7 mr-1">
                <AvatarImage src={userAvatarUrl} alt={userName} />
                <AvatarFallback>{userName.substring(0,1)}</AvatarFallback>
            </Avatar>
            {userName.split(' ')[0]} {/* First name only */}
        </Button>
        <Button variant="ghost" className="font-semibold text-sm text-foreground hover:bg-muted/50 px-3 h-10 hidden lg:flex">Home</Button>
        <Button variant="ghost" className="font-semibold text-sm text-foreground hover:bg-muted/50 px-3 h-10 hidden lg:flex">Find Friends</Button>
      </div>
    </header>
  );
};

export default TopHeader;
