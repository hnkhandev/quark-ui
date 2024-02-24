"use client";

import { Textarea } from "../ui/textarea";
import { ComponentShowcaseCard } from "./component-showcase-card";

export function TextareaShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="textarea"
            className="text-sm font-medium text-primary"
          >
            Textarea
          </label>
          <Textarea id="textarea" />
        </div>
      </ComponentShowcaseCard>
    </div>
  );
}
