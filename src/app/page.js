"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // prefers dark mode
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      setDarkMode(true);
    }
  }, []);

  // toggle dark mode
  function toggleTheme() {
    setDarkMode((prevMode) => !prevMode);
    console.log("it works!");
  }

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
}
