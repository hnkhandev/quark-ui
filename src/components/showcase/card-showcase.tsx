"use client";

import { Button } from "../ui/button";
import { Card, CardHeader, CardBody, CardFooter } from "../ui/card";
import { ComponentShowcaseCard } from "./component-showcase-card";

export function CardShowcase() {
  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <Card className="max-w-sm">
          <CardHeader>Card Heading</CardHeader>
          <CardBody>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deserunt, esse.
            </p>
          </CardBody>
          <CardFooter className="justify-end">
            <Button>Confirm</Button>
          </CardFooter>
        </Card>
      </ComponentShowcaseCard>
    </div>
  );
}
