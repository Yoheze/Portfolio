import styles from '@/styles/About.module.css'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll'
import Self from '@/public/me.jpg'
import Codesmith from '@/public/codesmith.png'
import UCR_Logo from '@/public/ucr-logo.png'

export default function About () {

    const [displayNarrative, setDisplayNarrative] = React.useState(false)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.matchMedia('(max-width: 600px)').matches);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

const imagesArray = [
    <Image src='/html-logo.png' alt="html 5 logo"  key={0} width={20} height={20}/>,
    <Image src='/css-logo.png' alt='css 3 logo' key={1} width={20} height={20}/>,
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" key={2} alt='js logo'>
        <path d="M32,32V480H480V32ZM272,380c0,43.61-25.76,64.87-63.05,64.87-33.68,0-53.23-17.44-63.15-38.49h0l34.28-20.75c6.61,11.73,11.63,21.65,26.06,21.65,12,0,21.86-5.41,21.86-26.46V240h44Zm99.35,63.87c-39.09,0-64.35-17.64-76.68-42h0L329,382c9,14.74,20.75,24.56,41.5,24.56,17.44,0,27.57-7.72,27.57-19.75,0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45,0-31.57,24.05-54.63,61.64-54.63,26.77,0,46,8.32,59.85,32.68L396,290c-7.22-12.93-15-18-27.06-18-12.33,0-20.15,7.82-20.15,18,0,12.63,7.82,17.74,25.86,25.56l10.52,4.51c35.79,15.34,55.94,31,55.94,66.16C441.12,424.13,411.35,443.87,371.35,443.87Z"/>
    </svg>,
    <Image src='/react-icon.png' alt='react logo' key={3} width={20} height={20}/>,
    <Image src='/express-logo.png' alt='express logo' key={4} width={20} height={20}/>,
    <Image src='/mongodb-logo.png'alt='mongoDB logo' key={5} width={20} height={20}/>,
    <Image src='/redux-logo.png' alt="Redux logo" key={6} width={20} height={20}/>,
    <Image src='/typescript-logo.png' alt='TypeScript Logo' key={7} width={20} height={20}/>,
    <Image src='/git-logo.png' alt='git logo' key={8} width={20} height={20}/>,
    <Image src='/github-logo.jpg'alt='GitHub logo' key={9} width={20} height={20}/>,
    <Image src='/websocket-logo.png' alt="websocket logo" key={10} width={20} height={20}/>,
    <Image src='/oauth2-logo.png' alt="Oauth 2 Logo" key={11} width={20} height={20}/>,
    <Image src='/node-logo.png' alt='Node Logo' key={12} width={20} height={20}/>,
    <Image src='/postgresql-logo.png' alt='postgresql logo' key={13} width={20} height={20}/>,
    <Image src='/webpack-logo.png' alt='webpack logo' key={14} width={20} height={20}/>,
    <Image src='/tailwind-logo.png' alt='tailwind logo' key={15} width={20} height={20}/>,
    <Image src='/react-router-logo.png' alt='react router logo' key={16} width={20} height={20}/>,
    <Image src='/vite-logo.png' alt='vite logo' key={17} width={20} height={20}/>,
    <Image src='/next.svg' alt='next logo' key={18} width={20} height={20}/>
]

const itemCount = imagesArray.length;
const angleStep = (2 * Math.PI) / itemCount;

