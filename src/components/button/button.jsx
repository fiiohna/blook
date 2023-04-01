import React from 'react';

const ExampleComponent = () => {
  
  function redeem(points) {
    console.log(`${points}`);
  }
  
  return (
    <button value={coupon} onClick={() => redeem()}>Greet</button>
  );
}

export default ExampleComponent;