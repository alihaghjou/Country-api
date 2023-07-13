"use client";

import { datatype } from "@/app/api/country/route";
import { SetStateAction, useState } from "react";

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
    <div>
      <input
        type="text"
        placeholder="Search for a country"
        className="shadow"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={search}>click</button>
    </div>
  );
}
