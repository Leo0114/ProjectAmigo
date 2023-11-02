import { useEffect, useState } from "preact/hooks";
import { DarkSh, MoonSht } from "@components/layout/LosIconos";

export default function ThemeToggle() {
  if (typeof window !== "undefined") {
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") ?? "light"
    );

    const handleClick = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }, [theme]);

    return (
      <button
        onClick={handleClick}
        className=" mx-auto group relative flex h-9 w-9 rounded-full transition
         duration-500 hover:bg-slate-950/5 dark:hover:bg-white/10"
        aria-label="Modo oscuro"
      >
        {theme === "light" ? <MoonSht /> : <DarkSh />}
      </button>
    );
  }
}
