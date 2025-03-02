
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface SocialMediaCheckboxProps {
  id: string;
  platform: string;
  handle: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const SocialMediaCheckbox: React.FC<SocialMediaCheckboxProps> = ({
  id,
  platform,
  handle,
  checked,
  onChange
}) => {
  const checkboxId = `social-media-${id}`;
  
  return (
    <div className="flex items-start space-x-2 py-1.5 group">
      <Checkbox
        id={checkboxId}
        checked={checked}
        onCheckedChange={onChange}
        className="mt-1 data-[state=checked]:bg-scorpii-accent data-[state=checked]:border-scorpii-accent"
      />
      <div className="grid gap-1.5 leading-none">
        <Label
          htmlFor={checkboxId}
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 transition-colors duration-200",
            checked ? "text-scorpii-accent" : "text-foreground",
            "group-hover:text-scorpii-accent"
          )}
        >
          {platform}
        </Label>
        <p className="text-xs text-muted-foreground">
          {handle}
        </p>
      </div>
    </div>
  );
};

export default SocialMediaCheckbox;
