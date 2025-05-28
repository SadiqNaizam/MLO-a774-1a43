import React from 'react';
import { cn } from '@/lib/utils';
import PostCard, { PostData } from './PostCard'; // Assuming PostCard.tsx is in the same directory
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Image as ImageIcon, Video, UserTag, List } from 'lucide-react'; // Renamed Image to ImageIcon to avoid conflict with <img>

// Simplified PostInput structure directly within PostFeed
// In a real app, PostInput would likely be its own component
const PostInputPlaceholder: React.FC<{ user: { name: string; avatarUrl: string } }> = ({ user }) => {
  return (
    <Card className="bg-card text-card-foreground shadow-sm rounded-lg">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3 mb-3 pb-3 border-b border-border">
            <Button variant="ghost" className="font-medium flex-1 justify-start text-muted-foreground hover:bg-muted/50 h-auto py-2 px-3">
                <List className="mr-2 h-5 w-5 text-blue-500" /> Create Post
            </Button>
            {/* These could be tabs or similar, as shown in part of the image */}
            {/* <Button variant="ghost" className="font-medium flex-1 justify-start text-muted-foreground hover:bg-muted/50 h-auto py-2 px-3">
                <ImageIcon className="mr-2 h-5 w-5 text-green-500" /> Photo/Video Album
            </Button>
            <Button variant="ghost" className="font-medium flex-1 justify-start text-muted-foreground hover:bg-muted/50 h-auto py-2 px-3">
                <Video className="mr-2 h-5 w-5 text-red-500" /> Live Video
            </Button> */}
        </div>
        <div className="flex items-center space-x-3 mb-3">
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <Input
            placeholder={`What's on your mind, ${user.name.split(' ')[0]}?`}
            className="flex-grow h-10 bg-background border-none rounded-full hover:bg-muted/80 focus-visible:ring-1 focus-visible:ring-primary px-4"
          />
        </div>
        <div className="flex justify-around pt-2">
          <Button variant="ghost" className="text-muted-foreground hover:bg-muted/50 flex-1">
            <Video className="mr-2 h-5 w-5 text-red-500" /> Live video
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:bg-muted/50 flex-1">
            <ImageIcon className="mr-2 h-5 w-5 text-green-500" /> Photo/video
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:bg-muted/50 flex-1">
            <UserTag className="mr-2 h-5 w-5 text-blue-500" /> Tag friends
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const postsData: PostData[] = [
  {
    id: 'post-1',
    user: {
      name: 'Julia Fillory',
      avatarUrl: 'https://i.pravatar.cc/40?u=julia',
    },
    timestamp: '2 hrs',
    privacy: 'friends' as const,
    content: 'Checking out some new stores downtown!',
    location: {
      name: 'Raleigh, North Carolina',
      type: 'City - United States',
      context: 'Bryan Durand and 2 others have been here',
    },
    media: [
      {
        type: 'map' as const,
        url: 'https://maps.googleapis.com/maps/api/staticmap?center=Raleigh,NC&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7CRaleigh,NC&key=YOUR_API_KEY', // Placeholder for map image
      },
    ],
    likes: 125,
    comments: 12,
    shares: 5,
  },
  {
    id: 'post-2',
    user: {
      name: 'Alex Johnson',
      avatarUrl: 'https://i.pravatar.cc/40?u=alex',
    },
    timestamp: '5 hrs',
    privacy: 'public' as const,
    content: 'Beautiful sunset at the beach today! Highly recommend this spot. Who wants to join next time? #sunset #beachlife',
    media: [
      {
        type: 'image' as const,
        url: 'https://picsum.photos/seed/beachsunset/600/400',
      },
    ],
    likes: 302,
    comments: 45,
    shares: 18,
  },
  {
    id: 'post-3',
    user: {
      name: 'Tech Innovations Inc.',
      avatarUrl: 'https://i.pravatar.cc/40?u=techinc',
    },
    timestamp: '1 day ago',
    privacy: 'public' as const,
    content: 'Excited to announce our new product launch! Visit our website to learn more. #innovation #technology #newproduct',
    likes: 540,
    comments: 88,
    shares: 32,
  },
];

const PostFeed: React.FC = () => {
  const currentUser = { name: 'Olenna Mason', avatarUrl: 'https://i.pravatar.cc/40?u=olenna' };

  return (
    <div className={cn('w-full max-w-xl mx-auto space-y-6')}> 
      <PostInputPlaceholder user={currentUser} />
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
