//libs
import styled from 'styled-components/native';

//components
import { Layout, Input } from '@ui-kitten/components';

export const CenteredLayout = styled(Layout)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.View`
  width: 90%;
`;

export const StyledInput = styled(Input)`
  margin-bottom: 20px;
  background-color: white;
  border-color: black;
`;
