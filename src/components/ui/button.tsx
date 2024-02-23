import * as React from "react";
import * as Ariakit from "@ariakit/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default:
          "text-primary-inverse dark:disabled:after:shadow-top after:shadow-top after:absolute dark:after:inset-0 after:inset-[1px] after:rounded-[0.37rem] relative disabled:bg-disabled disabled:text-white/80 hover:opacity-80",
        flat: "text-primary disabled:bg-disabled/20 disabled:text-disabled hover:opacity-80",
        outline: "border disabled:text-disabled disabled:border-disabled/20",
        ghost: "bg-transparent disabled:text-disabled",
        link: "underline-offset-4 hover:underline disabled:text-disabled",
      },
      size: {
        default: "h-8 px-3 rounded-md",
        sm: "h-7 rounded-md px-2 text-xs",
        lg: "h-9 rounded-md px-4 text-base",
        icon: "h-8 w-8 rounded-md",
      },
      color: {
        default: "bg-primary focus-visible:ring-primary/60",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/60",
        warning: "bg-warning focus-visible:ring-warning/60 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
    compoundVariants: [
      {
        variant: "default",
        color: "default",
        class: "dark:after:shadow-none dark:disabled:after:shadow-top",
      },
      {
        variant: "default",
        color: "destructive",
        class: "dark:bg-destructive/60",
      },
      {
        variant: "default",
        color: "warning",
        class: "dark:bg-warning/60",
      },
      {
        variant: "flat",
        color: "default",
        class: "bg-zinc-100 dark:bg-zinc-800 text-primary",
      },
      {
        variant: "flat",
        color: "destructive",
        class: "bg-destructive/10 dark:bg-destructive/15 text-destructive",
      },
      {
        variant: "flat",
        color: "warning",
        class: "bg-warning/10 dark:bg-warning/15 text-warning",
      },
      {
        variant: "outline",
        color: "default",
        class:
          "bg-transparent text-primary border-primary/40 hover:border-primary/90",
      },
      {
        variant: "outline",
        color: "destructive",
        class:
          "bg-transparent dark:bg-transparent text-destructive border-destructive/40 hover:border-destructive/90",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "bg-transparent text-warning border-warning/40 hover:border-warning/90",
      },
      {
        variant: "ghost",
        color: "default",
        class:
          "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-primary",
      },
      {
        variant: "ghost",
        color: "destructive",
        class:
          "bg-transparent hover:bg-destructive/10 text-destructive dark:hover:bg-destructive/15",
      },
      {
        variant: "ghost",
        color: "warning",
        class:
          "bg-transparent hover:bg-warning/10 text-warning dark:hover:bg-warning/20",
      },
      {
        variant: "link",
        color: "default",
        class: "bg-transparent text-primary",
      },
      {
        variant: "link",
        color: "destructive",
        class: "bg-transparent text-destructive",
      },
      {
        variant: "link",
        color: "warning",
        class: "bg-transparent text-warning",
      },
    ],
  }
);

export interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Ariakit.Button>, "color">,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<
  React.ElementRef<typeof Ariakit.Button>,
  ButtonProps
>(({ className, variant, size, color, ...props }, ref) => {
  return (
    <Ariakit.Button
      className={cn(buttonVariants({ variant, size, color, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
