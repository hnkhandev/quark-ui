"use client";

import { ComponentShowcaseCard } from "./component-showcase-card";
import * as Ariakit from "@ariakit/react";

export function TooltipShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <div className="flex flex-col gap-1">
          <Ariakit.TooltipProvider>
            <Ariakit.TooltipAnchor className="text-sm cursor-default">
              Hover me
            </Ariakit.TooltipAnchor>
            <Ariakit.Tooltip
              unmountOnHide
              className="bg-black text-white py-1 px-2 text-xs rounded-lg data-[enter]:opacity-100 data-[enter]:translate-y-0 translate-y-2  origin-top opacity-0 transition-all dark:bg-zinc-900 dark:border-zinc-800 dark:border"
            >
              This is a tooltip
            </Ariakit.Tooltip>
          </Ariakit.TooltipProvider>
        </div>
      </ComponentShowcaseCard>
    </div>
  );
}
