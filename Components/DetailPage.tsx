"use client";

import { datatype } from "@/app/api/country/route";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineArrowLeft} from "react-icons/ai"

export default function DetailPage({ country }: { country: datatype[0] }) {
  return (
    <section className="flex flex-col p-6 mt-6 mx-4 gap-6">
      <Link href={"/"}>
        <button className="shadow rounded py-2 px-6 flex items-center gap-2"><AiOutlineArrowLeft />Back</button>
      </Link>
      <div className="flex md:flex-row flex-col justify-center items-center gap-8">
        <Image
          src={country.flags.svg}
          width={512}
          height={512}
          alt="flag"
          className="w-ful h-full shadow-md"
        />
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl">{country.name}</h1>
          <article className="flex flex-col md:flex-row justify-between gap-3 mb-5">
            <div className="flex flex-col gap-3">
              <p>
                Native Name:
                <span className="text-[#858585]"> {country.nativeName}</span>
              </p>
              <p>
                Population:{" "}
                <span className="text-[#858585]"> {country.population}</span>
              </p>
              <p>
                Region:{" "}
                <span className="text-[#858585]"> {country.region}</span>
              </p>
              <p>
                Sub Region:{" "}
                <span className="text-[#858585]"> {country.subregion}</span>
              </p>
              <p>
                Capital:{" "}
                <span className="text-[#858585]"> {country.capital}</span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p>
                Top Level Domain:{" "}
                <span className="text-[#858585]">
                  {" "}
                  {country.topLevelDomain}
                </span>
              </p>
              <p>
                Currencies:{" "}
                {country.currencies?.map((curr) => (
                  <span key={curr.code} className="text-[#858585]">
                    {curr.name}
                  </span>
                ))}
              </p>
              <p>
                Languages:{" "}
                {country.languages.map((lang) => (
                  <span key={lang.iso639_1} className="text-[#858585]">
                    {lang.name},
                  </span>
                ))}
              </p>
            </div>
          </article>
          <div className="flex gap-2 items-center flex-wrap">
            Border Country:
            <span className="flex gap-2 flex-wrap">
              {country.borders?.map((item) => (
                <span
                  key={item}
                  className="shadow rounded px-6 py-1 text-[#858585]"
                >
                  {item}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
