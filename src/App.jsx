import React, { useState } from 'react';
import './index.css';

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, direction: 'NORTH' });

  const moveForward = () => {
    let { x, y, direction } = position;
    if (direction === 'SOUTH' && y < 4) y++;
    if (direction === 'EAST' && x < 4) x++;
    if (direction === 'NORTH' && y > 0) y--;
    if (direction === 'WEST' && x > 0) x--;
    setPosition({ x, y, direction });
  };

  const rotateLeft = () => {
    const currentDirectionIndex = directions.indexOf(position.direction);
    const newDirection = directions[(currentDirectionIndex + 3) % 4];
    setPosition({ ...position, direction: newDirection });
  };

  const rotateRight = () => {
    const currentDirectionIndex = directions.indexOf(position.direction);
    const newDirection = directions[(currentDirectionIndex + 1) % 4];
    setPosition({ ...position, direction: newDirection });
  };

  return (
    <div className="container">
      <div className="grid">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="grid-cell">
            {position.x === i % 5 && position.y === Math.floor(i / 5) && (
              <div className="robot">{position.direction}</div>
            )}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </div>
  );
};

export default App;
