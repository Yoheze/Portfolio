import styles from '@/styles/Navbar.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'

export default function NavBar () {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.matchMedia('(max-width: 1250px)').matches);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isMobile) {
        return (
        <div className={styles.navbarDesign}>
            <nav className={styles.navbar}>
                <Link to='header' smooth={true} offset={0} className={styles.link}>Intro</Link>
                <Link to='about' smooth={true} offset={50} className={styles.link}>About</Link>
                <Link to='experience' smooth={true} className={styles.link} offset={50}>Experience</Link>
                <Link to='projects' smooth={true} className={styles.link} offset={-100}>Projects</Link>
                <Link to='contact' smooth={true} className={styles.link} offset={120}>Contact</Link>
            </nav>
            <div className={styles.triangle}></div>
        </div>
        )
    }

    return (
        <div className={styles.navbarDesign}>
            <nav className={styles.navbar}>
                <Link to='header' smooth={true} offset={0} className={styles.link}>Intro</Link>
                <Link to='about' smooth={true} offset={100} className={styles.link}>About</Link>
                <Link to='experience' smooth={true} className={styles.link} offset={100}>Experience</Link>
                <Link to='projects' smooth={true} className={styles.link} offset={-200}>Projects</Link>
                <Link to='contact' smooth={true} className={styles.link} offset={220}>Contact</Link>
            </nav>
            <div className={styles.triangle}></div>
        </div>
    )
}