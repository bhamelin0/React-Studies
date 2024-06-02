import React, { useState, useEffect } from 'react';
import DynamicProfile from './DynamicProfile.js'; 

export default function ProfileToggler() {

  const [faveIndex, setFaveIndex] = useState(0);
  const [data, setData] = useState(null);

  function onRadioClick(e) {
    setFaveIndex(e.target.value);
  }

  useEffect(() => {
    fetch('http://localhost:3001/profiles')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <legend>Which animal is your favorite animal?</legend>

      {data ?
        <div>
          {data.map((profile) => 
            <div>
              <input type="radio" id={profile.id} name="images" value={data.indexOf(profile)} checked={faveIndex === data.indexOf(profile)} onClick={onRadioClick} />
              <label for={profile.id}>{profile.name}</label>
            </div>
          )}
          <DynamicProfile src={data[faveIndex].url} name={data[faveIndex].name}/>
        </div>

      : <div>loading...</div> }
    </div>
  )
}
  