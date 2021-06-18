//libs
import styled from 'styled-components/native';

//components
import { Icon } from '@ui-kitten/components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  background: #ecf0f3;
  padding: 20px 0;
  border-radius: 12px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: white;
  width: 42px;
  height: 42px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export const ButtonIcon = styled(Icon)`
  width: 32px;
  height: 32px;
`;

export const Count = styled.Text`
  padding-left: 4px;
  font-size: 24px;
  font-weight: 700;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  width: 130px;
`;

export const Label = styled.Text`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 18px;
`;
