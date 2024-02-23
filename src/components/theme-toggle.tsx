"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (_e: MediaQueryListEvent) => {
      setTheme("system");
    };

    mediaQueryList.addEventListener("change", handleThemeChange);

    return () =>
      mediaQueryList.removeEventListener("change", handleThemeChange);
  }, []);

  return (
    <Button
      onClick={() => {
        if (resolvedTheme === "light") {
          setTheme("dark");
        } else if (resolvedTheme === "dark") {
          setTheme("light");
        }
      }}
      size="icon"
      variant="flat"
    >
      <MoonIcon className="block w-4 h-4 dark:hidden" />
      <SunIcon className="hidden w-4 h-4 dark:block" />
    </Button>
  );
}
