//libs
import React from 'react';

//components
import { TopNavigation } from '@ui-kitten/components';
import { BalanceContainer, BalanceCount } from './Header.style';

//icons
import DiamondIcon from '@assets/svg/diamond.svg';

//hooks
import { useUser } from '@hooks';

const Header = () => {
  const { balance } = useUser();

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
