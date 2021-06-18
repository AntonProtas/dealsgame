//libs
import styled from 'styled-components/native';

//components
import { Button, Text } from '@ui-kitten/components';

export const Container = styled.View`
  flex: 1;
  background-color: rgb(250, 249, 247);
  padding: 12px;
`;

//rgb(250, 249, 247);

export const CloseButton = styled(Button)`
  width: 60px;
  height: 60px;
  margin-left: auto;
`;

export const Description = styled.Text`
  font-size: 50px;
`;

export const Header = styled.View`
  padding: 20px 24px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-weight: 700;
`;

export const ExtraTitle = styled.Text`
  font-weight: 700;
  font-size: 48px;
`;

export const TextInput = styled.TextInput`
  border: 2px solid black;
  border-top-width: 2px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 8px;
  border-radius: 12px;
`;

export const InputLabel = styled.Text`
  font-weight: 700;
  font-size: 18px;
`;

export const SubmitButton = styled.TouchableHighlight`
  border-radius: 24px;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

export const SubmitButtonText = styled.Text`
  align-items: center;
  text-align: center;
  padding: 10px;
  border-radius: 24px;
  background-color: black;
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  margin: 8px;
`;
