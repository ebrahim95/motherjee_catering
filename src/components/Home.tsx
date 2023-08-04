import { Cardfood } from "./Cardfood"
import { Link } from "react-router-dom"




function Home() {
  const image_src = [
    {
      "heading": "Appetizers",
      "image": "appetizers.webp"
    }, {
      "heading": "Beef and Curries",
      "image": "beef_curry.webp"
    },
    {
      "heading": "Biryanis and Rice",
      "image": "biryani_and_rices.webp"
    },
    {
      "heading": "Chicken and Curries",
      "image": "chicken_curry.webp"
    },
    {
      "heading": "Fish and Curries",
      "image": "fish_curry.webp"
    },
    {
      "heading": "Goat and Curries",
      "image": "goat_curry.webp"
    },
    {
      "heading": "Mishti and Pitha",
      "image": "mishti.webp"
    },
    {
      "heading": "Tandoori and Kabab",
      "image": "kebab.webp"
    },
    {
      "heading": "Bangladesi Chinese",
      "image": "bangladesi_chinese.webp"
    },

  ]
  return (
    <div className="mx-auto lg:w-5/6 w-11/12 mt-12 flex flex-col items-center" >
      <div className="text-lg breadcrumbs">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
      <h1>
        MotherJee's Catering
      </h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {image_src.map((obj, index) => <Cardfood key={index} heading={obj.heading} image={obj.image} />)}
      </div>
    </div >
  )
}

export default Home
