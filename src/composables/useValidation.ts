import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

export function useValidation({
  requireEmail = false,
  requirePassword = false,
  requireText = false,
  requireFirstName = false,
  requireLastName = false,
  requireNewPassword = false,
  requireConfirmPassword = false,
  requireAddress = false,
  requirePhone = false,
} = {}) {
  const schema = yup.object({
    email: requireEmail
      ? yup
          .string()
          .required('Email or phone is required')
          .matches(/^(\+?\d{10,13}|[^@\s]+@[^@\s]+\.[^@\s]+)$/, 'Incorrect email or phone number')
      : yup.string(),

    password: requirePassword ? yup.string().min(6, 'Minimum 6 symbols').required('Password is required') : yup.string(),

    text: requireText ? yup.string().required('Name is required') : yup.string(),

    firstName: requireFirstName ? yup.string().required('First name is required') : yup.string(),
    lastName: requireLastName ? yup.string().required('Last name is required') : yup.string(),

    newPassword: requireNewPassword ? yup.string().required('New password is required') : yup.string(),

    confirmPassword: requireConfirmPassword
      ? yup
          .string()
          .oneOf([yup.ref('newPassword')], 'Passwords must match')
          .required('Confirm password is required')
      : yup.string(),

    address: requireAddress ? yup.string().required('Address is required') : yup.string(),
    phone: requirePhone ? yup.number().required('phone number is required') : yup.string(),
  })

  const { handleSubmit } = useForm({ validationSchema: schema })

  const { value: email, errorMessage: emailError, meta: emailMeta } = useField('email')
  const { value: password, errorMessage: passwordError, meta: passwordMeta } = useField('password')
  const { value: text, errorMessage: textError, meta: textMeta } = useField('text')
  const { value: firstName, errorMessage: firstNameError, meta: firstNameMeta } = useField('firstName')
  const { value: lastName, errorMessage: lastNameError, meta: lastNameMeta } = useField('lastName')
  const { value: newPassword, errorMessage: newPasswordError, meta: newPasswordMeta } = useField('newPassword')
  const { value: confirmPassword, errorMessage: confirmPasswordError, meta: confirmPasswordMeta } = useField('confirmPassword')
  const { value: address, errorMessage: addressError, meta: addressMeta } = useField('address')
  const { value: phone, errorMessage: phoneError, meta: phoneMeta } = useField('phone')

  const onSubmit = handleSubmit

  const fields = { email, password, text, firstName, lastName, newPassword, confirmPassword, address, phone }
  const errors = {
    emailError,
    passwordError,
    textError,
    firstNameError,
    lastNameError,
    newPasswordError,
    confirmPasswordError,
    addressError,
    phoneError,
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
    phoneMeta,
  }

  return {
    onSubmit,
    fields,
    errors,
    metas,
  }
}
