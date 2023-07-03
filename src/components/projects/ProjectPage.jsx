import {useParams} from "react-router-dom";
import { creativeProjects, professionalProjects } from "./data.jsx";
import styles from "./ProjectPage.module.css";
import classNames from "classnames";

export default function ProjectsPage() {
    const { id } = useParams();
    const project = creativeProjects[id] || professionalProjects[id];
    return <div className="page">
        <div className={classNames('content', styles.content)}>
            <div className={styles.columnWrapper}>
                <div className={styles.column}>
                    <img className={styles.projectImage} src={`/assets/${project.imageUrl}`} alt="Ambient Watercolor"/>
                </div>
                <div className={styles.column}>
                    <h1 className={styles.projectTitle}><i>{project.name}</i></h1>
                    <p className={styles.projectLinks}>
                        {project.link && <a href={project.link}>Demo</a>}
                        {project.github && <a href={project.github}>Github</a>}
                    </p>
                    {project.summary}
                </div>
            </div>
            {project.sections.map((section, i) =>
                <section key={i} className={styles.section}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    {section.content}
                </section>)
            }
        </div>
    </div>
}