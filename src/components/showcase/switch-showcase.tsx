"use client";

import * as Ariakit from "@ariakit/react";
import { ComponentShowcaseCard } from "./component-showcase-card";
import { cn } from "@/lib/utils";

export function SwitchShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <Ariakit.Checkbox
          className={cn(
            "group w-9 h-5 rounded-full bg-zinc-200 inline-flex items-center border-2 border-zinc-200 aria-checked:border-black justify-start transition-all aria-checked:bg-black dark:border-white dark:bg-white dark:aria-checked:bg-zinc-600 dark:aria-checked:border-zinc-600"
          )}
          render={<button />}
          role="switch"
        >
          <span className="w-4 h-4 bg-white rounded-full transition-all group-aria-checked:translate-x-4 dark:bg-black dark:group-aria-checked:bg-white" />
        </Ariakit.Checkbox>
      </ComponentShowcaseCard>
    </div>
  );
}
