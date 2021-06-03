//libs
import styled from 'styled-components/native';

//components
import { Text } from '@ui-kitten/components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HabitIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  margin: 10px 0 10px 0;
  /* border: 2px solid black; */
  border-radius: 33px;
`;

export const Title = styled(Text)`
  padding: 12px 20px;
  flex: 1;
  font-weight: 700;
`;
