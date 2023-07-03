import {Link} from "react-router-dom";
import styles from "./Projects.module.css";
import {creativeProjects, professionalProjects} from "./projects/data.jsx";
import classNames from "classnames";

export default function Projects() {
    return <div className="page" id="projects">
        <div className={classNames("content", styles.content)}>
            <div className={styles.jumpLinks}>
                <a href="#creative-projects">Creative projects</a>
                <a href="#professional-projects">Professional projects</a>
            </div>
            <section className={styles.section} id="creative-projects">
                <h1 className={styles.h1}>Creative Projects</h1>
                <div className={styles.projects}>
                    {
                        Object.keys(creativeProjects).map((id, i) => {
                            const project = creativeProjects[id];
                            return <Link key={i} className={styles.project} to={`/doradocodes/projects/${id}`}>
                              <img className={styles.projectImage} src={`/assets/${project.imageUrl}`} alt={project.name}/>
                              <p className={styles.projectName}>{project.name}</p>
                            </Link>
                        })
                    }
                </div>
            </section>
            <section className={styles.section} id="professional-projects">
                <h1 className={styles.h1}>Professional Projects</h1>
                <div className={styles.projects}>
                    {
                        Object.keys(professionalProjects).map((id, i) => {
                            const project = professionalProjects[id];
                            return <Link key={i} className={styles.project} to={`/doradocodes/projects/${id}`}>
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