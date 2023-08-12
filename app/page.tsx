import { datatype } from "./api/country/route";
import HomePage from "@/Components/HomePage";

async function getData() {
  const data = await fetch(`http://${process.env.VERCEL_URL}/api/country`);
  const res: Promise<datatype> = data.json();
  return res;
}

export default async function Home() {
  const data = await getData();
  return <HomePage serverData={data} />;
}
