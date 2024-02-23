import * as React from "react";
import * as Ariakit from "@ariakit/react";
import { cn } from "@/lib/utils";

export const Radio = React.forwardRef<
  React.ElementRef<typeof Ariakit.Radio>,
  React.ComponentPropsWithoutRef<typeof Ariakit.Radio>
>(({ className, ...props }, ref) => {
  return (
    <>
      <Ariakit.Radio
        className={cn(
          "group dark:aria-checked:bg-zinc-700 aria-checked:border-primary dark:aria-checked:border-zinc-700 hover:border-zinc-400 border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600 group border transition-[border] rounded-full flex items-center justify-center w-4 h-4 aria-checked:bg-primary bg-none aria-checked:after:shadow-top aria-checked:after:absolute aria-checked:dark:after:inset-0 dark:aria-checked:after:-inset-[1px] aria-checked:after:inset-0 aria-checked:after:rounded-full relative disabled:border-disabled/50 disabled:bg-disabled/15 dark:disabled:bg-disabled/10 dark:disabled:border-disabled/20",
          className
        )}
        render={<button />}
        {...props}
      >
        <div className="hidden w-1 h-1 bg-white rounded-full group-aria-checked:block" />
      </Ariakit.Radio>
      <Ariakit.VisuallyHidden>
        <Ariakit.Radio ref={ref} {...props} />
      </Ariakit.VisuallyHidden>
    </>
  );
});

Radio.displayName = "Radio";
