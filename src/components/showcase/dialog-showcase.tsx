"use client";

import { useState } from "react";
import { ComponentShowcaseCard } from "./component-showcase-card";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogDescription,
  DialogDismiss,
  DialogFooter,
  DialogHeading,
} from "../ui/dialog";

export function DialogShowcase() {
  const [openDialog1, setOpenDialog1] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);

  return (
    <div className="flex flex-col w-full gap-10">
      <ComponentShowcaseCard>
        <Button onClick={() => setOpenDialog1(true)}>Open Dialog</Button>
        <Dialog
          open={openDialog1}
          onClose={() => setOpenDialog1(false)}
          className="gap-4"
        >
          <DialogHeading>Confirm Action</DialogHeading>
          <DialogDescription>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              voluptatibus quo perferendis quis officia provident similique
              ratione natus beatae corporis?
            </p>
          </DialogDescription>
          <DialogFooter>
            <DialogDismiss
              className="button"
              render={<Button variant="ghost">Cancel</Button>}
            />
            <Button>Confirm</Button>
          </DialogFooter>
        </Dialog>
      </ComponentShowcaseCard>
      <ComponentShowcaseCard>
        <Button onClick={() => setOpenDialog2(true)}>Open Dialog</Button>
        <Dialog
          open={openDialog2}
          onClose={() => setOpenDialog2(false)}
          className="gap-4"
        >
          <DialogHeading className="flex items-center justify-between">
            Confirm Action
            <DialogDismiss
              className="button"
              render={
                <Button variant="ghost" size="icon">
                  <Cross1Icon />
                </Button>
              }
            />
          </DialogHeading>
          <DialogDescription>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              voluptatibus quo perferendis quis officia provident similique
              ratione natus beatae corporis?
            </p>
          </DialogDescription>
          <DialogFooter>
            <DialogDismiss
              className="button"
              render={<Button variant="ghost">Cancel</Button>}
            />
            <Button>Confirm</Button>
          </DialogFooter>
        </Dialog>
      </ComponentShowcaseCard>
    </div>
  );
}
