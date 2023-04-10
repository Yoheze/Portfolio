import styles from '@/styles/Navbar.module.css'

export default function NavBar () {
    return (
        <div className={styles.navbarDesign}>
            <nav className={styles.navbar}>
                <p>About</p>
                <p>Projects</p>
                <p>Experience</p>
                <p>Contact</p>
            </nav>
            <div className={styles.triangle}></div>
        </div>
    )
}