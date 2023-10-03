'use client'
import React, { useState } from 'react';

const RandomNumberComponent: React.FC = () => {
  const [number, setNumber] = useState<number>(0);

  const generateRandomNumber = (): void => {
    // Ger ett slumpmässigt tal mellan 0 och 100 (du kan justera som du vill)
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };

  return (
    <div>
      <button className='btn btn-secondary ' onClick= {generateRandomNumber}>Random</button>
      <p> random: {number}</p>
    </div>
  );
};

export default RandomNumberComponent;
