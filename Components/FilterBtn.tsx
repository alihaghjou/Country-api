"use client";
import { datatype } from "@/app/api/country/route";
import { SetStateAction, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FilterBtn({
  serverData,
  setData,
}: {
  serverData: datatype;
  setData: React.Dispatch<SetStateAction<datatype>>;
}) {
  const [show, setShow] = useState(false);

  function filterByRegion(region: string) {
    const copy = serverData.filter((item) => item.region === region);
    setData(copy);
  }

  return (
    <div className="flex flex-col relative">
      <button
        className="bg-white flex items-center gap-5 px-4 py-2 rounded shadow"
        onClick={() => setShow(!show)}
      >
        Filter by Region <IoMdArrowDropdown />
      </button>
      {show && (
        <div className="absolute top-12 shadow text-left gap-2 flex flex-col bg-white rounded p-3 w-full">
          <button onClick={() => filterByRegion("Africa")}>Africa</button>
          <button onClick={() => filterByRegion("Americas")}>America</button>
          <button onClick={() => filterByRegion("Asia")}>Asia</button>
          <button onClick={() => filterByRegion("Europe")}>Europe</button>
          <button onClick={() => filterByRegion("Oceania")}>Oceania</button>
        </div>
      )}
    </div>
  );
}
