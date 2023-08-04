import { useState, useEffect } from "react";
import { FoodType } from '../src/components/FoodType'
import { results_types } from './utils/types'
import Papa, { ParseResult } from "papaparse";
import Home from "./components/Home";
import About from "./components/About"

import {
  Routes,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  const [csv, setCsv] = useState<results_types[]>([]);


  useEffect(() => {
    Papa.parse("M.csv", {
      header: true,
      skipEmptyLines: true,
      download: true,
      delimiter: ",",
      complete: function(results: ParseResult<results_types>) {
        setCsv(results.data)
      },
    });
  }, [])



  return (
    <div id="main" className="prose max-w-none mx-auto flex flex-col justify-between">
      <div className="navbar sm:flex-row flex flex-col  bg-base-300 border-2 border-amber-500">
        <div className="navbar-start flex sm:place-content-start place-content-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl no-underline">MotherJee Catering</Link>
        </div>
        <div className="navbar-end flex sm:place-content-end place-content-center gap-x-2">
          <button className="btn btn-primary">
            <Link className="no-underline text-black" to="/">HOME</Link>
          </button>
          <button className="btn btn-primary">
            <Link className="no-underline text-black" to="/about">ABOUT US</Link>
          </button>
          {/* <button className="btn btn-square btn-ghost"> */}
          {/*   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> */}
          {/* </button> */}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food_category/:type" element={<FoodType csv={csv} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="footer footer-center mt-10 p-6 bg-base-300 text-base-content border-2 border-amber-500 ">
        <div id="footer-links" className="grid grid-flow-col gap-4 text-lg">
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/about" className="link link-hover">About Us</Link>
        </div>

        <div id="footer-icons">
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/motherjees_catering/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /> </svg></a>
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div>
        <div id="footer-contact-info" className="text-lg">
          <p>
            Phone Number - 346-368-4831
            <br />
            <strong> TEXT or CALL </strong>
            anytime between 7:00 am - 10:00 pm
            To Place an Order!
            <br />
            <strong> ORDER </strong>between 7:00 am - 3:00 pm to receive Same Day Delivery!
          </p>
          <span className="text-sm"> Copyright © 2023 - All right reserved by MotherJee Catering</span>
        </div>
      </footer>
    </div >

  )
}

export default App



// type csv_value = Array<results_types>

