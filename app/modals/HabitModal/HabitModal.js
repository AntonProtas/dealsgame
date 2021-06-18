//libs
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import pickBy from 'lodash/pickBy';
import isEmpty from 'lodash/isEmpty';

import { v4 as uuidv4 } from 'uuid';

//components
import { Modal, ScrollView, View } from 'react-native';
import {
  Container,
  CloseButton,
  Title,
  Header,
  SubmitButton,
  SubmitButtonText,
  ExtraTitle
} from './HabitModal.style';
import CloseIcon from '@assets/svg/close.svg';
import { Section, TextInput, NumberInput } from '@components';

//schema
import { habitSchema } from './habitSchema';

const HabitModal = ({
  onAddNewHabit,
  onEditHabit,
  onClose,
  isOpen,
  editableHabit,
  isBadHabit
}) => {
  const isEdit = !isEmpty(editableHabit);

  const {
    control,
    getValues,
    reset,
    formState: { isValid, isDirty }
  } = useForm({
    mode: 'all',
    resolver: yupResolver(habitSchema)
  });

  const handleAddNewHabit = () => {
    onAddNewHabit({
      id: uuidv4(),
      ...pickBy(getValues()),
      ...(isBadHabit ? { isBad: true } : { isGood: true })
    });

    reset();

    onClose();
  };

  const handleEditHabit = () => {
    onEditHabit({
      id: editableHabit.id,
      ...pickBy(getValues())
    });

    reset();

    onClose();
  };

  const handleSubmit = isEdit ? handleEditHabit : handleAddNewHabit;

  const handleCloseModal = () => {
    reset();
    onClose();
  };

  const getDefaultCount = () => {
    if (!isEdit) {
      return 10;
    } else {
      return isBadHabit
        ? editableHabit?.price ?? 10
        : editableHabit?.award ?? 10;
    }
  };

  const count = getDefaultCount();

  console.log('isEdit', isEdit);

  console.log('count', count);

  console.log('editableHabit', editableHabit);

  return (
    <Modal visible={isOpen} animationType="slide" transparent={false}>
      <Container>
        <ScrollView>
          <Header>
            <View>
              <Title category="h3">form {isEdit ? 'edit ' : 'a new '}</Title>
              <ExtraTitle>{!isBadHabit ? 'GOOD' : 'BAD'}</ExtraTitle>
              <Title category="h3">habit</Title>
            </View>

            <CloseButton
              onPress={handleCloseModal}
              appearance="ghost"
              accessoryLeft={() => (
                <CloseIcon width={26} height={26} fill="black" />
              )}
            />
          </Header>
          <Section>
            <Controller
              control={control}
              name="name"
              defaultValue={isEdit ? editableHabit?.name : ''}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  label="name*"
                  placeholder="name"
                />
              )}
            />
          </Section>
          <Section>
            <Controller
              control={control}
              name="description"
              defaultValue={isEdit ? editableHabit?.description : ''}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  onChangeText={onChange}
                  value={value}
                  label="description"
                  placeholder="description"
                  isTextArea
                />
              )}
            />
          </Section>
          <Section>
            <Controller
              control={control}
              name={isBadHabit ? 'price' : 'award'}
              defaultValue={count}
              render={({ field: { onChange, value } }) => (
                <NumberInput
                  value={value}
                  onChange={onChange}
                  label={isBadHabit ? 'price' : 'award'}
                />
              )}
            />
          </Section>
          <Section>
            <SubmitButton
              onPress={handleSubmit}
              disabled={!isDirty || !isValid}
            >
              <SubmitButtonText>
                {isEdit ? 'edit the habit' : 'start a habit'}
              </SubmitButtonText>
            </SubmitButton>
          </Section>
        </ScrollView>
      </Container>
    </Modal>
  );
};

HabitModal.defaultProps = {
  isOpen: false,
  isEdit: false
};

export { HabitModal };
