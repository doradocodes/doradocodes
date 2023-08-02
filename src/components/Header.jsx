import {Link} from "react-router-dom";
import styles from './Header.module.css';

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.navWrapper}>
            <div>
                <Link to="/" className="textLink no-underline">
                    Dora Do // <span className="grey">Creative Technologist</span>
                </Link>
            </div>
            <nav>
                <ul>
                    <li className="textLink"><Link to="/about">About</Link></li>
                    <li className="textLink"><Link to="/projects">Projects</Link></li>
                    <li className="textLink"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>;
}
