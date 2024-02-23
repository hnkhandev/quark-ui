"use client";

import { Input } from "../ui/input";
import { ComponentShowcaseCard } from "./component-showcase-card";

export function InputShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <div className="flex flex-col gap-1">
          <label htmlFor="input" className="text-sm font-medium text-primary">
            Input
          </label>
          <Input />
        </div>
      </ComponentShowcaseCard>
    </div>
  );
}
