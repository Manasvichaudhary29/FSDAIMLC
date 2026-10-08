import React, { useState } from 'react';

// import StateHandling from './components/StateHandling';

import mypic from './components/mypic.jpeg';
function ImageManipulation() {
  const [mypicheigth, setmypicheight] = useState(200);
  const [mypicAngle,setmypicAngle]= useState(30);
  function setheight() {
    setmypicheight(mypicheigth + 10);
  }
  function setAngle(){
    setmypicAngle(mypicAngle+30)
  }
  return (
    <div>
      <h2 style={{ color: 'red', backgroundColor: 'black' }}> Image Manipulation</h2>
      <div
        style={{border: '2px solid red',height: '400px',width: '500px',marginLeft: '50px',
          marginRight: '50px'
 
        }}>
        <img src={mypic}height={mypicheigth}width={500} style={{transform:`rotate(${mypicAngle}deg)`}}/>
      </div>
      <button onClick={setheight}>Enhance Height</button>
      <button onClick={setAngle}>rotate angle </button>
    </div>
  );
}
export default ImageManipulation;
  
    