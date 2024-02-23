"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (_e: MediaQueryListEvent) => {
      setTheme("system");
    };

    mediaQueryList.addEventListener("change", handleThemeChange);

    return () =>
      mediaQueryList.removeEventListener("change", handleThemeChange);
  }, []);

  if (!mounted) {
    return null;
  }

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
      {resolvedTheme === "light" && <MoonIcon className="w-4 h-4" />}
      {resolvedTheme === "dark" && <SunIcon className="w-4 h-4" />}
    </Button>
  );
}
