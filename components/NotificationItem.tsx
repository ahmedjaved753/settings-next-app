"use client";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

type NotificationItemPropsType = {
  notification: {
    heading: string;
    text: string;
    switchText: string;
    checked: boolean;
    id: string;
  };
  onCheckedChange: (id: string, checked: boolean) => void;
};

function NotificationItem({
  notification: { heading, text, switchText, id, checked },
  onCheckedChange,
}: NotificationItemPropsType) {
  return (
    <>
      <Separator className="my-4" />
      <div className="flex justify-between w-1/2">
        <div className="flex flex-col">
          <small className="text-sm font-medium leading-none">{heading}</small>
          <p className="text-sm text-muted-foreground mt-2">{text}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id={id}
            checked={checked}
            onCheckedChange={(checked) => onCheckedChange(id, checked)}
          />
          <Label htmlFor={id}>{switchText}</Label>
        </div>
      </div>
    </>
  );
}

export default NotificationItem;
