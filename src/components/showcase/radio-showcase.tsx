"use client";

import { Radio } from "../ui/radio";
import { ComponentShowcaseCard } from "./component-showcase-card";
import * as Ariakit from "@ariakit/react";

export function RadioShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <Ariakit.RadioProvider>
          <Ariakit.RadioGroup className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 text-sm">
              <Radio value="option1" id="option1" />
              <label htmlFor="option1">Option 1</label>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Radio value="option2" id="option2" />
              <label htmlFor="option2">Option 2</label>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Radio value="option3" id="option3" />
              <label htmlFor="option3">Option 3</label>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Radio value="option4" id="option4" disabled />
              <label htmlFor="option4" className="text-disabled">
                Disabled
              </label>
            </div>
          </Ariakit.RadioGroup>
        </Ariakit.RadioProvider>
      </ComponentShowcaseCard>
    </div>
  );
}
