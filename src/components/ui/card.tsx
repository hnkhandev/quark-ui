import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-zinc-300 shadow-xs p-6 dark:bg-zinc-900 dark:border-zinc-800 flex flex-col gap-4",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return <h1 className={cn("font-medium", className)} ref={ref} {...props} />;
});

CardHeader.displayName = "CardHeading";

const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("text-sm text-zinc-700 dark:text-zinc-400", className)}
      ref={ref}
      {...props}
    />
  );
});

CardBody.displayName = "CardBody";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn("flex items-center", className)} ref={ref} {...props} />
  );
});

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardBody, CardFooter };
