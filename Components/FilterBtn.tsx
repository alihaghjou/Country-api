"use client";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FilterBtn() {
  const [show, setShow] = useState(false)
  return (
    <>
    <button className="bg-white flex items-center gap-5 px-4 py-2 rounded shadow" onClick={() => setShow(true)}>
      Filter by Region <IoMdArrowDropdown />
    </button>
    {show && (

    <div>
      hello
    </div>
    )}
    </>
  );
}
