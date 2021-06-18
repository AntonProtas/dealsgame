//libs
import React, { useCallback, useState } from 'react';

//components
import { HabitsList, AddNewHabitButton, PlusIcon } from './Habits.style';
import { HabitCard } from '@components';
import { HabitModal } from '@modals';
import { Layout } from '@ui-kitten/components';

//styles
import { shadow } from '@styles';

//hooks
import { useHabits, useToggle } from '@hooks';

const Habits = ({ isBadHabits = false }) => {
  const {
    handleAddNewHabit,
    handleRemoveHabit,
    handleEditHabit,
    goodHabits,
    badHabits
  } = useHabits();

  const habits = isBadHabits ? badHabits : goodHabits;

  const [habitModalIsOpen, setHabitModalIsOpen] = useToggle();

  const handleCloseAddHabitModal = useCallback(() => {
    setHabitModalIsOpen(false);
    setEditableHabit(null);
  }, [setHabitModalIsOpen]);

  const [editableHabit, setEditableHabit] = useState(null);

  const handleOpenEditModal = (habit) => {
    setEditableHabit(habit);

    setHabitModalIsOpen(true);
  };

  const renderItem = (info) => (
    <HabitCard
      {...info.item}
      onDelete={handleRemoveHabit}
      onEdit={handleOpenEditModal}
    />
  );
  return (
    <Layout level="1">
      <HabitsList
        data={habits}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <AddNewHabitButton
        activeOpacity={0.7}
        style={shadow.default}
        onPress={() => setHabitModalIsOpen(true)}
      >
        <PlusIcon name="plus-outline" fill="black" />
      </AddNewHabitButton>
      <HabitModal
        isOpen={habitModalIsOpen}
        onClose={handleCloseAddHabitModal}
        onAddNewHabit={handleAddNewHabit}
        onEditHabit={handleEditHabit}
        editableHabit={editableHabit}
        isBadHabit={isBadHabits}
      />
    </Layout>
  );
};

export { Habits };
