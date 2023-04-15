import React from 'react';
import Image from 'next/image'
import styles from '@/styles/LiftLog.module.css';
import liftLogo from '@/public/liftlog-icon.png';
import DropZone from './liftlogTarget';
import DragItem from './liftlogDrag';

export default function LiftLog() {
  // for drag and drop state
  const [daysExercises, setDaysExercises] = React.useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });

  const [dayClicked, setDayClicked] = React.useState(null)

  // function for changing state
  function handleDrop(day, itemId) {
    const exerciseIndex = Number(itemId.slice(9));
    const exercise = exercises[exerciseIndex];

    // Update the exercises state for the specific day
    setDaysExercises((prev) => ({
      ...prev,
      [day]: [
        ...prev[day],
        <p key={exercise + prev[day].length} className={styles.day_exercise}>
          {exercise}
        </p>,
      ],
    }));
  }

  // all exercises array
  const exercises = [
    'Cable Flys',
    'French Press',
    'Turkish diet-up',
    'Box Jumps',
    'Donut Eating',
    'Squats',
    'Leg Press',
    'Bicep Curls',
    'Push ups',
    'Dead Lifts',
    'Planks',
  ];

  // returns array of Dropzones
  function dayOfWeek() {
    // array of all the days of the week
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    // to match today's day to make it "glow"
    const currentDate = new Date();
    const today = days[currentDate.getDay()];

    return days.map((day) => {
      const isToday = today === day;
      return (
        <DropZone
          key={day}
          id={day}
          onDrop={(matchDay, itemId) => {
            handleDrop(matchDay, itemId);
          }}
          className={isToday ? styles.today : styles.day}
          day={day}
          setDayClicked={setDayClicked}
        >
          {day}
          {daysExercises[day]}
        </DropZone>
      );
    });
  }

  // will render array of JSX week days later
  const daysArray = dayOfWeek();

  // returns all drag targets
  const exercisesMenu = () => {
    return exercises.map((el, index) => {
      return (
        <DragItem
          key={el}
          id={`exercise-${index}`}
          text={el}
          className={styles.exercise}
        />
      );
    });
  };

  // main return for App
  return (
        <div className={styles.App}>
            <div className={styles.Week}>
                {daysArray}
            </div>
            <div>
                <Image src={liftLogo} className={styles.liftLogo} alt='liftlog logo'/>
                <div className={styles.menu}>{exercisesMenu()}</div>
            </div>
        </div>
  );
}