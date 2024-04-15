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
import Header from "./components/Header.jsx";
import Gradient from "./components/GradientBackground.jsx";
import TestPage from "./components/TestPage.jsx";

// new Gradient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                <Route path="/projects" element={<Projects/>}/> {/* 👈 Renders at /#/app/ */}
                <Route path="/projects/:id" element={<ProjectsPage/>}/> {/* 👈 Renders at /#/app/ */}
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/test" element={<TestPage/>}/>
            </Routes>
        </HashRouter>
    </React.StrictMode>,
)
