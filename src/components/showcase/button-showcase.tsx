"use client";

import { Button } from "../ui/button";
import { PersonIcon } from "@radix-ui/react-icons";
import { ComponentShowcaseCard } from "@/components/showcase/component-showcase-card";

export function ButtonShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <div className="flex flex-wrap items-center justify-center flex-1 w-full gap-2">
          <Button>Primary</Button>
          <Button color="destructive">Destructive</Button>
          <Button color="warning">Warning</Button>
          <Button disabled>Disabled</Button>
        </div>
      </ComponentShowcaseCard>

      <ComponentShowcaseCard>
        <div className="flex flex-wrap items-center justify-center flex-1 w-full gap-2">
          <Button variant="flat">Primary</Button>
          <Button variant="flat" color="destructive">
            Destructive
          </Button>
          <Button variant="flat" color="warning">
            Warning
          </Button>
          <Button variant="flat" disabled>
            Disabled
          </Button>
        </div>
      </ComponentShowcaseCard>

      <ComponentShowcaseCard>
        <div className="flex flex-wrap items-center justify-center flex-1 w-full gap-2">
          <Button variant="outline">Primary</Button>
          <Button variant="outline" color="destructive">
            Destructive
          </Button>
          <Button variant="outline" color="warning">
            Warning
          </Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
        </div>
      </ComponentShowcaseCard>

      <ComponentShowcaseCard>
        <div className="flex flex-wrap items-center justify-center flex-1 w-full gap-2">
          <Button variant="ghost">Primary</Button>
          <Button variant="ghost" color="destructive">
            Destructive
          </Button>
          <Button variant="ghost" color="warning">
            Warning
          </Button>
          <Button variant="ghost" color="warning" disabled>
            Disabled
          </Button>
        </div>
      </ComponentShowcaseCard>

      <ComponentShowcaseCard>
        <div className="flex flex-wrap items-center justify-center flex-1 w-full gap-2">
          <Button variant="link">Primary</Button>
          <Button variant="link" color="destructive">
            Destructive
          </Button>
          <Button variant="link" color="warning">
            Warning
          </Button>
          <Button variant="link" color="warning" disabled>
            Disabled
          </Button>
        </div>
      </ComponentShowcaseCard>

      <ComponentShowcaseCard>
        <div className="flex flex-wrap items-center justify-center flex-1 w-full gap-4">
          <Button size="icon">
            <PersonIcon />
          </Button>
          <Button size="icon" variant="flat">
            <PersonIcon />
          </Button>
          <Button size="icon" variant="outline">
            <PersonIcon />
          </Button>
          <Button size="icon" variant="ghost">
            <PersonIcon />
          </Button>
        </div>
      </ComponentShowcaseCard>
    </div>
  );
}
