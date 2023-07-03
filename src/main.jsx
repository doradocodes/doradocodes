import React from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    createBrowserRouter, createHashRouter, HashRouter, Link, Route,
    RouterProvider, Routes,
} from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Projects from "./components/Projects.jsx";
import ProjectsPage from "./components/projects/ProjectPage.jsx";

const tempBase = 'doradocodes';

export const links = {

    projects: {
        path: `/projects`,
        element: <Projects />
    },
    project: {
        path: `/${tempBase}/projects/:id`,
        element: <ProjectsPage />
    },
    contact: {
        path: `/${tempBase}/contact`,
        element: <div>Contact</div>
    },
    about: {
        path: `/${tempBase}/about`,
        element: <div>About</div>
    },
    home: {
        path: `/${tempBase}`,
        element: <Homepage />
    },
}

const router = createHashRouter(Object.values(links));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*<BrowserRouter>*/}

      {/*</BrowserRouter>*/}
      {/*<RouterProvider router={router} />*/}
      <HashRouter>
          <header>
              <div className="nav_wrapper">
                  <div>
                      <Link to={links.home.path}>
                          <h1>Dora Do // <span className="grey">Creative Technologist</span></h1>
                      </Link>
                  </div>
                  <nav>
                      <ul>
                          <li><a href={`${links.about.path}`}>About</a></li>
                          <li><a href={`/#${links.projects.path}`}>Projects</a></li>
                          <li><a href={links.contact.path}>Contact</a></li>
                      </ul>
                  </nav>
              </div>
          </header>
          <Routes>
              <Route exact path="/" element={<Homepage/>} />
              <Route path="/projects" element={<Projects/>} /> {/* 👈 Renders at /#/app/ */}
          </Routes>
      </HashRouter>
  </React.StrictMode>,
)
