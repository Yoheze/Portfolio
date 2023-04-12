import React from 'react'
import styles from '@/styles/CodeHort.module.css'

export default function App () {

    const [randomNum, setRandomNum] = React.useState(0)
    const [animationClass, setAnimationClass] = React.useState('')
    const [person, setPerson] = React.useState('')
    const rootRef = React.useRef(null);

    React.useEffect(()=>{
        if (rootRef.current) {
            rootRef.current.style.setProperty('--random-num', `${randomNum+1440}deg`);
        }
    }, [randomNum, rootRef]);
    

    const array = ['Yohan', 'Angelo', 'Mike', 'Yusuf', 'Garrett', 'Ian']
    const colors = ['maroon','red', 'purple', 'fuchsia', 'blue', 'navy', 'teal', 'aqua','lime','green','olive','yellow', 'orange']
    const arcLength = 360/array.length

    const colorArray = array.map((el,i)=>{
        const colorChosen = i%colors.length;
        const angle = arcLength*i
        const skew = (360/array.length)-90;
        let styling;
        let classBox;
        if (array.length>2){
            styling = {
                backgroundColor: colors[colorChosen],
                transform: `rotate(${angle}deg) skewY(${skew}deg)`,
            }
            classBox = styles.box;
        } else if (array.length===1) {
            styling = {
                backgroundColor: colors[colorChosen],
            }
            classBox = styles.big_box;
        } else if (array.length===2) {
            styling = {
                backgroundColor: colors[colorChosen],
            }
            classBox = styles.twoBoxes;
        }
        return <div style={styling} key={i} className={classBox}><p className={styles.remove_skew}>{array[i]}</p></div>
    })

    return (
        <div className={styles.root} ref={rootRef}>
            <div className={styles.arrow_down}></div>
            <div className={`${styles.wheel} ${animationClass}`} onAnimationEnd={()=>{
                setTimeout(()=>{
                    setAnimationClass('')
                }, 5000)
                console.log(Math.floor((randomNum/360)*array.length))
                const reversed = array.reverse();
                console.log(reversed[Math.floor((randomNum/360)*array.length)])
                setPerson(reversed[Math.floor((randomNum/360)*array.length)])
                }}>
                {colorArray}
            </div>
            <button onClick={()=>{
                setAnimationClass(styles.run_animation)
                const randomNumber = Math.floor(Math.random()*360)
                setRandomNum(randomNumber);
            }} className={styles.spinButton}>Spin Wheel!</button>
            <p>{person}</p>
        </div>
    )
}
