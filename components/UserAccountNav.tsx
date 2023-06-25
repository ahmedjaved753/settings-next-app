import { type ReactElement } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { NavItemType } from "@/lib/types";

type UserAccountNavPropsType = {
  items: NavItemType[];
};

export default function UserAccountNav({
  items,
}: UserAccountNavPropsType): ReactElement {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        Levi Straus & Co.
        <ChevronDown className="inline" size="15" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuSeparator />
        {items.map(({ title, href }) => (
          // href would be unique in a real world scenario, so can be used as key
          <DropdownMenuItem key={href} asChild>
            <Link href="/dashboard">{title}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
