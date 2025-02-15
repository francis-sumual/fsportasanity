"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Laptop } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2">
      <div className="flex space-x-2">
        <button
          onClick={() => setTheme("light")}
          className={`p-2 rounded-full ${theme === "light" ? "bg-gray-200 dark:bg-gray-700" : ""}`}
          aria-label="Light mode"
        >
          <Sun className="w-5 h-5" />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`p-2 rounded-full ${theme === "dark" ? "bg-gray-200 dark:bg-gray-700" : ""}`}
          aria-label="Dark mode"
        >
          <Moon className="w-5 h-5" />
        </button>
        <button
          onClick={() => setTheme("system")}
          className={`p-2 rounded-full ${theme === "system" ? "bg-gray-200 dark:bg-gray-700" : ""}`}
          aria-label="System theme"
        >
          <Laptop className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
