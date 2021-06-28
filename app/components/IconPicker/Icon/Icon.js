//libs
import React, { memo } from 'react';

//components
import { TouchableOpacity, View } from 'react-native';
import { Image } from './Icon.style';

const Icon = memo(({ src, iconSource, onIconPress, isActive }) => {
  const handleIconPress = () => onIconPress(src);

  return (
    <TouchableOpacity onPress={handleIconPress}>
      <View>
        <Image source={iconSource} isActive={isActive} />
      </View>
    </TouchableOpacity>
  );
});

Icon.defaultProps = {
  onIconPress: () => {},
  isActive: false
};

export { Icon };
