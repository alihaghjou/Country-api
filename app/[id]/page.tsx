import DetailPage from "@/Components/DetailPage";
import { datatype } from "../api/country/route";

export async function getData(id: string) {
  const data = await fetch(`http://${process.env.VERCEL_URL}api/${id.toUpperCase()}`);
  const res: datatype[0] = await data.json();
  console.log(res)
  return res;
}

export default async function Home({ params }: { params: { id: string } }) {
  const country = await getData(params.id);
  console.log(country)

  return <DetailPage country={country} />;
}
