import { datatype } from "./api/country/route";
import HomePage from "@/Components/HomePage";

export async function getData() {
  const data = await fetch(`https://${process.env.VERCEL_URL}/api/country`);
  const res: Promise<datatype> = data.json();
  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <HomePage serverData={data} />
  );
}
