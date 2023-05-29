import React, {useRef, useState, useEffect} from 'react'
import styles from '@/styles/CodeHort.module.css'
import Image from 'next/image'
import Codehort_main from '@/public/codehort-main.png'

export default function App () {

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

    const [randomNum, setRandomNum] = React.useState(0)
    const [animationClass, setAnimationClass] = React.useState('')
    const [person, setPerson] = React.useState('')
    const rootRef = React.useRef(null);
    const audioRef = useRef(null);

  const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

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
                playSound();
            }} className={styles.spinButton}>Spin Wheel!</button>
            <p>{person}</p>
            <audio ref={audioRef} src="/client_assets_wheel_sfx.mp3" />
            {isMobile ? <Image src={Codehort_main} style={{ width: '300px', height: '100px', margin: '10px'}} alt='codehort sample image'/> : <Image src={Codehort_main} style={{ width: '600px', height: '200px', margin: '10px'}} alt='codehort sample image'/> }
        </div>
    )
}
