import React, { useState } from 'react';
import Profile from '../ReactFirstComponent/MyFirstComponent.js'; 
import ProfileTwo from '../ReactFirstComponent/MySecondComponent.js'; 

export default function ProfileToggler() {

  const [faveIndex, setFaveIndex] = useState(0);

  function onRadioClick(e) {
    setFaveIndex(e.target.value);
  }

  // TODO: Build this pattern out via a map and send the data as an object
  return (
    <div>
      <legend>Which animal is your favorite animal?</legend>

      <div>
        <input type="radio" id="bird" name="images" value="0" checked={faveIndex == 0} onClick={onRadioClick} />
        <label for="bird">The Birds</label>

        <input type="radio" id="dog" name="images" value="1" checked={faveIndex == 1} onClick={onRadioClick} />
        <label for="dog">The Dog</label>
      </div>

      {faveIndex == 0 ? <Profile/> : <ProfileTwo/>}
    </div>
  )
}
  