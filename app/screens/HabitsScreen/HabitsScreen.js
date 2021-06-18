//libs
import React, { useCallback, useState } from 'react';

//components
import { HabitsList, AddNewHabitButton, PlusIcon } from './HabitsScreen.style';
import { Layout } from '@ui-kitten/components';
import { HabitCard } from '@components';
import { HabitModal } from '@modals';

//styles
import { shadow } from '@styles';

//hooks
import { useHabits, useToggle } from '@hooks';

const HabitsScreen = ({ isGoodHabits }) => {
  const { habits, handleAddNewHabit, handleRemoveHabit, handleEditHabit } =
    useHabits();

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
    <Layout>
      <HabitsList
        data={habits.results}
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
        isOpen={false}
        onClose={handleCloseAddHabitModal}
        onAddNewHabit={handleAddNewHabit}
        onEditHabit={handleEditHabit}
        editableHabit={editableHabit}
        isGoodHabit={false}
      />
    </Layout>
  );
};

export { HabitsScreen };
