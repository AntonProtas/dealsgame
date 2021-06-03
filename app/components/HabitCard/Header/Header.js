//libs
import React from 'react';

//components
import { Container, HabitIconContainer, Title } from './Header.style';
import DefaultHabitIcon from '@assets/svg/default_habit.svg';

const Header = ({ name }) => {
  return (
    <Container>
      <HabitIconContainer>
        <DefaultHabitIcon width={45} height={45} fill="black" />
      </HabitIconContainer>
      <Title category="h5">{name}</Title>
    </Container>
  );
};

export { Header };
