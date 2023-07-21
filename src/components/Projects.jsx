import {Link, useLocation} from "react-router-dom";
import styles from "./Projects.module.css";
import {creativeProjects, professionalProjects} from "./projects/data.jsx";
import classNames from "classnames";
import {useEffect, useRef} from "react";

export default function Projects() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const creativeProjectRef = useRef(null);
    const professionalProjectRef = useRef(null);
    const executeScroll = (e, currentRef) => {
        e.preventDefault();
        currentRef.current.scrollIntoView()
    }
    return <div className="page" id="projects">
        <div className={classNames("content", styles.content)}>
            <div className={styles.jumpLinks}>
                <a className="textLink" onClick={(e) => executeScroll(e, professionalProjectRef)}>Professional projects</a>
                <a className="textLink" onClick={(e) => executeScroll(e, creativeProjectRef)}>Creative projects</a>
            </div>
            <section className={styles.section} id="professional-projects" ref={professionalProjectRef}>
                <h1 className={styles.h1}>Professional Projects</h1>
                <div className={styles.projects}>
                    {
                        Object.keys(professionalProjects).map((id, i) => {
                            const project = professionalProjects[id];
                            return <Link key={i} className={styles.project} to={`/projects/${id}`}>
                                <img className={styles.projectImage} src={`/assets/${project.imageUrl}`} alt={project.name}/>
                                <p className={styles.projectName}>{project.name}</p>
                            </Link>
                        })
                    }
                </div>
            </section>
            <section className={styles.section} id="creative-projects" ref={creativeProjectRef}>
                <h1 className={styles.h1}>Creative Projects</h1>
                <div className={styles.projects}>
                    {
                        Object.keys(creativeProjects).map((id, i) => {
                            const project = creativeProjects[id];
                            return <Link key={i} className={styles.project} to={`/projects/${id}`}>
                              <img className={styles.projectImage} src={`/assets/${project.imageUrl}`} alt={project.name}/>
                              <p className={styles.projectName}>{project.name}</p>
                            </Link>
                        })
                    }
                </div>
            </section>

        </div>
    </div>;
}