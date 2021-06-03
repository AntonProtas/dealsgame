//libs
import React, { memo } from 'react';

//components
import { TouchableOpacity, View } from 'react-native';
import { Image } from './Icon.style';

const Icon = memo(({ url, source, onIconPress, isActive }) => {
  const handleIconPress = () => onIconPress(url);

  return (
    <TouchableOpacity onPress={handleIconPress}>
      <View>
        <Image key={url} source={source} isActive={isActive} />
      </View>
    </TouchableOpacity>
  );
});

Icon.defaultProps = {
  onIconPress: () => {},
  isActive: false
};

export { Icon };
