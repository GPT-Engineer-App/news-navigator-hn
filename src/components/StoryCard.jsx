import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ExternalLink } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="flex-grow pt-4">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">{story.title}</h2>
        <div className="flex items-center text-sm text-gray-500">
          <ArrowUpCircle className="w-4 h-4 mr-1" />
          <span>{story.points} points</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => window.open(story.url, '_blank')}
        >
          Read More <ExternalLink className="w-3 h-3 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;