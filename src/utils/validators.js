import * as Yup from 'yup';

export const requiredMessage = (fieldName) =>
  `${fieldName} is required`;

export const validMessage = (fieldName) =>
  `Please enter valid ${fieldName}`;

export const minErrorMessage = (min) =>
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

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const MusicCreatorSchema = Yup.object({
  firstName: Yup
    .string('Enter your first name')
    .min(3, minErrorMessage(3))
    .required(requiredMessage('First Name')),
  lastName: Yup
    .string('Enter your last name')
    .min(3, minErrorMessage(3))
    .required(requiredMessage('Last Name')),
  artistName: Yup
    .string('Enter your artist name')
    .min(3, minErrorMessage(3))
    .required('Your artist name is required'),
    email:emailValidator,
    phoneNumber: Yup.string()
    .required("required")
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, "too short")
    .max(10, "too long"),
    country: Yup
    .string('Enter your Country')
    .required('This Field is required'),
    // genre: Yup.array().required("At least one checkbox is required") 
});
