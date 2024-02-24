"use client";

import { ComponentShowcaseCard } from "./component-showcase-card";
import { Badge } from "../ui/badge";

export function BadgeShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <div className="flex flex-wrap gap-2">
          <Badge>Primary</Badge>
          <Badge className="bg-destructive">Destructive</Badge>
          <Badge className="bg-warning">Warning</Badge>
          <Badge className="bg-green-500">Green-500</Badge>
          <Badge className="bg-purple-500">Purple-500</Badge>
        </div>
      </ComponentShowcaseCard>
    </div>
  );
}
