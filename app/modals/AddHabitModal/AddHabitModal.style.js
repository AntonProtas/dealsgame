//libs
import styled from 'styled-components/native';

//components
import { Button, Text } from '@ui-kitten/components';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 12px;
`;

export const CloseButton = styled(Button)`
  width: 60px;
  height: 60px;
  margin: 2px;
`;

export const Description = styled.Text`
  font-size: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-weight: 700;
`;

// export const Input = styled.Input``;
