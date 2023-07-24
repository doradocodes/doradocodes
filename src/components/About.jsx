import classNames from "classnames";
import styles from "./About.module.css";

export default function About() {
    return <div className="page" id="about">
        <div className={classNames('content', styles.content)}>
            <div className={styles.flexWrapper}>
                <img className={styles.profileImg} src="assets/profile.JPG" alt="profile picture"/>
                <div>
                    <h1 className={styles.h1}>About Me</h1>
                    <p className={styles.paragraph}>
                        I started my journey into technology at a young age. Growing up in the Silicon Valley and raised by engineers, I had a unique childhood that embraced using the latest technology and theorizing the future of it.
                    </p>
                    <p>
                        After attaining my B.S. degree in Computer Science at San Jose State University, I worked as a software engineer at Macys.com in San Francisco, where I fell in love with front-end engineering and design. I then worked at Kodak Moments, leading a team of front-end engineers to build a web-based shopping experience on the Kodak Moments website. More recently, I moved to New York City and transitioned into a design technologist role at Square Inc., where I worked with the marketing team to build interactive web experiences for Square's products and campaigns.
                    </p>
                    <p>
                        While in New York City, I attained my masters degree in Interactive Media Arts at New York University. My time in the program solidified my passion for designing and building thoughtful and creative interactive experiences.
                    </p>
                </div>

            </div>

        </div>
    </div>
}