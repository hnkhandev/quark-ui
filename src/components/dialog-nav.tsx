"use client";

import { Cross1Icon, TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogHeading,
  DialogDescription,
  DialogDismiss,
} from "./ui/dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function DialogNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="sm:hidden"
        onClick={() => setOpen(true)}
      >
        <TextAlignJustifyIcon className="w-4 h-4" />
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} className="gap-4">
        <DialogHeading className="flex items-center justify-between">
          Components
          <DialogDismiss
            render={
              <Button variant="ghost" size="icon">
                <Cross1Icon />
              </Button>
            }
          />
        </DialogHeading>
        <DialogDescription>
          <div className="flex flex-col gap-1 text-zinc-700 dark:text-zinc-400">
            <DialogDismiss
              render={
                <Link
                  href="/button"
                  className={cn(
                    "hover:underline",
                    pathname === "/button" && "font-semibold text-primary"
                  )}
                >
                  Button
                </Link>
              }
            />
            <DialogDismiss
              render={
                <Link
                  href="/checkbox"
                  className={cn(
                    "hover:underline",
                    pathname === "/checkbox" && "font-semibold text-primary"
                  )}
                >
                  Checkbox
                </Link>
              }
            />
            <DialogDismiss
              render={
                <Link
                  href="/radio"
                  className={cn(
                    "hover:underline",
                    pathname === "/radio" && "font-semibold text-primary"
                  )}
                >
                  Radio
                </Link>
              }
            />
            <DialogDismiss
              render={
                <Link
                  href="/select"
                  className={cn(
                    "hover:underline",
                    pathname === "/select" && "font-semibold text-primary"
                  )}
                >
                  Select
                </Link>
              }
            />
            <DialogDismiss
              render={
                <Link
                  href="/badge"
                  className={cn(
                    "hover:underline",
                    pathname === "/badge" && "font-semibold text-primary"
                  )}
                >
                  Badge
                </Link>
              }
            />
            <DialogDismiss
              render={
                <Link
                  href="/input"
                  className={cn(
                    "hover:underline",
                    pathname === "/input" && "font-semibold text-primary"
                  )}
                >
                  Input
                </Link>
              }
            />
            <DialogDismiss
              render={
                <Link
                  href="/dialog"
                  className={cn(
                    "hover:underline",
                    pathname === "/dialog" && "font-semibold text-primary"
                  )}
                >
                  Dialog
                </Link>
              }
            />
            <DialogDismiss
              render={
                <Link
                  href="/disclosure"
                  className={cn(
                    "hover:underline",
                    pathname === "/disclosure" && "font-semibold text-primary"
                  )}
                >
                  Disclosure
                </Link>
              }
            />
            <DialogDismiss
              render={
                <Link
                  href="/card"
                  className={cn(
                    "hover:underline",
                    pathname === "/card" && "font-semibold text-primary"
                  )}
                >
                  Card
                </Link>
              }
            />
            <DialogDismiss
              render={
                <Link
                  href="/textarea"
                  className={cn(
                    "hover:underline",
                    pathname === "/textarea" && "font-semibold text-primary"
                  )}
                >
                  Textarea
                </Link>
              }
            />
          </div>
        </DialogDescription>
      </Dialog>
    </>
  );
}
