import * as React from "react";
import {  Moon,  Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("dark");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  function setStateWrapper() {
    if (theme === "theme-light") {
      setThemeState("dark");
    } else if (theme === "dark") {
      setThemeState("theme-light");
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setStateWrapper()}
      aria-label="light/dark mode toggle"
      className="relative w-10 h-10 rounded-md bg-white dark:bg-slate-900 transition-colors duration-300">
      <Sun className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 text-yellow-500transition-all duration-300${theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
      />
      <Moon className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5text-slate-300transition-all duration-300${theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
      />
    </Button>
  );
}