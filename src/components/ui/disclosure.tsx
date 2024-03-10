import * as React from "react";
import * as Ariakit from "@ariakit/react";
import { cn } from "@/lib/utils";

const Disclosure = React.forwardRef<
  React.ElementRef<typeof Ariakit.Disclosure>,
  React.ComponentPropsWithoutRef<typeof Ariakit.Disclosure>
>(({ className, ...props }, ref) => {
  return (
    <Ariakit.Disclosure
      className={cn(
        "group text-sm font-medium flex justify-between items-center w-full",
        className
      )}
      {...props}
    />
  );
});

Disclosure.displayName = "Disclosure";

export interface DisclosureContentProps
  extends React.ComponentPropsWithoutRef<typeof Ariakit.DisclosureContent> {
  animated?: boolean;
}

const DisclosureContent = React.forwardRef<
  React.ElementRef<typeof Ariakit.DisclosureContent>,
  DisclosureContentProps
>(({ children, className, animated, ...props }, ref) => {
  const animatedClasses =
    "data-[enter]:opacity-100 opacity-0 transition-all data-[enter]:grid-rows-[1fr] grid-rows-[0fr] !grid duration-300";
  return (
    <Ariakit.DisclosureContent
      className={cn(
        "data-[open=true]:pt-0.5 text-sm text-zinc-700 dark:text-zinc-400",
        className,
        animated && animatedClasses
      )}
      {...props}
    >
      {animated ? (
        <AnimatedDisclosureContent>{children}</AnimatedDisclosureContent>
      ) : (
        children
      )}
    </Ariakit.DisclosureContent>
  );
});

DisclosureContent.displayName = "DisclosureContent";

const AnimatedDisclosureContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn("overflow-hidden", className)} ref={ref} {...props} />
  );
});

AnimatedDisclosureContent.displayName = "AnimatedDisclosureContent";

const DisclosureContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn(
        "rounded-md bg-zinc-100 p-3 dark:bg-zinc-900 dark:border-zinc-800 dark:border",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

DisclosureContainer.displayName = "DisclosureContainer";

const DisclosureProvider = Ariakit.DisclosureProvider;

export {
  Disclosure,
  DisclosureContent,
  AnimatedDisclosureContent,
  DisclosureContainer,
  DisclosureProvider,
};
