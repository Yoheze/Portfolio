import CodeHort from '@/components/projects/codehort.js'
import Footer from '@/components/footer.js'
import HomeButton from '@/components/homeButton.js'
import styles from '@/styles/CodeHortPage.module.css'
import Head from 'next/head'

export default function codeHortPage() {
    return (
    <>  
        <Head>
            <title>CodeHort Demo</title>
        </Head>
        <HomeButton/>
        <div className={styles.background}>
            <div className={styles.codehort}>
                <div>
                    <h3>CodeHort: Interactive Participation Tracker - Demo</h3>
                    <CodeHort/>
                </div>
                <div>
                    <h4>Background:</h4>
                    <p className={styles.narrative}>I worked with a team of 3 other people and we had to iterate on a project from another group and were given two
                        days to do so. This was project is really just a participation picker and tracker, and we thought it&apos;d be super interesting to try and make it more interesting! I spent hours trying to create a wheel that dynamically rendered extra slices based on the number of students in the class. I&apos;m really proud of this one and found it constantly being used in my class!
                    </p>
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
                    <h4 style={{marginTop: '20px'}}>Tech Stack: </h4>
                    <ul className={styles.tech}>
                        <li>React</li>
                        <li>Node/Express</li>
                        <li>MongoDB</li>
                        <li>Webpack</li>
                        <li>Tailwind</li>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <p>Check out the GitHub repo 👉 <a href='https://github.com/PantlessThundergeese14/codeHort' target='_blank'>here</a> 👈</p>
                </div>
            </div>
            
            <Footer/>
        </div>
    </>
    )
}