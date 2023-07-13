"use client";
import { BsMoon } from "react-icons/bs";

export const Header = () => {
  function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark");
  }

  return (
    <div className="flex justify-between items-center py-8 px-10 shadow dark:bg-[#2b3945] dark:text-white">
      <h1 className="font-extrabold md:text-2xl">Where in the World?</h1>
      <button className="flex items-center gap-2" onClick={toggleDark}>
        <BsMoon />
        Dark mode
      </button>
    </div>
  );
};
