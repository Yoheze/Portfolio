import styles from '@/styles/Projects.module.css'
import AlgoPets from '@/components/projects/algopets.js'

export default function Projects () {

    const note = 'Note: I will be showing highlights of each project (can\'t upload every project)'

    return (
        <div className={styles.projects} >
            <div id='projects'>
                <h2>Open Source Projects:</h2>
                <p>{note}</p>
                <h3>Algo-Pets: Interactive Algos Game</h3>
            </div>
            <div className={styles.game}>
                <AlgoPets/>
            </div>
        </div>
    )
}