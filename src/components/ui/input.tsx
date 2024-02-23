import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "py-2 border rounded-md border-zinc-200 text-sm px-3 shadow-xs dark:bg-zinc-900 dark:border-zinc-800",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Badge";

export { Input };
