import * as yup from 'yup';

const validEmailRegex = RegExp(
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
)


export const contactFormValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .required('Email address is required')
    .matches(validEmailRegex, 'Email address is invalid'),
  details: yup.string().nullable().max(255, 'Subject is too long'),
})
