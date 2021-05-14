//libs
import styled from 'styled-components/native';

//components
// import { Button, Text } from '@ui-kitten/components';

export const Container = styled.View`
  min-height: 100px;
  border: 0px dotted black;
  border-bottom-width: 2px;
  border-style: dotted;
  border-radius: 0.0000001px;
  /* border-style: dashed; */
  /* background-color: green; */
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  /* background-color: blue; */
`;

export const Label = styled.Text`
  font-size: 24px;
  border: 2px dotted black;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;

  /* border-style: dashed; */

  border-left-width: 0;
  padding: 8px 12px;
`;

export const Divider = styled.View`
  height: 0;
  border: 1px dotted black;

  /* background-color: black; */
  flex: 1;
`;

export const Content = styled.View`
  padding: 20px 24px 40px;
  align-items: center;
`;
