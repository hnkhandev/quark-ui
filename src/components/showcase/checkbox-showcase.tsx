"use client";

import * as Ariakit from "@ariakit/react";
import { Checkbox } from "../ui/checkbox";
import { ComponentShowcaseCard } from "./component-showcase-card";

export function CheckboxShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <Ariakit.CheckboxProvider defaultValue={[]}>
          <Ariakit.Group className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 text-sm">
              <Checkbox value="option1" id="option1" />
              <label htmlFor="option1">Option 1</label>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Checkbox value="option2" id="option2" />
              <label htmlFor="option2">Option 2</label>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Checkbox value="option3" id="option3" />
              <label htmlFor="option3">Option 3</label>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Checkbox value="option4" id="option4" disabled />
              <label htmlFor="option4" className="text-disabled">
                Disabled
              </label>
            </div>
          </Ariakit.Group>
        </Ariakit.CheckboxProvider>
      </ComponentShowcaseCard>
    </div>
  );
}
