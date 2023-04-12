import styles from '@/styles/Projects.module.css'
import AlgoPets from '@/components/projects/algopets.js'
import CodeHort from '@/components/projects/codehort.js'
import BackGround from '@/public/FieldBackground.jpg'
import Image from 'next/image'

export default function Projects () {

    const note = 'Note: I will be showing highlights of each project (can\'t upload entire projects)'

    return (
        <div className={styles.projects} >
            <div id='projects'>
                <h2>Open Source Projects:</h2>
                <p>{note}</p>
                <br></br>
                <h3>Algo-Pets: Interactive Algos Game</h3>
                <p>Click the pet to change pets!</p>
            </div>
            <div className={styles.game}>
                <Image src={BackGround} className={styles.background}/>
                <AlgoPets/>
            </div>
            <h4 style={{marginTop: '30px'}}>Main Features: </h4>
            <ul>
                <li>Managed data related to users and game elements efficiently by employing an SQL database and utilizing Postico 2 for seamless data retrieval and storage processes</li>
                <li>Safeguarded user authentication by incorporating a cryptographic hashing algorithm, specifically Bcrypt, for robust password encryption</li>
                <li>Created an engaging and interactive user experience through dynamic rendering of multiple game elements using React</li>
            </ul>
            <h4>Features not shown:</h4>
            <ul>
                <li>Leetcode API to track how many coins the user has gained</li>
                <li>Store that shows on hover that users can buy and use on their pet!</li>
                <li>Authentication</li>
            </ul>
            <div className={styles.codehort}>
                <div>
                    <h3>CodeHort: Interactive Participation Tracker</h3>
                    <CodeHort/>
                </div>
                <div>
                    <h4>Main Enhancements:</h4>
                    <ul>
                        <li>Improved existing project esthetics, streamlined design consistency, and enhanced overall user experience by leveraging Tailwind CSS</li>
                        <li>Developed an intuitive single-page application experience with React Router, enabling the reduction of downtime for users and facilitating browser history management for seamless navigation</li>
                        <li>Enabled efficient dynamic rendering of participants and roulette wheel segments in real-time using React and CSS animations</li>
                    </ul>
                    <br></br>
                    <h4>Features Not Shown:</h4>
                    <ul>
                        <li>Admin/User Interface and Login</li>
                        <li>Database of all students and participation count</li>
                        <li>Admin deleting and adding students</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}