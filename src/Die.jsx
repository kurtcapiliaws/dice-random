import React from 'react';
import './RollDice.css'; // Import the CSS file for styling
const Die = ({ face, rolling }) => {
    return (
     <i className={`Die ${face} ${rolling ? 'rolling' : ''}`}></i>
    );
  };

export default Die;
