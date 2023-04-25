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
    <Image src='/javascript-logo.png' alt='Javascript logo' key={2} width={20} height={20}/>,
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
                    {displayNarrative && <p style={{lineHeight: '24px', margin: '10px 20px 10px 0px' }}>Discovering Python was a life-changing experience that opened the door to a world of possibilities. It felt as if I were assembling puzzle pieces, creating fascinating projects on my computer that I never imagined possible. My natural inclination to study Python in my spare time confirmed that this was the path I wanted to follow
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
                    <button onClick={()=>setDisplayNarrative(!displayNarrative)}>{displayNarrative ? 'Hide' : 'Display'} Narrative</button>
                    </p>}
                    <h3>🎓 Education:</h3>
                    <h4>University of California - Riverside</h4>
                    <p>- Cum Laude (Top 10%) Biology</p>
                    <p>- Relevant Coursework: Introduction to Computing,
                        <br></br>
                        Intro to Statistics, Calculus</p>
                    <h4>Codesmith</h4>
                    <p>- Advanced Residency for Software Engineering</p>
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