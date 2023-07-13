"use client";
import {BsMoon} from "react-icons/bs"

export const Header = () => {
  return (
    <div className="flex justify-between p-6 mb-6 shadow">
      <h1>Where in the World?</h1>
      <button><BsMoon />Dark mode</button>
    </div>
  );
};
