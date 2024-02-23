"use client";

import { Select, SelectItem, SelectLabel, SelectPopover } from "../ui/select";
import * as Ariakit from "@ariakit/react";
import { ComponentShowcaseCard } from "./component-showcase-card";

export function SelectShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <div className="flex flex-col gap-1">
          <Ariakit.SelectProvider defaultValue="Item 2">
            <SelectLabel className="text-sm font-medium">
              Select Item
            </SelectLabel>
            <Select className="w-[180px]" />
            <SelectPopover gutter={8} sameWidth portal unmountOnHide>
              <SelectItem value="Item 1" />
              <SelectItem value="Item 2" />
              <SelectItem value="Item 3" />
            </SelectPopover>
          </Ariakit.SelectProvider>
        </div>
      </ComponentShowcaseCard>
    </div>
  );
}
