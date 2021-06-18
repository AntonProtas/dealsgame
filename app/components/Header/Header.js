//libs
import React from 'react';
import { useSelector } from 'react-redux';

//selectors
import { getBalance } from '@store/user/selectors';

//components
import { TopNavigation } from '@ui-kitten/components';
import { BalanceContainer, BalanceCount } from './Header.style';

//icons
import DiamondIcon from '@assets/svg/diamond.svg';

const Header = () => {
  const balance = useSelector(getBalance);

  return (
    <TopNavigation
      accessoryRight={() => (
        <BalanceContainer>
          <DiamondIcon width={32} height={32} />
          <BalanceCount>{balance ?? 0}</BalanceCount>
        </BalanceContainer>
      )}
    />
  );
};

export { Header };
