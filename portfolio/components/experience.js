import styles from '@/styles/Experience.module.css'
import Image from 'next/image';
import { useEffect } from 'react'
import ReacType_Logo from '@/public/reactype-icon.png';
import ReacType_Splash from '@/public/reactype-splash-page.png'
import ReacType_App from '@/public/reactype-webapp.png'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience () {

    const controls1 = useAnimation();
    const { ref: ref1, inView: inView1 } = useInView();
  
    const controls2 = useAnimation();
    const { ref: ref2, inView: inView2 } = useInView();
  
    useEffect(() => {
      if (inView1) {
        controls1.start('visible');
      }
    }, [controls1, inView1]);
  
    useEffect(() => {
      if (inView2) {
        controls2.start('visible');
      }
    }, [controls2, inView2]);

    const reactDND = 'React-DND (Drag and Drop)'
    const title = 'OSLabs - ReacType | 1.9K+ GitHub Stars (Open Source)'

    return (
    <div className={styles.projects} id='experience'>
        <div className={styles.grid}>
            <motion.div
                ref={ref1}
                animate={controls1}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                variants={{
                visible: { x: 0, opacity: 1 },
                }}
            >
                <h2>Experience:</h2>
                <h3>{title}</h3>
                <p>A React Prototyping tool designed to expedite project commencement for developers by obviating the need for manual generation of React code</p>
                <p>Visit the website 👉 <a href="https://reactype.dev" target="_blank">here</a> 👈</p>
                <h4>Tech Stack: </h4>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>{reactDND}</li>
                    <li>Redux ToolKit</li>
                    <li>TypeScript</li>
                    <li>Socket.io</li>
                    <li>Oauth 2.0</li>
                    <li>Material UI</li>
                    <li>Jest</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Webpack</li>
                    <li>Electron</li>
                </ul>
            </motion.div>
            <div className={styles.reactype}>
                <Image src={ReacType_Logo} width={200} height={200} alt='reactype logo' className={styles.reacType_Logo}/>
                <Image src={ReacType_Splash} width={500} className={styles.webpage} alt='reactype splash page screenshot'/>
            </div>
            <div className={styles.appImage}>
                <Image src={ReacType_App} width={500} className={styles.webpage} alt='screenshot of reactype app'/>
            </div>
            <motion.div className={styles.contributions}
                ref={ref2}
                animate={controls2}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                variants={{
                visible: { x: 0, opacity: 1 },
                }}
                >
                <h3>My team&apos;s contributions:</h3>
                <ul>
                    <li>Oauth 2.0 GitHub and Google Login</li>
                    <li>Webpack and Collaborative Rooms with Redux store updates</li>
                    <li>Moved all state to Redux ToolKit</li>
                    <li>Docker Containerized Application for Deployment</li>
                    <li>Some UI/UX Changes</li>
                    <li>TLS Certification - HTTPS</li>
                    <li>Updated Express Routes</li>
                    <li>Added User Ability to Prototype with Tailwind</li>
                    <li>Deployed site on AWS with domain name through CNAME keys in DNS configuration</li>
                    <li>Updated outdated and end of life dependencies and packages</li>
                </ul>
            </motion.div>
        </div>
    </div>
    )
}