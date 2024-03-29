"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LeftSideNav() {
  const pathname = usePathname();

  return (
    <div className="max-w-[160px] w-full p-4 text-sm gap-2 flex-col hidden sm:flex">
      <span className="font-semibold text-primary">Components</span>
      <div className="flex flex-col gap-1 pl-1 text-zinc-700 dark:text-zinc-400">
        <Link
          href="/button"
          className={cn(
            "hover:underline",
            pathname === "/button" && "font-semibold text-primary"
          )}
        >
          Button
        </Link>
        <Link
          href="/checkbox"
          className={cn(
            "hover:underline",
            pathname === "/checkbox" && "font-semibold text-primary"
          )}
        >
          Checkbox
        </Link>
        <Link
          href="/radio"
          className={cn(
            "hover:underline",
            pathname === "/radio" && "font-semibold text-primary"
          )}
        >
          Radio
        </Link>
        <Link
          href="/select"
          className={cn(
            "hover:underline",
            pathname === "/select" && "font-semibold text-primary"
          )}
        >
          Select
        </Link>
        <Link
          href="/badge"
          className={cn(
            "hover:underline",
            pathname === "/badge" && "font-semibold text-primary"
          )}
        >
          Badge
        </Link>
        <Link
          href="/input"
          className={cn(
            "hover:underline",
            pathname === "/input" && "font-semibold text-primary"
          )}
        >
          Input
        </Link>
        <Link
          href="/dialog"
          className={cn(
            "hover:underline",
            pathname === "/dialog" && "font-semibold text-primary"
          )}
        >
          Dialog
        </Link>
        <Link
          href="/disclosure"
          className={cn(
            "hover:underline",
            pathname === "/disclosure" && "font-semibold text-primary"
          )}
        >
          Disclosure
        </Link>
        <Link
          href="/card"
          className={cn(
            "hover:underline",
            pathname === "/card" && "font-semibold text-primary"
          )}
        >
          Card
        </Link>
        <Link
          href="/textarea"
          className={cn(
            "hover:underline",
            pathname === "/textarea" && "font-semibold text-primary"
          )}
        >
          Textarea
        </Link>
        <Link
          href="/tab"
          className={cn(
            "hover:underline",
            pathname === "/tab" && "font-semibold text-primary"
          )}
        >
          Tab
        </Link>
        <Link
          href="/menu"
          className={cn(
            "hover:underline",
            pathname === "/menu" && "font-semibold text-primary"
          )}
        >
          Menu
        </Link>
        <Link
          href="/switch"
          className={cn(
            "hover:underline",
            pathname === "/switch" && "font-semibold text-primary"
          )}
        >
          Switch
        </Link>
        <Link
          href="/tooltip"
          className={cn(
            "hover:underline",
            pathname === "/tooltip" && "font-semibold text-primary"
          )}
        >
          Tooltip
        </Link>
      </div>
    </div>
  );
}
