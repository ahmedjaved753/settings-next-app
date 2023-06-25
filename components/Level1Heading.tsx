import { type ReactElement } from "react";
import { cn } from "@/lib/utils";

type Level1HeadingPropsType = {
  text: string;
  className?: string;
};
function Level1Heading({
  text,
  className,
}: Level1HeadingPropsType): ReactElement {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-3xl font-extrabold tracking-tight",
        className
      )}
    >
      {text}
    </h3>
  );
}

export default Level1Heading;
