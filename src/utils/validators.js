import * as Yup from 'yup';

export const requiredMessage = (fieldName: string) =>
  `${fieldName} is required`;

export const validMessage = (fieldName: string) =>
  `Please enter valid ${fieldName}`;

export const minErrorMessage = (min: number) =>
  `Please enter atleast ${min} characters`;

const emailValidator = Yup.string()
  .email(validMessage('email'))
  .required(requiredMessage('Email'));

const passwordValidator = Yup.string()
  .required(requiredMessage('Password'))
  .min(8, minErrorMessage(8));

export const LoginSchema = Yup.object().shape({
  email: emailValidator,
  password: passwordValidator,
});

export const RegisterSchema = Yup.object().shape({
  email: emailValidator,
  password: passwordValidator,
  name: Yup.string().required(requiredMessage('Name')),
});