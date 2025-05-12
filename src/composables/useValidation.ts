import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

export function useValidation(requireName = false) {
  const schema = yup.object({
    email: yup
      .string()
      .required('Email or phone is required')
      .matches(/^(\+?\d{10,13}|[^@\s]+@[^@\s]+\.[^@\s]+)$/, 'Incorrect email or phone number'),
    password: yup.string().min(6, 'Minimum 6 symbols').required('Password is required'),

    text: requireName ? yup.string().required('Name is required') : yup.string(),

    firstName: requireName ? yup.string().required('First name is required') : yup.string(),
    lastName: requireName ? yup.string().required('Last name is required') : yup.string(),
    newPassword: requireName ? yup.string().required('New password is required') : yup.string(),
    confirmPassword: requireName
      ? yup
          .string()
          .oneOf([yup.ref('newPassword')], 'Passwords must match')
          .required('Confirm password is required')
      : yup.string(),
    address: requireName ? yup.string().required('Address is required') : yup.string(),
  })

  const { handleSubmit } = useForm({
    validationSchema: schema,
  })

  const { value: email, errorMessage: emailError, meta: emailMeta } = useField('email')
  const { value: password, errorMessage: passwordError, meta: passwordMeta } = useField('password')
  const { value: text, errorMessage: textError, meta: textMeta } = useField('text')

  const { value: firstName, errorMessage: firstNameError, meta: firstNameMeta } = useField('firstName')
  const { value: lastName, errorMessage: lastNameError, meta: lastNameMeta } = useField('lastName')
  const { value: newPassword, errorMessage: newPasswordError, meta: newPasswordMeta } = useField('newPassword')
  const { value: confirmPassword, errorMessage: confirmPasswordError, meta: confirmPasswordMeta } = useField('confirmPassword')
  const { value: address, errorMessage: addressError, meta: addressMeta } = useField('address')

  const onSubmit = handleSubmit

  const fields = { email, password, text, firstName, lastName, newPassword, confirmPassword, address }
  const errors = {
    emailError,
    passwordError,
    textError,
    firstNameError,
    lastNameError,
    newPasswordError,
    confirmPasswordError,
    addressError,
  }
  const metas = {
    emailMeta,
    passwordMeta,
    textMeta,
    firstNameMeta,
    lastNameMeta,
    newPasswordMeta,
    confirmPasswordMeta,
    addressMeta,
  }

  return {
    onSubmit,
    fields,
    errors,
    metas,
  }
}
