"use client";
import {BsMoon} from "react-icons/bs"

export const Header = () => {
  return (
    <div className="flex justify-between items-center py-6 px-10 shadow">
      <h1 className="font-extrabold text-2xl">Where in the World?</h1>
      <button className="flex items-center gap-2"><BsMoon />Dark mode</button>
    </div>
  );
};
