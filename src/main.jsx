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
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <header>
                <div className="nav_wrapper">
                    <div>
                        <Link to="/">
                            <h1>Dora Do // <span className="grey">Creative Technologist</span></h1>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/#/about">About</a></li>
                            <li><a href="/#/projects">Projects</a></li>
                            <li><a href="/#/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route path="/projects" element={<Projects/>}/> {/* 👈 Renders at /#/app/ */}
                <Route path="/projects/:id" element={<ProjectsPage/>}/> {/* 👈 Renders at /#/app/ */}
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)
