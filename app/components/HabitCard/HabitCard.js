//libs
import React from 'react';

//components
import { Card, Description } from './HabitCard.style';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

//styles
import { shadow } from '@styles';

const HabitCard = ({ ...habit }) => {
  const { isGood, price, award, description, onDelete, onEdit, onComplete } =
    habit;

  const handleDeleteCard = () => onDelete(habit);

  const handleEditCard = () => onEdit(habit);

  const handleCompleteCard = () => {
    const count = isGood ? award : price;

    onComplete(count, isGood);
  };

  return (
    <Card
      style={shadow.card}
      activeOpacity={0.7}
      onLongPress={handleCompleteCard}
      delayLongPress={900}
    >
      <Header {...habit} />
      {description && <Description category="s1">{description}</Description>}
      <Footer onDelete={handleDeleteCard} onEdit={handleEditCard} />
    </Card>
  );
};

export { HabitCard };
