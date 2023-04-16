import styles from '@/styles/About.module.css'
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll'
import Self from '@/public/me.jpg'
import Codesmith from '@/public/codesmith.png'
import UCR_Logo from '@/public/ucr-logo.png'
import HTML_Logo from '@/public/html-logo.png';
import CSS_Logo from '@/public/css-logo.png';
import JS_Logo from '@/public/javascript-logo.png'
import React_Logo from '@/public/react-icon.png';
import Express_Logo from '@/public/express-logo.png';
import MongoDB_Logo from '@/public/mongodb-logo.png';
import Redux_Logo from '@/public/redux-logo.png';
import TS_Logo from '@/public/typescript-logo.png';
import Git_Logo from '@/public/git-logo.png';
import GitHub_Logo from '@/public/github-logo.jpg';
import Websocket_Logo from '@/public/websocket-logo.png';
import OAuth_Logo from '@/public/oauth2-logo.png';
import Node_Logo from '@/public/node-logo.png';
import PostgreSQL_Logo from '@/public/postgresql-logo.png';
import Webpack_Logo from '@/public/webpack-logo.png';
import Tailwind_Logo from '@/public/tailwind-logo.png';
import React_Router_Logo from '@/public/react-router-logo.png';
import Vite_Logo from '@/public/vite-logo.png';
import Next_Logo from '@/public/next.svg'

export default function About () {

    const [displayNarrative, setDisplayNarrative] = React.useState(false)

const imagesArray = [
    <Image src={HTML_Logo} alt="html 5 logo"  key={0}/>,
    <Image src={CSS_Logo} alt='css 3 logo' key={1}/>,
    <Image src={JS_Logo} alt='Javascript logo' key={2}/>,
    <Image src={React_Logo} alt='react logo' key={3}/>,
    <Image src={Express_Logo} alt='express logo' key={4}/>,
    <Image src={MongoDB_Logo} alt='mongoDB logo' key={5}/>,
    <Image src={Redux_Logo} alt="Redux logo" key={6}/>,
    <Image src={TS_Logo} alt='TypeScript Logo' key={7}/>,
    <Image src={Git_Logo} alt='git logo' key={8}/>,
    <Image src={GitHub_Logo} alt='GitHub logo' key={9}/>,
    <Image src={Websocket_Logo} alt="websocket logo" key={10}/>,
    <Image src={OAuth_Logo} alt="Oauth 2 Logo" key={11}/>,
    <Image src={Node_Logo} alt='Node Logo' key={12}/>,
    <Image src={PostgreSQL_Logo} alt='postgresql logo' key={13}/>,
    <Image src={Webpack_Logo} alt='webpack logo' key={14}/>,
    <Image src={Tailwind_Logo} alt='tailwind logo' key={15}/>,
    <Image src={React_Router_Logo} alt='react router logo' key={16}/>,
    <Image src={Vite_Logo} alt='vite logo' key={17}/>,
    <Image src={Next_Logo} alt='next logo' key={18}/>
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
            <div className={styles.grid}>
                <div>
                    <h2>1. About Me:</h2>
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
                    Before even being admitted to Codesmith, I had already built a dice game using React and React hooks, useState and useEffect. Despite my initial achievements, I knew that there was still so much more to learn. The rigorous selection process at Codesmith, which included multiple interviews and workshops, taught me valuable skills such as object-oriented programming, recursion, and permutations. It worth noting that many admitted students often have some experience in the field already.
                    <br></br>
                    <br></br>
                    During my time at Codesmith, every single day felt like a new learning opportunity. I quickly learned about Redux, backend development, testing with Jest, and more. After mastering the foundational concepts, we entered project phase where I worked alongside other developers in a timed environment, often being given just two days to create something cool. It was through this experience that I really got to reinforce my understanding of what it meant to be a full stack developer working in a team. My most notable achievement was contributing to an open-source with a team of 4 for a couple months, which you can find more about <Link to='experience' smooth={true} style={{cursor: 'pointer', textDecoration: 'underline'}} offset={-120}>here</Link>.
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
                <div className={styles.images}>
                    <p>Hover me!</p>
                    <Image src={Self} alt="image of Yohan Jeon" width={200} height={200} className={styles.self}/>
                    <Image src={Codesmith} alt="Codesmith logo" width={100} height={100} className={styles.codesmith}/>
                    <Image src={UCR_Logo} alt="UCR logo" width={50} height={50} className={styles.ucr}/>
                </div>
                <div className={styles.icons}>
                    {imagesArrayWithStyle}
                </div>
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
            </div>
        </div>
    )
}