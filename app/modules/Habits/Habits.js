//libs
import React, { useCallback, useState } from 'react';
import isEmpty from 'lodash/isEmpty';

//components
import { HabitsList, AddNewHabitButton, PlusIcon } from './Habits.style';
import { HabitCard, NoItems } from '@components';
import { HabitModal, ConfirmModal } from '@modals';
import { Layout } from '@ui-kitten/components';

//styles
import { shadow } from '@styles';

//hooks
import { useHabits } from '@hooks';

const Habits = ({ isBadHabits = false }) => {
  const {
    handleAddNewHabit,
    handleRemoveHabit,
    handleEditHabit,
    goodHabits,
    badHabits
  } = useHabits();

  const habits = isBadHabits ? badHabits : goodHabits;

  const [modal, setModal] = useState(null);
  const [selectedHabit, setSelectedHabit] = useState(null);

  const habitsIsEmpty = isEmpty(habits);

  const handleCloseModal = useCallback(() => {
    setModal(null);
    setSelectedHabit(null);
  }, [setModal]);

  const handleOpenEditModal = (habit) => {
    setSelectedHabit(habit);
    setModal('habit');
  };

  const handleOpenConfirmModal = (habit) => {
    setSelectedHabit(habit);
    setModal('confirm');
  };

  const handleDeleteHabit = () => {
    handleRemoveHabit(selectedHabit?.id);
    handleCloseModal();
  };

  const renderItem = (info) => (
    <HabitCard
      {...info.item}
      onDelete={handleOpenConfirmModal}
      onEdit={handleOpenEditModal}
    />
  );
  return (
    <>
      <Layout level="1">
        {habitsIsEmpty ? (
          <NoItems />
        ) : (
          <>
            <HabitsList
              data={habits}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              // eslint-disable-next-line react-native/no-inline-styles
              contentContainerStyle={{ paddingBottom: 100 }}
            />
          </>
        )}
        <AddNewHabitButton
          activeOpacity={0.7}
          style={shadow.default}
          onPress={() => setModal('habit')}
        >
          <PlusIcon name="plus-outline" fill="black" />
        </AddNewHabitButton>
      </Layout>
      <HabitModal
        isOpen={modal === 'habit'}
        onClose={handleCloseModal}
        onAddNewHabit={handleAddNewHabit}
        onEditHabit={handleEditHabit}
        editableHabit={selectedHabit}
        isBadHabit={isBadHabits}
      />
      <ConfirmModal
        isOpen={modal === 'confirm'}
        onSubmit={handleDeleteHabit}
        onClose={handleCloseModal}
        title="Are you sure you want to delete this habit?"
      />
    </>
  );
};

export { Habits };
