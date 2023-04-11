import styles from '@/styles/Navbar.module.css'
import { Link } from 'react-scroll'

export default function NavBar () {

    return (
        <div className={styles.navbarDesign}>
            <nav className={styles.navbar}>
                <Link to='header' smooth={true} offset={-330} style={{cursor: 'pointer'}}>Intro</Link>
                <Link to='about' smooth={true} offset={-120} style={{cursor: 'pointer'}}>About</Link>
                <Link to='experience' smooth={true} style={{cursor: 'pointer'}} offset={-120}>Experience</Link>
                <Link to='projects' smooth={true} style={{cursor: 'pointer'}} offset={-120}>Projects</Link>
                <p style={{cursor: 'pointer'}}>Contact</p>
            </nav>
            <div className={styles.triangle}></div>
        </div>
    )
}