import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "rounded-full text-xs bg-zinc-700 text-white flex items-center justify-center font-medium py-[0.2rem] px-3 after:shadow-top after:absolute dark:after:inset-0 after:inset-[1px] after:rounded-full relative",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };