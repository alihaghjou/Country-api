import { datatype } from "./api/country/route";
import HomePage from "@/Components/HomePage";

export async function getData() {
  const data = await fetch("http://localhost:3000/api/country");
  const res: Promise<datatype> = data.json();
  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <HomePage data={data} />
  );
}
