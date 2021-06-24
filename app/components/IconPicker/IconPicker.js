//libs
import React, { useState, useCallback } from 'react';

//components
import { ContainerIcons } from './IconPicker.style';
import { Icon } from './Icon';

const IconPicker = ({ defaultIcons = [] }) => {
  const [activeIconUrl, setActiveIconUrl] = useState(null);

  const handleSetIcon = useCallback((iconUrl) => {
    setActiveIconUrl(iconUrl);
  }, []);

  return (
    <ContainerIcons>
      {defaultIcons.map((icon, i) => (
        <Icon
          key={icon.url}
          url={icon.url}
          onIconPress={handleSetIcon}
          source={icon.source}
          isActive={activeIconUrl === icon.url}
        />
      ))}
    </ContainerIcons>
  );
};

export { IconPicker };
