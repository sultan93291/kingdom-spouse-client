import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { AiFillSun } from "react-icons/ai";

export default function DarkLightButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="py-2 px-4 text-buttonBg text-[16px] flex items-center justify-center rounded-full bg-[#E8E5DF] gap-x-8 cursor-pointer relative z-[1]"
    >
      <span
        className={`absolute top-0 w-1/2 h-full bg-buttonBg/90 rounded-full duration-300 z-[-1] ${
          darkMode ? "left-0" : "left-1/2"
        }`}
      ></span>
      <FaMoon
        className={`text-[20px] ${darkMode ? "text-white" : "text-buttonBg"}`}
      />
      <AiFillSun
        className={`text-[20px] ${darkMode ? "text-buttonBg" : "text-white"}`}
      />
    </div>
  );
}
