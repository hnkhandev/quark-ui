"use client";

import { ComponentShowcaseCard } from "./component-showcase-card";
import * as Ariakit from "@ariakit/react";

export function MenuShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <div className="flex flex-col gap-1">
          <Ariakit.MenuProvider>
            <Ariakit.MenuButton className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none gap-2 h-9 px-3 rounded-md text-primary hover:bg-zinc-100 dark:hover:bg-zinc-800">
              Actions
              <Ariakit.MenuButtonArrow />
            </Ariakit.MenuButton>
            <Ariakit.Menu
              gutter={8}
              className="dark:border-zinc-800 data-[enter]:opacity-100 data-[enter]:translate-y-0 -translate-y-2  origin-top opacity-0 transition-all w-[180px] text-sm border rounded-md p-1 bg-background border-zinc-200 shadow-xs dark:bg-zinc-900 dark:shadow-none flex flex-col gap-1"
            >
              <Ariakit.MenuItem className="py-2 px-2 flex items-center hover:bg-blue-500 hover:text-white rounded aria-disabled:text-disabled cursor-default">
                Account
              </Ariakit.MenuItem>
              <Ariakit.MenuItem className="py-2 px-2 flex items-center hover:bg-blue-500 hover:text-white rounded aria-disabled:text-disabled cursor-default">
                Settings
              </Ariakit.MenuItem>
              <Ariakit.MenuItem className="py-2 px-2 flex items-center hover:bg-blue-500 hover:text-white rounded aria-disabled:text-disabled cursor-default">
                Contact Us
              </Ariakit.MenuItem>
              <Ariakit.MenuItem
                className="py-2 px-2 flex items-center hover:bg-blue-500 hover:text-white rounded aria-disabled:text-disabled cursor-default"
                disabled
              >
                Pricing
              </Ariakit.MenuItem>
              <Ariakit.MenuSeparator className="border-zinc-100 dark:border-zinc-800" />
              <Ariakit.MenuItem className="py-2 px-2 flex items-center hover:bg-blue-500 hover:text-white rounded aria-disabled:text-disabled cursor-default">
                Sign out
              </Ariakit.MenuItem>
            </Ariakit.Menu>
          </Ariakit.MenuProvider>
        </div>
      </ComponentShowcaseCard>
    </div>
  );
}
