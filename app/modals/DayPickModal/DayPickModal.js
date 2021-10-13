//libs
import React from 'react';

//components
import { ModalContainer, ModalContent } from './DayPickModal.style';
import { CalendarList } from 'react-native-calendars';

//styles
import { shadow } from '@styles';

const calendarTheme = {
  textDayFontSize: 20,
  textMonthFontSize: 32
};

export const DayPickModal = ({ isOpen, onClose }) => {
  return (
    <ModalContainer
      isVisible={isOpen}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down"
      backdropOpacity={0.4}
    >
      <ModalContent style={shadow.card}>
        <CalendarList
          horizontal
          pagingEnabled
          hideExtraDays={false}
          hideArrows={false}
          theme={calendarTheme}
        />
      </ModalContent>
    </ModalContainer>
  );
};
