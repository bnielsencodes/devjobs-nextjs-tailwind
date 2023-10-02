"use client";
import { useState, useEffect } from "react";
import data from "./data";
import Header from "./components/Header";
import Search from "./components/search/Search";
import Job from "./components/Job";

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

  const jobsList = data.map((job) => {
    return <Job key={job.id} job={job} darkMode={darkMode} />;
  });

  return (
    <div>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main
        className={`${
          darkMode ? "bg-neutral-600" : "bg-neutral-200"
        } relative flex flex-col items-center pt-[17px] px-6 pb-[62px] md:pt-7 md:px-[39px] xl:pt-[70px] xl:px-[165px] xl:pb-[104px]`}
      >
        <Search darkMode={darkMode} />
        <div className="w-full mb-8 md:grid md:grid-cols-2 md:gap-x-[9px] xl:grid-cols-3 xl:gap-w-[30px]">
          {jobsList}
        </div>
      </main>
    </div>
  );
}
