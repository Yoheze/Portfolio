import styles from '@/styles/Projects.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Dog from '@/public/dog.png'
import CodeHort from '@/public/codehort-icon.png'
import LiftLog from '@/public/liftlog-icon.png'

export default function Projects () {

    const router = useRouter();

    const note = 'Note: I will be showing highlights of each project (can\'t upload entire projects)'

    return (
        <div className={styles.project_section}>
            <div id='projects'>
                    <h2>Open Source Projects:</h2>
                    <p>{note}</p>
            </div>
            <div className={styles.projects}>
                <div className={styles.proj}>
                    <h3>AlgoPets</h3>
                    <h4>Interactive Algos Game</h4>
                    <Image src={Dog} alt='image of dog in algopets game'></Image>
                    <div className={styles.icons}>
                        <a onClick={()=>{
                            router.push('/algopets')
                        }}>Find More!</a>
                        <a href='https://github.com/Panda-Pets/Coding-Companion' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-github" id='github-icon' viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={styles.proj}>
                    <h3>CodeHort</h3>
                    <h4>Interactive Participation Tracker</h4>
                    <Image src={CodeHort} alt='codehort icon' style={{margin: '80px auto'}}/>
                    <div className={styles.icons}>
                        <a onClick={()=>{
                            router.push('/codehort')
                        }}>Find More!</a>
                        <a href='https://github.com/Panda-Pets/Coding-Companion' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-github" id='github-icon' viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={styles.proj}>
                    <h3>LiftLog</h3>
                    <h4>Online Exercise Logger</h4>
                    <Image src={LiftLog} alt='liftlog icon' height={190}/>
                    <div className={styles.icons}>
                        <a onClick={()=>{
                            router.push('/liftlog')
                        }}>Find More!</a>
                        <a href='https://github.com/Dragonite14/LiftLog' target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-github" id='github-icon' viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}