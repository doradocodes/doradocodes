import Laptop from "../Laptop.jsx";
import {Canvas} from "@react-three/fiber";
import './Homepage.css'

export default function Homepage() {
    return <div
        className="page"
        id="homepage"
        // style={{
        //     width: "100vw",
        //     height: "100vh",
        //     position: "fixed",
        //     top: 0,
        //     left: 0,
        // }}
    >
        <Canvas className="canvas">
            <ambientLight />

            <pointLight position={[10, 10, 10]} />

            {/*<mesh rotation={[10, 15, 6]}>*/}

            {/*    <boxGeometry args={[2, 2, 2]} />*/}

            {/*    <meshStandardMaterial color="hotpink" />*/}
            {/*</mesh>*/}

            <Laptop  />
        </Canvas>
        <content>
            <section>
                <h1 className="large_type">Hi I’m Dora, a Creative Technologist based in NYC.</h1>
                <p className="half-width">I’m passionate about finding creative ways to build cutting-edge experiences
                    using technology.</p>
                <a className="arrow-button" href="#about" aria-label="Next"></a>
            </section>
            <section id="about">
                <h1 className="large_type">More about me</h1>
                <p className="half-width">I came from a background in Computer Science and spent a decade building
                    robust, scalable web applications for well known tech companies.</p>
                <p className="half-width">More recently, I graduated with a Masters of Arts in Interactive Media Arts at
                    NYU, focusing on building unique interactive experiences.</p>
                <a className="arrow-button" href="#projects" aria-label="Next"></a>
            </section>
            <section id="projects">
                <h1 className="large_type">See my projects</h1>
                <p className="half-width">Check out my creative and professional projects. </p>
                <div className="jump-links">
                    <a href="#creative-projects">Creative projects</a> <a href="#professional-projects">Professional
                    projects</a>
                </div>
                <a className="arrow-button" href="#contact" aria-label="Next"></a>
            </section>
            <section id="contact">
                <h1 className="large_type">Let’s chat</h1>
                <p className="half-width">You can contact me in any of the following ways below.</p>
                <p>Email: <a href="mailto:doradocodes@gmail.com">doradocodes@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/dorathiendo/">@dorathiendo</a></p>
                <p>Instagram: <a href="https://www.instagram.com/doraymee/">@doraymee</a></p>
            </section>
        </content>
    </div>
}