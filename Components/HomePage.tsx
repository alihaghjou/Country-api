"use client";

import Link from "next/link";
import Image from "next/image";
import { datatype } from "@/app/api/country/route";
import {IoMdArrowDropdown} from "react-icons/io"

export default function HomePage({ data }: { data: datatype }) {
  return (
    <main className="p-8 pt-6 text-black bg-[#fafafa] font-light">
      <div className="flex justify-between mb-6">
        <input type="text" placeholder="Search for a country" className="shadow"/>
        <button className="bg-white flex items-center gap-5 px-4 py-2 rounded shadow">Filter by Region <IoMdArrowDropdown /></button>
      </div>
      <section className="flex flex-col flex-wrap gap-2 justify-around md:flex-row">
        {data.map((item) => (
          <Link
            href={`/${item.alpha3Code}`}
            className="flex flex-col mb-8 md:w-1/5 bg-white border border-gray-200 rounded-lg shadow"
            key={item.alpha3Code}
          >
            <Image
              className="rounded-t w-full h-full"
              src={item.flags.svg}
              height={128}
              width={128}
              alt="Flag"
            />
            <div className="p-2 pb-8">
              <h1 className="text-lg py-3 font-semibold">{item.name}</h1>
              <p>
                Population:{" "}
                <span className="text-[#858585]">{item.population}</span>
              </p>
              <p>
                Region: <span className="text-[#858585]">{item.region}</span>
              </p>
              <p>
                Capital: <span className="text-[#858585]">{item.capital}</span>
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
