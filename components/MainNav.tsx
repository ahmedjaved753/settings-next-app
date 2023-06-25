import { type ReactElement } from "react";
import Link from "next/link";
import { NavItemType } from "@/lib/types";

type MainNavPropsType = {
  items: NavItemType[];
};

export default function MainNav({ items }: MainNavPropsType): ReactElement {
  return (
    <div className="flex gap-6 gap-10">
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center text-sm font-medium transition-colors text-foreground hover:text-foreground/80"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
