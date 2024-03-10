import * as React from "react";
import * as Ariakit from "@ariakit/react";
import { cn } from "@/lib/utils";

const Dialog = React.forwardRef<
  React.ElementRef<typeof Ariakit.Dialog>,
  React.ComponentPropsWithoutRef<typeof Ariakit.Dialog>
>(({ className, ...props }, ref) => {
  return (
    <Ariakit.Dialog
      className={cn(
        "data-[enter]:translate-y-0 translate-y-2 opacity-0 transition-all data-[enter]:opacity-100 fixed z-50 inset-3 m-auto flex flex-col border border-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 bg-background h-fit p-5 max-w-md rounded-2xl shadow-xs",
        className
      )}
      backdrop={
        <div className="bg-primary/30 dark:bg-black/70 opacity-0 transition-all data-[enter]:opacity-100" />
      }
      {...props}
    ></Ariakit.Dialog>
  );
});

Dialog.displayName = "Dialog";

const DialogHeading = React.forwardRef<
  React.ElementRef<typeof Ariakit.DialogHeading>,
  React.ComponentPropsWithoutRef<typeof Ariakit.DialogHeading>
>(({ className, ...props }, ref) => {
  return (
    <Ariakit.DialogHeading
      className={cn("font-medium", className)}
      {...props}
    ></Ariakit.DialogHeading>
  );
});

DialogHeading.displayName = "DialogHeading";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Ariakit.DialogDescription>,
  React.ComponentPropsWithoutRef<typeof Ariakit.DialogDescription>
>(({ className, ...props }, ref) => {
  return (
    <Ariakit.DialogDescription
      className={cn("text-sm text-zinc-700 dark:text-zinc-400", className)}
      {...props}
    ></Ariakit.DialogDescription>
  );
});

DialogDescription.displayName = "DialogDescription";

export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("flex justify-end gap-4 mt-4", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

DialogFooter.displayName = "DialogFooter";

const DialogDismiss = Ariakit.DialogDismiss;

export {
  Dialog,
  DialogHeading,
  DialogDescription,
  DialogFooter,
  DialogDismiss,
};
