//libs
import React from 'react';

//components
import { Input, Label } from './TextInput.style';

const TextInput = ({ label, placeholder, isTextArea, ...props }) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Input
        paddingLeft={12}
        paddingRight={12}
        placeholder={placeholder}
        multiline={isTextArea}
        numberOfLines={isTextArea ? 4 : null}
        {...props}
      />
    </>
  );
};

export { TextInput };
