//libs
import React from 'react';

//components
import { Layout, Text } from '@ui-kitten/components';
import { TouchableOpacity, StyleSheet } from 'react-native';

//styles
import { shadow } from '@styles';

import { LocalNotification } from '@api/notifications';

export const TestScreen = () => {
  const handleButtonPress = () => {
    LocalNotification();
  };

  return (
    <Layout level="1">
      <Text category="h3">TestScreen</Text>
      <TouchableOpacity
        style={[styles.card, shadow.default]}
        activeOpacity={0.7}
        onPress={handleButtonPress}
      />
    </Layout>
  );
};

export const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 24,
    alignSelf: 'center'
  }
});
