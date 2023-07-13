import {Canvas} from "@react-three/fiber";
import styles from './Homepage.module.css';
import classNames from "classnames";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Laptop2} from "../Laptop2.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default function Homepage() {
    const [activeSection, setActiveSection] = useState('section1');
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);


    useEffect(() => {
        // gsap.to(section2Ref.current, {
        //     x: 100,
        //     scrollTrigger: {
        //         trigger: section2Ref.current,
        //         // onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
        //         onToggle: ({ isActive }) => {
        //             if (isActive) {
        //                 setActiveSection('section2');
        //             } else {
        //                 setActiveSection('section1');
        //             }
        //         }
        //     }
        // });
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
                    <p className={styles.paragraph}>I came from a background in Computer Science and spent a decade building
                        robust, scalable web applications for well known tech companies.</p>
                    <p className={styles.paragraph}>More recently, I graduated with a Masters of Arts in Interactive Media Arts at
                        NYU, focusing on building unique interactive experiences.</p>
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
            <ambientLight intensity={1} />
            {/*<pointLight position={[10, 10, 10]} intensity={1} />*/}
            <directionalLight position={[0, 0, 10]} />
            <Laptop2 sectionName={activeSection}/>
        </Canvas>
    </div>
}