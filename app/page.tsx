import Image from "next/image";
import { datatype } from "./api/country/route";
import Link from "next/link";

export async function getData() {
  const data = await fetch("http://localhost:3000/api/country");
  const res: Promise<datatype> = data.json();
  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex flex-row flex-wrap gap-2 justify-around p-8">
      {data.map((item) => (
          <Link href="/" className="flex flex-col w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={item.name}>
            <Image
              className="rounded-t w-full h-full"
              src={item.flags.svg}
              height={128}
              width={128}
              alt="Flag"
            />
            <div className="p-2 pb-8">
              <h1>{item.name}</h1>
              <p>Population: {item.population} </p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </Link>
      ))}
    </main>
  );
}
