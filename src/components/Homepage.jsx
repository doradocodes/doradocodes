import {Canvas} from "@react-three/fiber";
import styles from './Homepage.module.css';
import classNames from "classnames";
import {useEffect, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Laptop} from "../Laptop.jsx";
export default function Homepage() {
    const { pathname } = useLocation();
    const [activeSection, setActiveSection] = useState('section1');
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            const pageYOffset = e.currentTarget.pageYOffset + e.currentTarget.innerHeight * 0.5
            const getBoundingClientRect = (ref) => {
                return ref.current?.offsetTop + ref.current?.offsetHeight;
            }
            if (pageYOffset >= 0 && pageYOffset < getBoundingClientRect(section1Ref)) {
                setActiveSection('section1')
            } else if (pageYOffset >= section2Ref.current.offsetTop && pageYOffset < getBoundingClientRect(section2Ref)) {
                setActiveSection('section2')
            } else if (pageYOffset >= section3Ref.current.offsetTop && pageYOffset < getBoundingClientRect(section3Ref)) {
                setActiveSection('section3')
            } else if (pageYOffset >= section4Ref.current.offsetTop && pageYOffset < getBoundingClientRect(section4Ref)) {
                setActiveSection('section4')
            }
        });
    }, []);

    const executeScroll = (e, currentRef) => {
        e.preventDefault();
        currentRef.current.scrollIntoView()
    }

    return <div
        className={classNames('page', styles.page)}
        id="homepage"
    >
        <div className={classNames('content')}>
            <section className={styles.section} ref={section1Ref}>
                <h1 className={classNames(styles.h1, styles.h1Desktop)}>Hi I’m Dora, a Creative Technologist based in NYC.</h1>
                <h1 className={classNames(styles.h1, styles.h1Mobile)}>Hi, I'm Dora.</h1>
                <div>
                    <p className={classNames(styles.paragraph, styles.paragraphDesktop)}>I’m passionate about finding creative ways to build cutting-edge experiences
                        using technology.</p>
                    <p className={styles.paragraphMobile}>I'm a Creative Technologist based in NYC. I’m passionate about finding creative ways to build cutting-edge experiences
                        using technology.</p>
                    <a className={styles.arrowButton} onClick={(e) => executeScroll(e, section2Ref)} aria-label="Next"></a>
                </div>
            </section>
            <section id="about" className={styles.section} ref={section2Ref}>
                <h1 className={styles.h1}>More about me</h1>
                <div>
                    <p className={styles.paragraph}>Coming from a background in Computer Science, I spent a decade building
                        robust, scalable web applications for well known tech companies.</p>
                    <p className={styles.paragraph}>More recently, I graduated with a M.A. in Interactive Media Arts at
                        NYU, focusing on creating unique interactive experiences.</p>
                    <a className={styles.arrowButton} onClick={(e) => executeScroll(e, section3Ref)} aria-label="Next"></a>
                </div>
            </section>
            <section id="projects" className={styles.section} ref={section3Ref}>
                <h1 className={styles.h1}>See my projects</h1>
                <div>
                    <p className={styles.paragraph}>Check out my creative and professional projects. </p>
                    <p className="jump-links">
                        <Link to="/projects">Projects</Link>
                    </p>
                    <a className={styles.arrowButton} onClick={(e) => executeScroll(e, section4Ref)} aria-label="Next"></a>
                </div>
            </section>
            <section id="contact" className={styles.section} ref={section4Ref}>
                <h1 className={styles.h1}>Let’s chat</h1>
                <div>
                    <p className={styles.paragraph}>You can contact me in any of the following ways below.</p>
                    <p className={styles.paragraph}>Email: <a href="mailto:doradocodes@gmail.com">doradocodes@gmail.com</a></p>
                    <p className={styles.paragraph}>LinkedIn: <a href="https://www.linkedin.com/in/dorathiendo/">@dorathiendo</a></p>
                    <p className={styles.paragraph}>Instagram: <a href="https://www.instagram.com/doraymee/">@doraymee</a></p>
                </div>
            </section>
        </div>
        <Canvas className={styles.canvas}>
            <ambientLight intensity={0.5} />
            {/*<pointLight position={[10, 10, 10]} intensity={1} />*/}
            <directionalLight position={[0, 0, 10]} />
            <Laptop sectionName={activeSection}/>
        </Canvas>
    </div>
}