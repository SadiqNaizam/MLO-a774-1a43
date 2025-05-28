import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { UserPlus, X } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  members: string;
  coverImageUrl: string;
  memberAvatars?: string[];
}

const suggestedGroupsData: Group[] = [
  {
    id: 'group-1',
    name: 'Mad Men (MADdicts)',
    members: '6,195 members',
    coverImageUrl: 'https://picsum.photos/seed/madmen/300/100',
    memberAvatars: [
      'https://i.pravatar.cc/24?u=member1',
      'https://i.pravatar.cc/24?u=member2',
      'https://i.pravatar.cc/24?u=member3',
      'https://i.pravatar.cc/24?u=member4',
      'https://i.pravatar.cc/24?u=member5',
    ],
  },
  {
    id: 'group-2',
    name: 'Dexter Morgan Fans',
    members: '6,984 members',
    coverImageUrl: 'https://picsum.photos/seed/dexter/300/100',
    memberAvatars: [
      'https://i.pravatar.cc/24?u=member6',
      'https://i.pravatar.cc/24?u=member7',
      'https://i.pravatar.cc/24?u=member8',
    ],
  },
  {
    id: 'group-3',
    name: 'React Developers Community',
    members: '12,300 members',
    coverImageUrl: 'https://picsum.photos/seed/reactdev/300/100',
    memberAvatars: [
      'https://i.pravatar.cc/24?u=member9',
      'https://i.pravatar.cc/24?u=member10',
      'https://i.pravatar.cc/24?u=member11',
      'https://i.pravatar.cc/24?u=member12',
    ],
  },
];

const SuggestedGroupsSection: React.FC = () => {
  const [groups, setGroups] = React.useState(suggestedGroupsData);

  const handleDismissGroup = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className="bg-card text-card-foreground shadow-sm rounded-lg">
      <CardHeader className="pb-2 pt-4 px-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">Suggested Groups</CardTitle>
          <Button variant="link" size="sm" className="text-sm text-primary p-0 h-auto hover:underline">
            See All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 space-y-3">
        {groups.map((group) => (
          <div key={group.id} className="border border-border rounded-md overflow-hidden bg-background/30">
            <div className="relative">
                <img
                    src={group.coverImageUrl}
                    alt={`${group.name} cover`}
                    className="w-full h-[75px] object-cover"
                />
                {group.memberAvatars && group.memberAvatars.length > 0 && (
                    <div className="absolute bottom-2 left-2 flex -space-x-2">
                        {group.memberAvatars.slice(0, 5).map((avatarUrl, index) => (
                        <Avatar key={index} className="w-6 h-6 border-2 border-card">
                            <AvatarImage src={avatarUrl} alt={`Member ${index + 1}`} />
                            <AvatarFallback>{'M'}</AvatarFallback>
                        </Avatar>
                        ))}
                    </div>
                )}
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-1 right-1 h-6 w-6 bg-black/30 text-white hover:bg-black/50 hover:text-white rounded-full"
                    onClick={() => handleDismissGroup(group.id)}
                >
                    <X className="h-3 w-3" />
                </Button>
            </div>
            <div className="p-3">
              <h4 className="font-semibold text-sm text-card-foreground hover:underline cursor-pointer">
                {group.name}
              </h4>
              <p className="text-xs text-muted-foreground mb-2">{group.members}</p>
              <Button variant="outline" size="sm" className="w-full border-border hover:bg-muted/50">
                <UserPlus className="mr-2 h-4 w-4" /> Join
              </Button>
            </div>
          </div>
        ))}
        {groups.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">No group suggestions at the moment.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestedGroupsSection;
