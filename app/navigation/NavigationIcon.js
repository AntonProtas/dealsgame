//libs
import React from 'react';

//icons
import GoodIcon from '@assets/svg/good.svg';
import GoodColorIcon from '@assets/svg/good_fill.svg';
import BadIcon from '@assets/svg/bad.svg';
import BadColorIcon from '@assets/svg/bad_fill.svg';

const NavigationIcon = ({
  route,
  width = 36,
  height = 36,
  fill = 'black',
  isFocused = false
}) => {
  const getIconByRouteName = () =>
    ({
      GoodHabits: isFocused ? GoodColorIcon : GoodIcon,
      BadHabits: isFocused ? BadColorIcon : BadIcon
    }[route]);

  const Icon = getIconByRouteName();

  return <Icon width={width} height={height} fill={fill} />;
};

export { NavigationIcon };
