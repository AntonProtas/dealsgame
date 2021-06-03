import * as yup from 'yup';

export const habitSchema = yup.object().shape({
  name: yup.string().required('no name provided :('),
  description: yup.string()
});
