import Cardfood from "./Cardfood"

export function Home() {
  return (

    <div id="main" className="prose max-w-none mx-auto">
      < div className="mx-auto w-5/6 mt-12 flex flex-col items-center " >
        <h1 className="font-black">
          MotherJee's Catering
        </h1>
        <div className="grid grid-cols-3 grid-rows-4 gap-5">
          <Cardfood heading="Sweets" />
          <Cardfood heading="Chicken" />
          <Cardfood heading="Beef" />
          <Cardfood heading="Appetizers" />
        </div>
      </div >
    </div>
  )
}
