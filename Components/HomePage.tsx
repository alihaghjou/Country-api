"use client";

import Link from "next/link";
import Image from "next/image";
import { datatype } from "@/app/api/country/route";
import FilterBtn from "./FilterBtn";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function HomePage({ serverData }: { serverData: datatype }) {
  const [data, setData] = useState(serverData);

  return (
    <main className="py-6 text-black px-10 bg-[#fafafa] font-light text-sm dark:bg-[#202c37] dark:text-white min-h-screen">
      <div className="flex md:flex-row gap-4 flex-col justify-between items-center mb-6">
        <SearchBar serverData={serverData} setData={setData} />
        <FilterBtn serverData={serverData} setData={setData} />
      </div>
      <section className="flex flex-col flex-wrap gap-2 justify-between md:flex-row">
        {data.length ? (
          data.map((item) => (
            <Link
              href={`/${item.alpha3Code}`}
              className="flex flex-col mb-8 md:w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#2b3945] dark:border-[#2b3945]"
              key={item.alpha3Code}
            >
              <Image
                className="rounded-t w-full h-full"
                src={item.flags.svg}
                height={128}
                width={128}
                alt="Flag"
              />
              <div className="p-2 pl-4 pb-8">
                <h1 className="text-lg py-3 font-semibold">{item.name}</h1>
                <p>
                  Population:{" "}
                  <span className="text-[#858585]">{item.population}</span>
                </p>
                <p>
                  Region: <span className="text-[#858585]">{item.region}</span>
                </p>
                <p>
                  Capital:{" "}
                  <span className="text-[#858585]">{item.capital}</span>
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div>No Country Found</div>
        )}
      </section>
        <p className="text-center">Total Country: {data.length}</p>
    </main>
  );
}
