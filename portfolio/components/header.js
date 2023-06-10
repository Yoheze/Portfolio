import styles from '@/styles/Header.module.css'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header () {

    const [typed, setTyped] = useState('')
    const [job, setJob] = useState('')

    useEffect(()=>{

        const title = 'Hello, My name is Yohan Jeon'
        function addLetter(i=0) {
            setTyped(prev=>prev+title[i])
            if (i>=title.length-1) return;
            setTimeout(()=>addLetter(i+1), 100)
        }

        addLetter();

        let j = 0;
        const jobs=['Front-end Developer', 'Fullstack Developer', 'Web Developer']

        function addOneLetter (i=0, word) {
            setJob(prev=>prev+word[i])
            if (i>=word.length-1) return setTimeout(()=>removeOneLetter(word), 2000);
            setTimeout(()=>addOneLetter(i+1, word), 100)
        }

        function removeOneLetter (word) {
            setJob(prev=>word)
            const removeLastLetter = word.slice(0, -1)
            if (word.length<=0) return;
            setTimeout(()=>removeOneLetter(removeLastLetter), 100)
        }

        function changeJob () {
            addOneLetter(0, jobs[j])
            j++;
        }

        changeJob();

        const intervalId = setInterval(()=>{
            if (j>=3) j=0;
            changeJob()
        }, 6000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className={styles.background}>
            <div className={styles.title} id='header'>
                <motion.h1
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 3}}
                >{typed}</motion.h1>
                <p>I am a {job} located in the Greater Los Angeles Area</p>
            </div>
        </div>
    )
}