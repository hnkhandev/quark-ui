import * as React from "react";
import * as Ariakit from "@ariakit/react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/icons/check-icon";

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof Ariakit.Checkbox>,
  React.ComponentPropsWithoutRef<typeof Ariakit.Checkbox>
>(({ className, ...props }, ref) => {
  return (
    <>
      <Ariakit.Checkbox
        className={cn(
          "dark:aria-checked:bg-zinc-700 dark:aria-checked:border-zinc-700 hover:border-zinc-400 border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600 border aria-checked:border-primary  transition-[border] rounded flex items-center justify-center w-4 h-4 aria-checked:bg-primary bg-none aria-checked:after:shadow-top aria-checked:after:absolute aria-checked:dark:after:inset-0 dark:aria-checked:after:-inset-[1px] aria-checked:after:inset-0 aria-checked:after:rounded-[0.23rem] relative disabled:border-disabled/50 disabled:bg-disabled/15 dark:disabled:bg-disabled/10 dark:disabled:border-disabled/20",
          className
        )}
        render={<button />}
        {...props}
      >
        <Ariakit.CheckboxCheck className="flex items-center justify-center w-4 h-4">
          <CheckIcon className="w-3 h-3 text-white" />
        </Ariakit.CheckboxCheck>
      </Ariakit.Checkbox>

      <Ariakit.VisuallyHidden>
        <Ariakit.Checkbox ref={ref} {...props} />
      </Ariakit.VisuallyHidden>
    </>
  );
});

Checkbox.displayName = "Checkbox";
