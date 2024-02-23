import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between w-full h-20 max-w-5xl px-4 font-semibold tracking-tight text-primary">
      <div className="flex items-center gap-1">quarkui</div>
      <ThemeToggle />
    </header>
  );
}
