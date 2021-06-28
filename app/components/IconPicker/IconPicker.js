//libs
import React, { useCallback } from 'react';

//components
import { ContainerIcons, Label } from './IconPicker.style';
import { Icon } from './Icon/Icon';

const IconPicker = ({ icons = [], label, activeIconSrc, onIconChange }) => {
  const handleSetIcon = useCallback(
    (iconSrc) => {
      onIconChange(iconSrc);
    },
    [onIconChange]
  );

  return (
    <>
      {label && <Label>{label}</Label>}
      <ContainerIcons>
        {icons.map(({ src, iconSource }, i) => (
          <Icon
            key={src}
            src={src}
            iconSource={iconSource}
            onIconPress={handleSetIcon}
            isActive={activeIconSrc === src}
          />
        ))}
      </ContainerIcons>
    </>
  );
};

export { IconPicker };
