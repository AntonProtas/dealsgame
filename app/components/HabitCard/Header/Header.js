//libs
import React from 'react';

//components
import {
  Container,
  HabitIconContainer,
  TitleContainer,
  Title,
  CountContainer,
  Count
} from './Header.style';

//icons
import DefaultHabitIcon from '@assets/svg/default_habit.svg';
import DiamondIcon from '@assets/svg/diamond.svg';

const Header = ({ name, isGood, price, award }) => {
  return (
    <Container>
      <HabitIconContainer>
        <DefaultHabitIcon width={45} height={45} fill="black" />
      </HabitIconContainer>
      <TitleContainer>
        <Title category="h5">{name}</Title>
        <CountContainer>
          <Count>{`The ${isGood ? 'award' : 'price'} is will be `}</Count>
          <DiamondIcon width={18} height={18} />
          <Count>{isGood ? award : price}</Count>
        </CountContainer>
      </TitleContainer>
    </Container>
  );
};

export { Header };
