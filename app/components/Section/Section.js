//libs
import React from 'react';

import { Container, Content } from './Section.style';

const Section = ({ label, children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export { Section };
