//libs
import styled from 'styled-components/native';

//components
import Modal from 'react-native-modal';

export const ModalContainer = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

export const ModalContent = styled.View`
  justify-content: flex-start;
  height: 440px;
  padding-top: 35px;
  padding-bottom: 20px;
  background-color: white;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
`;
