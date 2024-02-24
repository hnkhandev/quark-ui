import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { DialogNav } from "./dialog-nav";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between w-full h-20 max-w-5xl px-4 font-semibold tracking-tight text-primary">
      <div className="items-center hidden gap-1 sm:flex">quarkui</div>
      <DialogNav />
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          render={<a href="https://twitter.com/hnkhandev" target="_blank" />}
        >
          <TwitterIcon className="w-4 h-4" />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <path
        fill="currentColor"
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      />
    </svg>
  );
}
