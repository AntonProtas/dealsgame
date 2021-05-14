//libs
import styled from 'styled-components/native';

//components
import { Icon, List } from '@ui-kitten/components';
import { Button } from '@ui-kitten/components';

export const AddNewHabitButton = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  bottom: 10px;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
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
  width: 50px;
  height: 50px;
`;

export const HabitsList = styled.FlatList`
  flex-grow: 1;
  background-color: white;
  padding-bottom: 200px;
`;

export const EmptyBlock = styled.View`
  flex: 1;
  height: 200px;
  min-height: 200px;
  background-color: green;
`;