const imagesArrayWithStyle = imagesArray.map((image, index) => {
  const x = 40 * Math.cos(angleStep * index - Math.PI / 2);
  const y = 40 * Math.sin(angleStep * index - Math.PI / 2);

  return React.cloneElement(image, {
    style: {
      left: `${x}%`,
      top: `${y}%`,
      position: 'absolute',
    },
  });
});

    return (
        <div className={styles.about} id='about'>
            <h2>About Me:</h2>
            <div className={styles.grid}>
                {!isMobile && <div className={styles.icons}>
                    {imagesArrayWithStyle}
                </div>}
                <div className={styles.technologies}>
                    <h3>Technologies I&apos;ve worked with:</h3>
                    <p>JavaScript (ES6+), React, Express, NoSQL (MongoDB, Mongoose), HTML5, CSS3, Redux, TypeScript, Git/GitHub flow, WebSockets, Authentication (OAuth 2.0), Node, SQL (PostgreSQL), webpack, Tailwind, React Router, Vite, Next</p>
                    <br></br>
                    <h3>Interests:</h3>
                    <p>🎼 Musician: Had the opportunity to play at Carnegie Hall in middle school!
                    <br></br>
                    ⚗️ Science: Hence my degree in Biology! I love learning about  how everything works!
                    <br></br>
                    🎮 Gaming: Would love to see what games other people grew up with
                    </p>
                </div>
                <div style={{marginTop: '100px'}}>
                    <div className={styles.narrative}>
                        <h3>My Narrative: </h3>
                        <button onClick={()=>setDisplayNarrative(!displayNarrative)}>{displayNarrative ? 'Hide' : 'Display'} Narrative</button>
                    </div>
                    {displayNarrative && <div className={styles.narrative_text}><p style={{lineHeight: '24px', margin: '10px 20px 10px 0px' }}>Discovering Python was a life-changing experience that opened the door to a world of possibilities. It felt as if I were assembling puzzle pieces, creating fascinating projects on my computer that I never imagined possible. My natural inclination to study Python in my spare time confirmed that this was the path I wanted to follow
                    <br></br>
                    <br></br>
                    After researching various career options, I found web development to be the most appealing. Despite my father&apos;s concern that AI might eventually take over the field, my strict Asian parents were supportive when they saw my dedication. They encouraged me to attend a bootcamp, which led me to conduct extensive research before settling on Codesmith. You can find more info <a href='https://www.codesmith.io/' target='_blank'>here</a>.
                    <br></br>
                    <br></br>
                    Before even being admitted to Codesmith, I had already built a dice game using React and React hooks, useState and useEffect. Despite my initial achievements, I knew that there was still so much more to learn. The rigorous selection process at Codesmith, which included multiple interviews and workshops, taught me valuable skills such as object-oriented programming, recursion, and permutations. It is worth noting that many admitted students often have some experience in the field already.
                    <br></br>
                    <br></br>
                    During my time at Codesmith, every single day felt like a new learning opportunity. I quickly learned about Redux, backend development, testing with Jest, and more. After mastering the foundational concepts, we entered the project phase where I worked alongside other developers in a timed environment, often being given just two days to create something cool. It was through this experience that I really got to reinforce my understanding of what it meant to be a full stack developer working in a team. My most notable achievement was contributing to an open-source product with a team of 4 for a couple months, which you can find more about <Link to='experience' smooth={true} style={{cursor: 'pointer', textDecoration: 'underline'}} offset={-120}>here</Link>.
                    <br></br>
                    <br></br>
                    Looking back, I am amazed at how far I&apos;ve come on this journey. However, my passion for coding and learning remains strong. I am eager to explore new areas such as machine learning, game development, and creating tools for others. The future is full of exciting opportunities and I can&apos;t wait to see what&apos;s next!
                    <br></br>
                    <br></br>
                    </p></div>}
                    <div className={styles.education}>
                        <h3>🎓 Education:</h3>
                        <h4>University of California - Riverside</h4>
                        <p>- Cum Laude (Top 10%) Biology</p>
                        <p>- Relevant Coursework: Introduction to Computing,
                            <br></br>
                            Intro to Statistics, Calculus</p>
                        <h4>Codesmith</h4>
                        <p>- Advanced Residency for Software Engineering</p>
                    </div>
                </div>
                <div className={styles.images} style={{marginTop: '100px'}}>
                    <p>Hover me, tap on mobile!</p>
                    <Image src={Self} alt="image of Yohan Jeon" width={200} height={200} className={styles.self}/>
                    <Image src={Codesmith} alt="Codesmith logo" width={100} height={100} className={styles.codesmith}/>
                    <Image src={UCR_Logo} alt="UCR logo" width={50} height={50} className={styles.ucr}/>
                </div>
                
            </div>
        </div>
    )
}