//libs
import React from 'react';

import { Container, Header, Label, Divider, Content } from './Section.style';

const Section = ({ label, children }) => {
  return (
    <Container>
      <Header>
        <Label>{label}</Label>
        <Divider />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export { Section };
