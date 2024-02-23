import * as React from "react";
import * as Ariakit from "@ariakit/react";
import { cn } from "@/lib/utils";

const Select = React.forwardRef<
  React.ElementRef<typeof Ariakit.Select>,
  React.ComponentPropsWithoutRef<typeof Ariakit.Select>
>(({ className, ...props }, ref) => {
  return (
    <Ariakit.Select
      className={cn(
        "dark:bg-zinc-900 shadow-xs dark:shadow-none flex py-2 border rounded-md border-zinc-200 hover:border-zinc-300 text-sm justify-between px-3 items-center dark:border-zinc-800 dark:hover:border-zinc-700",
        className
      )}
      {...props}
    />
  );
});

Select.displayName = "Select";

const SelectPopover = React.forwardRef<
  React.ElementRef<typeof Ariakit.SelectPopover>,
  React.ComponentPropsWithoutRef<typeof Ariakit.SelectPopover>
>(({ className, ...props }, ref) => {
  return (
    <Ariakit.SelectPopover
      className={cn(
        "dark:border-zinc-800 data-[enter]:opacity-100 data-[enter]:translate-y-0 -translate-y-2  origin-top opacity-0 transition-all w-[180px] text-sm border rounded-md p-1 bg-background border-zinc-200 shadow-xs dark:bg-zinc-900 dark:shadow-none flex flex-col gap-1",
        className
      )}
      {...props}
    />
  );
});

SelectPopover.displayName = "SelectPopover";

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Ariakit.SelectItem>,
  React.ComponentPropsWithoutRef<typeof Ariakit.SelectItem>
>(({ className, ...props }, ref) => {
  return (
    <Ariakit.SelectItem
      className={cn(
        "py-2 px-2 flex items-center hover:bg-blue-500 hover:text-white rounded data-[active-item=true]:bg-blue-500 data-[active-item=true]:text-white",
        className
      )}
      {...props}
    />
  );
});

SelectItem.displayName = "SelectItem";

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof Ariakit.SelectLabel>,
  React.ComponentPropsWithoutRef<typeof Ariakit.SelectLabel>
>(({ className, ...props }, ref) => {
  return (
    <Ariakit.SelectLabel
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  );
});

SelectLabel.displayName = "SelectLabel";

export { Select, SelectPopover, SelectItem, SelectLabel };
