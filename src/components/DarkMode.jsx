// src/components/DarkMode.jsx
import React, { useEffect, useState } from "react";
// If you have image buttons like in the video:
import LightButton from "../assets/light-mode-button.png";
import DarkButton  from "../assets/dark-mode-button.png";

// ^ put these two PNGs in: src/assets/website/

const DarkMode = () => {
  // theme: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    // read saved theme or default to light
    return localStorage.getItem("theme") || "light";
  });

  // apply theme to <html> class and persist
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="relative">
      {theme === "light" ? (
        <img
          src={LightButton}
          alt="Switch to dark mode"
          onClick={toggle}
          className="w-12 cursor-pointer transition-all duration-300
                     drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]"
        />
      ) : (
        <img
          src={DarkButton}
          alt="Switch to light mode"
          onClick={toggle}
          className="w-12 cursor-pointer transition-all duration-300
                     drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]"
        />
      )}
    </div>
  );
};

export default DarkMode;
