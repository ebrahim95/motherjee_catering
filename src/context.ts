import { createContext } from "react";
import { results_types } from "./utils/types"

const filler_data = [{
  Category: "",
  Name: "",
  Description: "",
  Full_tray: "",
  Half_tray: "",
  Image: "",
  Bengali: ""
}]
export const csv_data = createContext<Array<results_types>>(filler_data)
