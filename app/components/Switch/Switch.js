//libs
import React from 'react';

//components
import { Container, Label, StyledSwitch } from './Switch.style';

const Switch = ({ label, ...props }) => {
  return (
    <Container> 
      {label && <Label>{label}</Label>}
      <StyledSwitch {...props} />
    </Container>
  );
};

export { Switch };
