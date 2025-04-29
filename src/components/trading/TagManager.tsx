
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TradeTag } from '@/types/journalTypes';

interface TagManagerProps {
  title: string;
  tags: string[];
  newTagValue: string;
  setNewTagValue: (value: string) => void;
  handleAddTag: (e: React.KeyboardEvent, type: 'tag' | 'ict' | 'entry' | 'exit') => void;
  handleRemoveItem: (item: string, type: 'tag' | 'ict' | 'entry' | 'exit') => void;
  type: 'tag' | 'ict' | 'entry' | 'exit';
  variant?: "default" | "secondary" | "outline";
  className?: string;
  placeholder?: string;
}

const TagManager: React.FC<TagManagerProps> = ({
  title,
  tags,
  newTagValue,
  setNewTagValue,
  handleAddTag,
  handleRemoveItem,
  type,
  variant = "secondary",
  className = "",
  placeholder = "Add tag and press Enter"
}) => {
  const getBgClass = () => {
    if (type === 'ict') return "bg-[hsl(var(--ict-concept))]";
    return "";
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label>{title}</Label>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag) => (
          <Badge 
            key={tag} 
            variant={variant} 
            className={`cursor-pointer ${getBgClass()}`} 
            onClick={() => handleRemoveItem(tag, type)}
          >
            {tag} ×
          </Badge>
        ))}
      </div>
      <Input
        value={newTagValue}
        onChange={(e) => setNewTagValue(e.target.value)}
        onKeyDown={(e) => handleAddTag(e, type)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TagManager;
