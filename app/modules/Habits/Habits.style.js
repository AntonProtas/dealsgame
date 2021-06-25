//libs
import styled from 'styled-components/native';

//components
import { Icon, Button } from '@ui-kitten/components';

export const AddNewHabitButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  bottom: 10px;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: white;
  /* border: 2px solid black; */
  border-radius: 70px;
`;

export const CloseAddHabitModalButton = styled(Button)`
  width: 60px;
  height: 60px;
  margin: 2px;
  margin-left: auto;
`;

export const PlusIcon = styled(Icon)`
  width: 40px;
  height: 40px;
`;

export const HabitsList = styled.FlatList`
  flex-grow: 1;
  background-color: rgb(250, 249, 247);
  min-height: 100%;
`;
