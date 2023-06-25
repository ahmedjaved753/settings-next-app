import { type ReactElement } from "react";
import { cn } from "@/lib/utils";

type Level2HeadingPropsType = {
  text: string;
  className?: string;
};
function Level2Heading({
  text,
  className,
}: Level2HeadingPropsType): ReactElement {
  return <h3 className={cn("text-lg font-semibold", className)}>{text}</h3>;
}

export default Level2Heading;
