import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Plus, Archive, Settings } from 'lucide-react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Story {
  id: string;
  userName: string;
  userAvatarUrl: string;
  storyImageUrl: string;
}

const storiesData: Story[] = [
  {
    id: 'story-1',
    userName: 'Jane Doe',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=jane',
    storyImageUrl: 'https://picsum.photos/seed/story1/200/300',
  },
  {
    id: 'story-2',
    userName: 'John Smith',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=john',
    storyImageUrl: 'https://picsum.photos/seed/story2/200/300',
  },
  {
    id: 'story-3',
    userName: 'Alice Brown',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=alice',
    storyImageUrl: 'https://picsum.photos/seed/story3/200/300',
  },
  {
    id: 'story-4',
    userName: 'Bob Green',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=bob',
    storyImageUrl: 'https://picsum.photos/seed/story4/200/300',
  },
  {
    id: 'story-5',
    userName: 'Carol White',
    userAvatarUrl: 'https://i.pravatar.cc/40?u=carol',
    storyImageUrl: 'https://picsum.photos/seed/story5/200/300',
  },
];

const StoriesSection: React.FC = () => {
  return (
    <Card className="bg-card text-card-foreground shadow-sm rounded-lg">
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">Stories</CardTitle>
          <div className="space-x-1">
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-muted/50">
              <Archive className="mr-1 h-3 w-3" /> Archive
            </Button>
            <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-muted/50">
              <Settings className="mr-1 h-3 w-3" /> Settings
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-3 p-4">
            {/* Add to Your Story Card */}
            <div className="flex-shrink-0 w-[110px] h-[190px] rounded-lg overflow-hidden shadow-md border border-border bg-background hover:brightness-95 transition-all cursor-pointer relative group">
              <div className="h-3/5 bg-muted flex items-center justify-center">
                {/* Placeholder for user's potential profile picture or a generic image */}
              </div>
              <div className="h-2/5 bg-card flex flex-col items-center justify-end pb-2 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center border-4 border-card group-hover:scale-110 transition-transform">
                  <Plus className="w-5 h-5" />
                </div>
                <p className="text-xs font-medium text-center text-card-foreground pt-3">Add to Story</p>
              </div>
            </div>

            {/* Individual Stories */}
            {storiesData.map((story) => (
              <div
                key={story.id}
                className="flex-shrink-0 w-[110px] h-[190px] rounded-lg overflow-hidden shadow-md cursor-pointer relative group bg-muted-foreground/20"
              >
                <img
                  src={story.storyImageUrl}
                  alt={`Story by ${story.userName}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <Avatar className="absolute top-2 left-2 w-8 h-8 border-2 border-primary">
                  <AvatarImage src={story.userAvatarUrl} alt={story.userName} />
                  <AvatarFallback>{story.userName.substring(0, 1)}</AvatarFallback>
                </Avatar>
                <p className="absolute bottom-2 left-0 right-0 text-center text-xs font-medium text-white px-1 truncate">
                  {story.userName}
                </p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default StoriesSection;
