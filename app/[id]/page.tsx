import DetailPage from "@/Components/DetailPage";
import { datatype } from "../api/country/route";

async function getData(id: string) {
    const data = await fetch("http://localhost:3000/api/country");
    const res: datatype = await data.json();
    const item = res.filter(item => item.alpha3Code === id)[0]
    return item;
  }

export default async function Home({params}: {params: {id: string}}) {
    const country = await getData(params.id)
    
  return (
    <DetailPage country={country} />
  )
}
