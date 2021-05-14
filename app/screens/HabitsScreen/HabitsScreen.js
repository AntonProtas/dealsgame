//libs
import React, { useCallback } from 'react';

//components
import { HabitsList, AddNewHabitButton, PlusIcon } from './HabitsScreen.style';
import { Layout } from '@ui-kitten/components';

//mock
import { items } from './mock-items.js';

//components
import { HabitCard } from '@components';
import { AddHabitModal } from '@modals';

//hooks
import { useToggle } from '@hooks';

import { StyleSheet } from 'react-native';

const HabitsScreen = () => {
  const [addHabitModalIsOpen, setAddHabitModalIsOpen] = useToggle();

  const renderItem = (info) => {
    return <HabitCard {...info.item} />;
  };

  const handleCloseAddHabitModal = useCallback(() => {
    setAddHabitModalIsOpen(false);
  }, [setAddHabitModalIsOpen]);

  return (
    <Layout>
      <HabitsList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      <AddNewHabitButton
        style={styles.shadow}
        onPress={() => setAddHabitModalIsOpen(true)}
      >
        <PlusIcon name="plus-outline" fill="black" />
      </AddNewHabitButton>
      <AddHabitModal isOpen={true} onClose={handleCloseAddHabitModal} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6
  }
});

export { HabitCard };

export { HabitsScreen };
