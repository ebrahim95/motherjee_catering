import { useState, useEffect } from "react";
import { FoodType } from '../src/components/FoodType'
import { results_types } from './utils/types'
import Papa, { ParseResult } from "papaparse";
import { Home } from "./components/Home";

import {
  Routes,
  Route,
  Link
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


  const catergory_uniq = [...new Set(csv?.map(value => value.Category))]


  return (
    <div id="main" className="prose max-w-none mx-auto mb-10">
      <div className="navbar bg-300">
        <div className="navbar-start flex">
          <Link to="/" className="btn btn-ghost normal-case text-xl no-underline">MotherJee Catering</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home csv={catergory_uniq} />} />
        <Route path="/food_category/:type" element={<FoodType csv={csv} />} />
      </Routes>
    </div>

  )
}

export default App



// type csv_value = Array<results_types>

