import styles from '@/styles/About.module.css'
import React from 'react';
import Image from 'next/image';
import Self from '../public/me.jpg'
import Codesmith from '../public/codesmith.png'
import UCR_Logo from '../public/ucr-logo.png'
import HTML_Logo from '../public/html-logo.png';
import CSS_Logo from '../public/css-logo.png';
import JS_Logo from '../public/Javascript-logo.png';
import React_Logo from '../public/react-icon.png';
import Express_Logo from '../public/express-logo.png';
import MongoDB_Logo from '../public/mongodb-logo.png';
import Redux_Logo from '../public/redux-logo.png';
import TS_Logo from '../public/typescript-logo.png';
import Git_Logo from '../public/git-logo.png';
import GitHub_Logo from '../public/github-logo.jpg';
import Websocket_Logo from '../public/websocket-logo.png';
import OAuth_Logo from '../public/oauth2-logo.png';
import Node_Logo from '../public/node-logo.png';
import PostgreSQL_Logo from '../public/postgresql-logo.png';
import Webpack_Logo from '../public/webpack-logo.png';
import Tailwind_Logo from '../public/tailwind-logo.png';
import React_Router_Logo from '../public/react-router-logo.png';
import Vite_Logo from '../public/vite-logo.png';
import Next_Logo from '../public/next.svg'

export default function About () {

const imagesArray = [
    <Image src={HTML_Logo} alt="html 5 logo"/>,
    <Image src={CSS_Logo} alt='css 3 logo'/>,
    <Image src={JS_Logo} alt='Javascript logo'/>,
    <Image src={React_Logo} alt='react logo'/>,
    <Image src={Express_Logo} alt='express logo'/>,
    <Image src={MongoDB_Logo} alt='mongoDB logo'/>,
    <Image src={Redux_Logo} alt="Redux logo"/>,
    <Image src={TS_Logo} alt='TypeScript Logo'/>,
    <Image src={Git_Logo} alt='git logo'/>,
    <Image src={GitHub_Logo} alt='GitHub logo'/>,
    <Image src={Websocket_Logo} alt="websocket logo"/>,
    <Image src={OAuth_Logo} alt="Oauth 2 Logo"/>,
    <Image src={Node_Logo} alt='Node Logo'/>,
    <Image src={PostgreSQL_Logo} alt='postgresql logo'/>,
    <Image src={Webpack_Logo} alt='webpack logo'/>,
    <Image src={Tailwind_Logo} alt='tailwind logo'/>,
    <Image src={React_Router_Logo} alt='react router logo'/>,
    <Image src={Vite_Logo} alt='vite logo'/>,
    <Image src={Next_Logo} alt='next logo'/>
]

const itemCount = imagesArray.length;
const angleStep = (2 * Math.PI) / itemCount;

const imagesArrayWithStyle = imagesArray.map((image, index) => {
  const x = 50 * Math.cos(angleStep * index - Math.PI / 2);
  const y = 50 * Math.sin(angleStep * index - Math.PI / 2);

  return React.cloneElement(image, {
    style: {
      left: `${x}%`,
      top: `${y}%`,
      position: 'absolute',
    },
    key: index
  });
});

    return (
        <div className={styles.about}>
            <div>
                <h2>1. About Me:</h2>
                <h3>🎓 Education:</h3>
                <h4>University of California - Riverside</h4>
                <p>- Cum Laude (Top 10%) Biology</p>
                <h4>Codesmith</h4>
                <p>- Advanced Residency for Software Engineering</p>
            </div>
            <div className={styles.images}>
                <Image src={Self} alt="image of Yohan Jeon" width={200} height={200} className={styles.self}/>
                <Image src={Codesmith} alt="Codesmith logo" width={100} height={100} className={styles.codesmith}/>
                <Image src={UCR_Logo} alt="UCR logo" width={50} height={50} className={styles.ucr}/>
            </div>
            <div className={styles.icons}>
                {imagesArrayWithStyle}
            </div>
        </div>
    )
}