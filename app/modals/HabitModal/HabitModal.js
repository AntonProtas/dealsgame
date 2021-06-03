//libs
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import pickBy from 'lodash/pickBy';
import isEmpty from 'lodash/isEmpty';

import { v4 as uuidv4 } from 'uuid';

//components
import { Modal, ScrollView } from 'react-native';
import {
  Container,
  CloseButton,
  Title,
  Header,
  SubmitButton,
  SubmitButtonText
} from './HabitModal.style';
import CloseIcon from '@assets/svg/close.svg';
import { Section, TextInput } from '@components';

//schema
import { habitSchema } from './habitSchema';

const HabitModal = ({
  onAddNewHabit,
  onEditHabit,
  onClose,
  isOpen,
  editableHabit
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

  console.log(1);

  console.log('form values', getValues());

  const handleAddNewHabit = () => {
    onAddNewHabit({
      id: uuidv4(),
      ...pickBy(getValues())
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

  return (
    <Modal visible={isOpen} animationType="slide" transparent={false}>
      <Container>
        <ScrollView>
          <Header>
            <Title category="h3">form a new habit</Title>
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
