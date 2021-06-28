//libs
import React from 'react';

//components
import {
  Container,
  HabitIcon,
  TitleContainer,
  Title,
  CountContainer,
  Count
} from './Header.style';

import isEmpty from 'lodash/isEmpty';

//icons
import DiamondIcon from '@assets/svg/diamond.svg';

//constants
import { goodHabitsIcons, badHabitsIcons } from '@constants';

const Header = ({ name, isGood, price, award, icon }) => {
  const icons = !isGood ? badHabitsIcons : goodHabitsIcons;

  const habitIcon = icons.find((item) => item.src === icon);

  const habitIconSource = !isEmpty(habitIcon)
    ? habitIcon.iconSource
    : icons[0].iconSource;

  return (
    <Container>
      {habitIconSource && <HabitIcon source={habitIconSource} />}
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
