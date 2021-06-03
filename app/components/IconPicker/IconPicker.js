//libs
import React, { useState, useCallback } from 'react';

//components
import { ContainerIcons } from './IconPicker.style';
import { Icon } from './Icon';

const IconPicker = ({ defaultIcons, onIconPress }) => {
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

IconPicker.defaultProps = {
  defaultIcons: [],
  icons: []
};

export { IconPicker };
