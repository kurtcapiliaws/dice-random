import React, { useState } from 'react';
import Die from './Die';

const RollDice = () => {
  const [die1, setDie1] = useState('fas fa-dice-one');
  const [die2, setDie2] = useState('fas fa-dice-one');
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    // Set rolling to true to trigger the animation
    setRolling(true);

    // Simulate dice rolling (setTimeout)
    setTimeout(() => {
      // Generate random faces for the dice
      const newDie1 = getRandomFace();
      const newDie2 = getRandomFace();

      // Update state to re-render the dice with new faces
      setDie1(newDie1);
      setDie2(newDie2);

      // Set rolling back to false after animation completes
      setRolling(false);
    }, 1000); // Adjust the time based on your animation duration
  };

  const getRandomFace = () => {
    // Return a random face from the Font Awesome dice classes
    const faces = ['one', 'two', 'three', 'four', 'five', 'six'];
    const randomIndex = Math.floor(Math.random() * faces.length);
    return `fas fa-dice-${faces[randomIndex]}`;
  };

  return (
    <div>
      <Die face={die1} rolling={rolling} />
      <Die face={die2} rolling={rolling} />
      <button onClick={roll} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  );
};

export default RollDice;
