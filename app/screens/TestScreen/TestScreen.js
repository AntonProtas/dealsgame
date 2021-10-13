//libs
import React, { useState } from 'react';

//components
import { Layout, Text } from '@ui-kitten/components';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

//styles
import { shadow } from '@styles';

import { LocalNotification } from '@api/notifications';

import { DayPickModal } from '@modals';

export const TestScreen = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseModal = () => setIsOpen(false);

  const handleButtonPress = () => {
    setIsOpen(true);
  };

  return (
    <Layout level="1">
      <TouchableOpacity
        style={[styles.card, shadow.default]}
        activeOpacity={0.7}
        onPress={handleButtonPress}
      />
      <DayPickModal isOpen={isOpen} onClose={handleCloseModal} />
    </Layout>
  );
};

export const styles = StyleSheet.create({
  card: {
    width: '30%',
    height: 200,
    backgroundColor: 'green',
    borderRadius: 24,
    alignSelf: 'center'
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0
    // marginLeft: 6,
    // marginRight: 6,
    // marginBottom: 0
  },
  root: {
    height: 440,
    paddingTop: 35,
    paddingBottom: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    justifyContent: 'flex-start'
  }
});
