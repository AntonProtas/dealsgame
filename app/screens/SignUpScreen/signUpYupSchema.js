import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  nickname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required('no password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

export { signUpSchema };
