import React from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Homepage from "./components/Homepage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/projects",
        element: <div>Projects</div>
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <header>
          <div className="nav_wrapper">
              <div>
                  <h1>Dora Do // <span className="grey">Creative Technologist</span></h1>
              </div>
              <nav>
                  <ul>
                      <li><a href="#">About</a></li>
                      <li><a href="/projects">Projects</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </nav>
          </div>
      </header>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
