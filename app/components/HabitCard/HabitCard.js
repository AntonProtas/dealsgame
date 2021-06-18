//libs
import React from 'react';

//components
import { Card, Description } from './HabitCard.style.js';
import Header from './Header';
import Footer from './Footer';

//styles
import { shadow } from '@styles';

const HabitCard = ({ ...habit }) => {
  const { id, description, onDelete, onEdit } = habit;

  const handleDeleteCard = () => onDelete(id);

  const handleEditCard = () => onEdit(habit);

  return (
    <Card style={shadow.card} status="basic">
      <Header {...habit} />
      {description && <Description category="s1">{description}</Description>}
      <Footer onDelete={handleDeleteCard} onEdit={handleEditCard} />
    </Card>
  );
};

export { HabitCard };
