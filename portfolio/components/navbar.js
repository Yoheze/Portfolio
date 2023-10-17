import styles from "@/styles/Navbar.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 1250px)").matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className={styles.navbarDesign_mobile}>
        {!dropdownOpen && <button onClick={toggleDropdown}>☰</button>}
        {dropdownOpen && (
          <nav className={styles.navbar_mobile}>
            <button onClick={toggleDropdown} className={styles.navbarClose}>
              X
            </button>
            <Link
              to="header"
              smooth={true}
              offset={0}
              className={styles.link}
              onClick={toggleDropdown}
            >
              Intro
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={50}
              className={styles.link}
              onClick={toggleDropdown}
            >
              About
            </Link>
            <Link
              to="experience"
              smooth={true}
              className={styles.link}
              offset={50}
              onClick={toggleDropdown}
            >
              Experience
            </Link>
            <Link
              to="achievements"
              smooth={true}
              className={styles.link}
              offset={-100}
              onClick={toggleDropdown}
            >
              Achievements
            </Link>
            <Link
              to="projects"
              smooth={true}
              className={styles.link}
              offset={-100}
              onClick={toggleDropdown}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              className={styles.link}
              offset={120}
              onClick={toggleDropdown}
            >
              Contact
            </Link>
          </nav>
        )}
        <div className={styles.triangle}></div>
      </div>
    );
  }

  return (
    <div className={styles.navbarDesign}>
      <nav className={styles.navbar}>
        <Link to="header" smooth={true} offset={0} className={styles.link}>
          Intro
        </Link>
        <Link to="about" smooth={true} offset={100} className={styles.link}>
          About
        </Link>
        <Link
          to="experience"
          smooth={true}
          className={styles.link}
          offset={100}
        >
          Experience
        </Link>
        <Link
          to="achievements"
          smooth={true}
          className={styles.link}
          offset={-100}
        >
          Achievements
        </Link>
        <Link to="projects" smooth={true} className={styles.link} offset={-200}>
          Projects
        </Link>
        <Link to="contact" smooth={true} className={styles.link} offset={220}>
          Contact
        </Link>
      </nav>
      <div className={styles.triangle}>
        <div className={styles.inner_triangle}></div>
      </div>
    </div>
  );
}
