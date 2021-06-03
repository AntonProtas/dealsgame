//libs
import React from 'react';

//components
import { Card, Description } from './HabitCard.style.js';
import Header from './Header';
import Footer from './Footer';

import { StyleSheet } from 'react-native';

const HabitCard = ({ id, name, description, onDelete, onEdit }) => {
  const handleDeleteCard = () => onDelete(id);

  const handleEditCard = () => onEdit({ id, name, description });

  return (
    <Card style={styles.shadow} status="basic">
      <Header name={name} />
      {description && <Description category="s1">{description}</Description>}
      <Footer onDelete={handleDeleteCard} onEdit={handleEditCard} />
    </Card>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  }
});

export { HabitCard };
