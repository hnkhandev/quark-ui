"use client";

import { Cross1Icon, TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as Ariakit from "@ariakit/react";

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
      <Ariakit.Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="gap-4 sm:max-w-xs max-w-[14rem] w-full data-[enter]:translate-x-0 duration-300 -translate-x-full opacity-0 transition-all data-[enter]:opacity-100 fixed z-50 inset-y-0 left-0 m-auto flex flex-col border border-l-0 border-r-zinc-400 border-t-zinc-400 border-b-zinc-400 dark:bg-zinc-900 dark:border-t-zinc-800 dark:border-b-zinc-800 dark:border-r-zinc-800 bg-background p-5 rounded-tr-xl rounded-br-xl h-full shadow-xs"
        backdrop={
          <div className="bg-primary/30 dark:bg-black/70 opacity-0 transition-all data-[enter]:opacity-100" />
        }
      >
        <Ariakit.DialogHeading className="flex items-center justify-between font-medium">
          quarkui
          <Ariakit.DialogDismiss
            render={
              <Button variant="ghost" size="icon">
                <Cross1Icon />
              </Button>
            }
          />
        </Ariakit.DialogHeading>
        <Ariakit.DialogDescription className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-primary">Components</span>
          <div className="flex flex-col gap-1 pl-1 text-zinc-700 dark:text-zinc-400">
            <Ariakit.DialogDismiss
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
            <Ariakit.DialogDismiss
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
            <Ariakit.DialogDismiss
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
            <Ariakit.DialogDismiss
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
            <Ariakit.DialogDismiss
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
            <Ariakit.DialogDismiss
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
            <Ariakit.DialogDismiss
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
            <Ariakit.DialogDismiss
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
            <Ariakit.DialogDismiss
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
            <Ariakit.DialogDismiss
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
        </Ariakit.DialogDescription>
      </Ariakit.Dialog>
    </>
  );
}
