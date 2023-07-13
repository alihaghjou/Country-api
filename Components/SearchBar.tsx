"use client";

import { datatype } from "@/app/api/country/route";
import { SetStateAction, useState } from "react";
import {AiOutlineSearch} from "react-icons/ai"

export default function SearchBar({
  serverData,
  setData,
}: {
  serverData: datatype;
  setData: React.Dispatch<SetStateAction<datatype>>;
}) {
  const [input, setInput] = useState("");

  function search() {
    const copy = serverData.filter((item) =>
      item.name.toLowerCase().includes(input)
    );
    setData(copy);
  }
  return (
    <div className="bg-white shadow flex items-center gap-4 px-6 py-2 rounded dark:bg-[#2b3945]">
      <button onClick={search}><AiOutlineSearch /></button>
      <input
        type="text"
        placeholder="Search for a country..."
        className="pr-28 focus-within:outline-none py-2 dark:bg-[#2b3945]"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
