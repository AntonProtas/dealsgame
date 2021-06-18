//libs
import styled from 'styled-components/native';

//components
import { Button } from '@ui-kitten/components';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconButton = styled(Button)`
  width: 60px;
  height: 60px;
  margin: 2px;
  border-radius: 30px;
`;
