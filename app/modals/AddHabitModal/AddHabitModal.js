//libs
import React from 'react';

//components
import { Modal, ScrollView } from 'react-native';
import {
  Container,
  CloseButton,
  Title,
  Header
  // Input
} from './AddHabitModal.style';
import CloseIcon from '@assets/svg/close.svg';
import { Section } from '@components';

const AddHabitModal = ({ onClose, isOpen }) => {
  return (
    <Modal visible={isOpen} animationType="slide" transparent={false}>
      <Container>
        <Header>
          <Title category="h3">Form a new habit</Title>
          <CloseButton
            onPress={onClose}
            appearance="ghost"
            accessoryLeft={() => (
              <CloseIcon width={30} height={30} fill="black" />
            )}
          />
        </Header>
        <Section />
        <ScrollView />
      </Container>
    </Modal>
  );
};

AddHabitModal.defaultProps = {
  isOpen: false
};

export { AddHabitModal };
