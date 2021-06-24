//libs
import styled from 'styled-components/native';

//components
import { Text } from '@ui-kitten/components';

export const Card = styled.TouchableOpacity`
  padding: 20px 24px;
  border-radius: 16px;
  margin: 20px;
  background-color: white;
`;

export const Title = styled(Text)`
  padding: 12px 20px;
`;

export const Footer = styled.View`
  padding: 12px 20px;
`;

export const Description = styled(Text)`
  padding: 20px 24px;
  font-weight: 500;
  font-size: 18px;
`;
