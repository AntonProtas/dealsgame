//libs
import React from 'react';

//components
import { Layout, Text } from '@ui-kitten/components';
import { TouchableOpacity, StyleSheet } from 'react-native';

//styles
import { shadow } from '@styles';

export const TestScreen = () => {
  return (
    <Layout level="1">
      <Text category="h3">TestScreen</Text>
      <TouchableOpacity
        style={[styles.card, shadow.default]}
        activeOpacity={0.7}
        onLongPress={() => alert('ALert')}
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
