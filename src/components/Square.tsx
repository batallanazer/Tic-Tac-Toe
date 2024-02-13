import React from 'react';


interface SquareProp {
    value: number;
  }
function Square({ value }: SquareProp) {
  return <button className='square'>{value}</button>;
}

export default Square;