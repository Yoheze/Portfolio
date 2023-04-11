import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from '@/styles/Pets.module.css';
import cat from '@/public/cat_idle.gif';
import walkingCat from '@/public/cat_walking.gif';
import dog from '@/public/dog_idle.gif';
import walkingDog from '@/public/dog_walking.gif';
import trex from '@/public/trex_idle.gif';
import walkingTrex from '@/public/trex_walking.gif';

function Pet({ visible=true }) {
  // set initial x and y positions to random positions on board
  const [petXPosition, setPetXPosition] = useState(Math.floor(Math.random() * 91));
  const [petYPosition, setPetYPosition] = useState(Math.floor(Math.random() * 39) + 36);
  const [petScale, setPetScale] = useState(100);
  const [petMoveState, setPetMoveState] = useState(false);
  const [flipPet, setFlipPet] = useState(false);

  //change this to petsActive SQL ?
  const [petFileId, setPetFileId] = useState('dog');

  //objects to make conditional rendering and correct css easier to impliment
  const petGifPairs = {
    dog: walkingDog,
    cat: walkingCat,
    trex: walkingTrex,
  };

  const idleGifPairs = {
    dog: dog,
    cat: cat,
    trex: trex,
  };

  useEffect(() => {
    //control pet position with arrow keys
    const handleKeyDown = (event) => {
        event.preventDefault();
      switch (event.key) {
      case 'ArrowUp':
        if (petYPosition > 35) setPetYPosition(petYPosition - 1);
        break;
      case 'ArrowDown':
        if (petYPosition < 75) setPetYPosition(petYPosition + 1);
        break;
      case 'ArrowRight':
        if (petXPosition < 90) setPetXPosition(petXPosition + 1);
        break;
      case 'ArrowLeft':
        if (petXPosition > 0) setPetXPosition(petXPosition - 1);
        setFlipPet(true);
        break;

      default:
        break;
      }

      //scale pet size based on change in position
      setPetScale(petYPosition * 2);

      //set move state to true
      setPetMoveState(true);
    };

    //set pet move state to false on keyup
    const handleKeyUp = (event) => {
      const moveKeys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
      if (moveKeys.includes(event.key)) {
        setPetMoveState(false);
        setFlipPet(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [petXPosition, petYPosition]);

  //change pet type by clicking on it
  const handlePetClick = () => {
    if (petFileId === 'dog') setPetFileId('trex');
    if (petFileId === 'trex') setPetFileId('cat');
    if (petFileId === 'cat') setPetFileId('dog');
  };
  // 	const handlePetDoubleClick = () => {
  // 		setShowPet(true);

  //  }
  //create newPet function
  //initi new pet coordinates

  if (!visible) return null;
  return (
    <div
      className={styles.petStyle}
      onClick={handlePetClick}
      // onDoubleClick={handlePetDoubleClick}

      style={{
        top: `${petYPosition}%`,
        left: `${petXPosition}%`,
      }}
    >
      <Image
        src={petMoveState ? petGifPairs[petFileId] : idleGifPairs[petFileId]}
        alt={petFileId}
        className={flipPet ? styles.walkingLeft : ''}
        style={{
          height: `${petScale}px`,
          width: `${petScale}px`,
          zIndex: '20'
        }}
      />
    </div>
  );
}

export default Pet;