//libs
import React from 'react';
import { StyleSheet } from 'react-native';

//components
import { Button, Card, Modal } from '@ui-kitten/components';
import { Controls, Title } from './ConfirmModal.style';

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  button: {
    margin: 4,
    height: 50,
    flex: 1
  }
});

const ConfirmModal = ({ isOpen = false, onSubmit, onClose, title }) => {
  return (
    <Modal
      visible={isOpen}
      backdropStyle={styles.backdrop}
      onBackdropPress={onClose}
    >
      <Card>
        {title && <Title>{title}</Title>}
        <Controls>
          <Button style={styles.button} onPress={onClose}>
            CANCEL
          </Button>
          <Button style={styles.button} onPress={onSubmit}>
            OK
          </Button>
        </Controls>
      </Card>
    </Modal>
  );
};

export { ConfirmModal };
