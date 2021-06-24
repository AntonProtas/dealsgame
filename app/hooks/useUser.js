//libs
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//selectors
import { getBalance } from '@store/user/selectors';

//actions
import {
  increaseBalanceAction,
  decreaseBalanceAction
} from '@store/user/slice';

export const useUser = () => {
  const dispatch = useDispatch();

  const balance = useSelector(getBalance);

  const setBalance = useCallback(
    (count, isGoodHabit) => {
      const action = isGoodHabit
        ? increaseBalanceAction
        : decreaseBalanceAction;

      dispatch(action(count));
    },
    [dispatch]
  );

  return { balance, setBalance };
};
