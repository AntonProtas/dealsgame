//libs
import styled from 'styled-components/native';

//components
import { Text } from '@ui-kitten/components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HabitIcon = styled.Image`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: 10px 0 10px 0;
  /* border: 2px solid black; */
  /* border-radius: 33px; */
`;

export const TitleContainer = styled.View`
  padding: 12px 20px;
  flex: 1;
`;

export const Title = styled(Text)`
  margin-bottom: 8px;
  font-weight: 700;
`;

export const CountContainer = styled.View`
  flex-direction: row;
`;

export const Count = styled.Text`
  font-size: 16px;
  line-height: 18px;
  color: rgb(98, 98, 98);
`;
