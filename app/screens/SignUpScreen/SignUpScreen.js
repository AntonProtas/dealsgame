//libs
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

//components
import { CenteredLayout, FormWrapper, StyledInput } from './SignUpScreen.style';
import { Icon, Button } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from 'react-native';

//schema
import { signUpSchema } from './signUpYupSchema';

const SignUpScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const {
    control,
    getValues,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema)
  });

  const onSubmit = () => {
    const values = getValues();

    console.log(values);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <CenteredLayout>
      <FormWrapper>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Nickname"
              label="Nickname"
              size="medium"
              caption={errors.nickname?.message}
            />
          )}
          name="nickname"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Email"
              label="Email"
              size="medium"
              caption={errors.email?.message}
            />
          )}
          name="email"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <StyledInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Password"
              label="Password"
              size="medium"
              secureTextEntry={secureTextEntry}
              accessoryRight={renderIcon}
              caption={errors.password?.message}
            />
          )}
          name="password"
          defaultValue=""
        />
        <Button
          status="success"
          onPress={() => alert(JSON.stringify(getValues(), null, 2))}
          disabled={!isValid}
        >
          Go Go!
        </Button>
      </FormWrapper>
    </CenteredLayout>
  );
};

export { SignUpScreen };
