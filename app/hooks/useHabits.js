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
} from '@store/habits/slice';

export const useHabits = ({ isBadHabits }) => {
  const dispatch = useDispatch();

  const allHabits = useSelector(getHabits);

  const goodHabits = useMemo(
    () => allHabits.results.filter((habit) => habit.isGood),
    [allHabits]
  );

  const badHabits = useMemo(
    () => allHabits.results.filter((habit) => habit.isBad),
    [allHabits]
  );

  const habits = isBadHabits ? badHabits : goodHabits;

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
