import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  MoreHorizontal,
  Globe,
  Users,
  ThumbsUp,
  MessageSquare,
  Share2,
  MapPin,
  Bookmark
} from 'lucide-react';

interface PostUser {
  name: string;
  avatarUrl: string;
}

interface PostMedia {
  type: 'image' | 'map' | 'video';
  url: string;
}

interface PostLocation {
  name: string;
  type: string;
  context?: string;
}

export interface PostData {
  id: string;
  user: PostUser;
  timestamp: string;
  privacy?: 'public' | 'friends';
  content: string;
  media?: PostMedia[];
  location?: PostLocation;
  likes: number;
  comments: number;
  shares: number;
}

interface PostCardProps {
  post: PostData;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { user, timestamp, privacy, content, media, location, likes, comments, shares } = post;

  const PrivacyIcon = privacy === 'public' ? Globe : Users;

  return (
    <Card className="bg-card text-card-foreground shadow-sm rounded-lg overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
              <a href="#" className="font-semibold text-sm hover:underline">
                {user.name}
              </a>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <span>{timestamp}</span>
                {privacy && (
                  <>
                    <span>·</span>
                    <PrivacyIcon className="h-3 w-3" />
                  </>
                )}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted/50">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-2 pt-0">
        <p className="text-sm text-card-foreground whitespace-pre-wrap mb-3">
          {content}
        </p>
        {location && media && media.find(m => m.type === 'map') && (
            <p className="text-sm text-card-foreground font-semibold mb-1">
                {location.name}
            </p>
        )}
      </CardContent>

      {media && media.length > 0 && (
        <div className={cn('bg-muted/30', media.length > 1 ? 'grid grid-cols-2 gap-0.5' : '')}>
          {media.map((item, index) => (
            <div key={index} className="w-full aspect-video relative overflow-hidden">
              {item.type === 'image' || item.type === 'map' ? (
                <img src={item.url} alt={`Post media ${index + 1}`} className="w-full h-full object-cover" />
              ) : item.type === 'video' ? (
                <video src={item.url} controls className="w-full h-full object-cover"></video>
              ) : null}
            </div>
          ))}
        </div>
      )}

      {location && (
        <div className="px-4 py-3 border-t border-b border-border flex justify-between items-center">
            <div>
                {media && media.find(m => m.type !== 'map') && (
                    <p className="text-sm font-semibold text-card-foreground">{location.name}</p>
                )}
                <p className="text-xs text-muted-foreground">{location.type}</p>
                {location.context && <p className="text-xs text-muted-foreground">{location.context}</p>}
            </div>
            <Button variant="outline" size="sm" className="text-muted-foreground hover:bg-muted/50">
                <Bookmark className="mr-2 h-4 w-4" /> Save
            </Button>
        </div>
      )}

      <CardFooter className="p-2">
        <div className="flex justify-between items-center w-full text-xs text-muted-foreground px-2">
          <div>{likes > 0 ? `${likes} Likes` : ''}</div>
          <div className="space-x-2">
            <span>{comments > 0 ? `${comments} Comments` : ''}</span>
            <span>{shares > 0 ? `${shares} Shares` : ''}</span>
          </div>
        </div>
      </CardFooter>
      
      <Separator className="bg-border mx-4"/>

      <div className="flex justify-around p-1">
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-muted/50 hover:text-primary">
          <ThumbsUp className="mr-2 h-5 w-5" /> Like
        </Button>
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-muted/50 hover:text-primary">
          <MessageSquare className="mr-2 h-5 w-5" /> Comment
        </Button>
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-muted/50 hover:text-primary">
          <Share2 className="mr-2 h-5 w-5" /> Share
        </Button>
      </div>
    </Card>
  );
};

export default PostCard;
