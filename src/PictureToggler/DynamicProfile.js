import React from 'react';
import styled from 'styled-components';

export default function DynamicProfile({src, name}) {
  return (
    <div>
      <img
        src={src}
        alt={name}
      />
      <StyledCaption>{name}</StyledCaption>
    </div>
  )
}

const StyledCaption = styled.div`
  font-family: 'Brush Script MT', cursive;
  font-size: 2rem;
`;

