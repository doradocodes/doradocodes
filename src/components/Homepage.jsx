import Laptop from "../Laptop.jsx";
import {Canvas} from "@react-three/fiber";
import styles from './Homepage.module.css';
import classNames from "classnames";

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
        <Canvas className={styles.canvas}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Laptop  />
        </Canvas>
        <div className="content">
            <section className={styles.section}>
                <h1 className={classNames(styles.h1, styles.h1Desktop)}>Hi I’m Dora, a Creative Technologist based in NYC.</h1>
                <h1 className={classNames(styles.h1, styles.h1Mobile)}>Hi, I'm Dora.</h1>
                <div>
                    <p className={classNames(styles.paragraph, styles.paragraphDesktop)}>I’m passionate about finding creative ways to build cutting-edge experiences
                        using technology.</p>
                    <p className={styles.paragraphMobile}>I'm a Creative Technologist based in NYC. I’m passionate about finding creative ways to build cutting-edge experiences
                        using technology.</p>
                    <a className={styles.arrowButton} href="#about" aria-label="Next"></a>
                </div>
            </section>
            <section id="about" className={styles.section}>
                <h1 className={styles.h1}>More about me</h1>
                <div>
                    <p className={styles.paragraph}>I came from a background in Computer Science and spent a decade building
                        robust, scalable web applications for well known tech companies.</p>
                    <p className={styles.paragraph}>More recently, I graduated with a Masters of Arts in Interactive Media Arts at
                        NYU, focusing on building unique interactive experiences.</p>
                    <a className={styles.arrowButton} href="#projects" aria-label="Next"></a>
                </div>
            </section>
            <section id="projects" className={styles.section}>
                <h1 className={styles.h1}>See my projects</h1>
                <div>
                    <p className={styles.paragraph}>Check out my creative and professional projects. </p>
                    <div className="jump-links">
                        <a href="#creative-projects">Creative projects</a> <a href="#professional-projects">Professional
                        projects</a>
                    </div>
                    <a className={styles.arrowButton} href="#contact" aria-label="Next"></a>
                </div>
            </section>
            <section id="contact" className={styles.section}>
                <h1 className={styles.h1}>Let’s chat</h1>
                <div>
                    <p className={styles.paragraph}>You can contact me in any of the following ways below.</p>
                    <p className={styles.paragraph}>Email: <a href="mailto:doradocodes@gmail.com">doradocodes@gmail.com</a></p>
                    <p className={styles.paragraph}>LinkedIn: <a href="https://www.linkedin.com/in/dorathiendo/">@dorathiendo</a></p>
                    <p className={styles.paragraph}>Instagram: <a href="https://www.instagram.com/doraymee/">@doraymee</a></p>
                </div>
            </section>
        </div>
    </div>
}