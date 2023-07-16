import classNames from "classnames";
import styles from "./Contact.module.css";

export default function Contact() {
    return <div className="page" id="contact">
        <div className={classNames("content", styles.content)}>
            <h1 className={styles.h1}>Contact me</h1>
            <p>
                Email: <a href="mailto:doradocodes@gmail.com">doradocodes@gmail.com</a>
            </p>
            <p>
                Instagram: <a href="https://www.instagram.com/doraymee/">@doraymee</a>
            </p>
            <p>
                LinkedIn: <a href="https://www.linkedin.com/in/dorathiendo/">@dorathiendo</a>
            </p>
        </div>
    </div>;
}