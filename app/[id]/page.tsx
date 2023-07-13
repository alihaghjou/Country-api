import { datatype } from "../api/country/route";

export async function getData() {
    const data = await fetch("http://localhost:3000/api/country");
    const res: Promise<datatype> = data.json();
    return res;
  }

export default async function Home({params}: {params: {id: string}}) {
    const country = await getData()
    const data = country.filter(item => item.alpha3Code === params.id)[0]
  return (
    <div>{data.name}</div>
  )
}
