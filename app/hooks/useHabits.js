//libs
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//selectors
import { getHabits } from '@store/habits/selectors';

//actions
import {
  addNewHabitAction,
  deleteHabitAction,
  editHabitAction
} from '@store/habits/slice.js';

export const useHabits = () => {
  const habits = useSelector(getHabits);
  console.log('useHabits', habits.results);

  const goodHabits = useMemo(
    () => habits.results.filter((habit) => habit.isGood),
    [habits]
  );

  const badHabits = useMemo(
    () => habits.results.filter((habit) => habit.isBad),
    [habits]
  );

  const dispatch = useDispatch();

  const handleAddNewHabit = useCallback(
    (habit) => {
      dispatch(addNewHabitAction(habit));
    },
    [dispatch]
  );

  const handleRemoveHabit = useCallback(
    (id) => {
      dispatch(deleteHabitAction(id));
    },
    [dispatch]
  );

  const handleEditHabit = useCallback(
    (habit) => {
      dispatch(editHabitAction(habit));
    },
    [dispatch]
  );

  return {
    habits,
    goodHabits,
    badHabits,
    handleAddNewHabit,
    handleRemoveHabit,
    handleEditHabit
  };
};
