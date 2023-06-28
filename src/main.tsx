import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { Home } from "./components/Home.tsx"

import { FoodType } from "./components/FoodType.tsx"

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "food_category/:type",
    element: <FoodType />
  }
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
