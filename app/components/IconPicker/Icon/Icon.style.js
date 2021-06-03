//libs
import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  margin: 8px;
  opacity: ${(props) => (props.isActive ? 0.3 : 1)};
`;
