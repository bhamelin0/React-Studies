import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
      <StyledLegend>Which animal is your favorite animal?</StyledLegend>

      {data ?
        <div>
          {data.map((profile) => 
            <div key={profile.id}>
              <input type="radio" id={profile.id} name="images" value={data.indexOf(profile)} checked={faveIndex == data.indexOf(profile)} onChange={onRadioClick} />
              <label htmlFor={profile.id}>{profile.name}</label>
            </div>
          )}
          <DynamicProfile src={data[faveIndex].url} name={data[faveIndex].name}/>
        </div>

      : <div>loading...</div> }
    </div>
  )
}

const StyledLegend = styled.legend`
  font-family: 'Brush Script MT', cursive;
  font-size: 2rem;
`;
