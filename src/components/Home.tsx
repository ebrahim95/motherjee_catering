import { Cardfood } from "./Cardfood"

interface Props {
  csv: string[]
}
export function Home(props: Props) {

  return (
    <div className="mx-auto w-5/6 mt-12 flex flex-col justify-between items-center" >
      <h1>
        MotherJee's Catering
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-4 gap-6">
        {props.csv.map((value, index) => <Cardfood key={index} heading={value} />)}
      </div>
    </div >
  )
}
