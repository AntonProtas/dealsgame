//libs
import React from 'react';

import {
  Container,
  Button,
  ButtonIcon,
  Count,
  Content,
  Label
} from './NumberInput.style';

//styles
import { shadow } from '@styles';

//icons
import DiamondIcon from '@assets/svg/diamond.svg';

const NumberInput = ({
  value = 0,
  onChange,
  label,
  children,
  step = 10,
  isPositive = true,
  max = 100,
  min = 10
}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Container>
        <Button
          onPress={() => onChange(value - step)}
          activeOpacity={0.7}
          style={shadow.default}
          disabled={value <= min}
        >
          <ButtonIcon name="minus-outline" fill="black" />
        </Button>
        <Content>
          <DiamondIcon width={40} height={40} />
          <Count>{value}</Count>
        </Content>
        <Button
          onPress={() => onChange(value + step)}
          activeOpacity={0.7}
          style={shadow.default}
          disabled={value >= max}
        >
          <ButtonIcon name="plus-outline" fill="black" />
        </Button>
      </Container>
    </>
  );
};

export { NumberInput };
