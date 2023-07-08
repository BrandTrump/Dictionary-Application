"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={toggleTheme}
      />
      <div
        className={`${
          currentTheme === "light"
            ? "bg-gray-500 peer-focus:ring-fuchsia-300"
            : " dark:border-gray-600 dark:bg-fuchsia-600 dark:peer-focus:ring-fuchsia-800 after:translate-x-full"
        } w-9 h-5 peer-focus:outline-none peer-focus:ring-4 rounded-full peer  peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
      ></div>
    </label>
  );
}

export default DarkModeToggle;
