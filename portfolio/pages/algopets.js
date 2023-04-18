import AlgoPets from '@/components/projects/algopets.js'
import HomeButton from '@/components/homeButton.js'
import BackGround from '@/public/FieldBackground.jpg'
import styles from '@/styles/AlgoPetsPage.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Footer from '@/components/footer.js'

export default function algoPetsPage () {

    return (
        <>  
            <Head>
                <title>AlgoPets Demo</title>
            </Head>
            <HomeButton/>
            <div className={styles.cover}>
                <div className={styles.page}>
                    <h2>Algo-Pets: Interactive Algos Game - Demo</h2>
                    <h3>Click the pet to change pets, move with arrow keys!</h3>
                    <div className={styles.game}>
                        <Image src={BackGround} className={styles.background} alt='background image of computer'/>
                        <AlgoPets/>
                    </div>
                    <h4>Background</h4>
                    <p className={styles.narrative}>I worked with a team of other developers, and we had 3 days to create a fun project! My team and I listed out project ideas that we all wanted to build out and voted on which ideas we thought were the best. We all had interests in games, and programming so we created a game to reward programmers for studying! Unfortunately I can&apos;t get all the features to work on this page, but you can check out the code 👉 <a href='https://github.com/Panda-Pets/Coding-Companion' target='_blank'>here</a> 👈
                    </p>
                    <h4>Features: </h4>
                    <ul>
                        <li>Managed data related to users and game elements efficiently by employing an SQL database and utilizing Postico 2 for seamless data retrieval and storage processes</li>
                        <li>Safeguarded user authentication by incorporating a cryptographic hashing algorithm, specifically Bcrypt, for robust password encryption</li>
                        <li>Created an engaging and interactive user experience through dynamic rendering of multiple game elements using React</li>
                        <li>Transformed user data from Leetcode API into a currency system for user transactions</li>
                        <li>Implemented a store interface with hover functionality, enabling users to browse, purchase, and apply virtual toys for their pets</li>
                    </ul>
                    <h4>Technologies Used:</h4>
                    <ul className={styles.tech}>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>SQL</li>
                        <li>Webpack</li>
                        <li>Node/Express</li>
                        <li>HTML/CSS</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}