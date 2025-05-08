import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

export function useValidation(requireName = false) {
  const schema = yup.object({
    email: yup
      .string()
      .required('Email or phone is required')
      .matches(/^(\+?\d{10,13}|[^@\s]+@[^@\s]+\.[^@\s]+)$/, 'Incorrect email or phone number'),
    password: yup.string().min(6, 'Minimum 6 symbols').required('Password is required'),
    text: requireName ? yup.string().required('Name is required') : yup.string(), // ← не обов'язкове, якщо не потрібно
  })

  const { handleSubmit } = useForm({
    validationSchema: schema,
  })

  const { value: email, errorMessage: emailError, meta: emailMeta } = useField('email')
  const { value: password, errorMessage: passwordError, meta: passwordMeta } = useField('password')
  const { value: text, errorMessage: textError, meta: textMeta } = useField('text')

  const onSubmit = handleSubmit

  const fields = { email, password, text }
  const errors = { emailError, passwordError, textError }
  const metas = { emailMeta, passwordMeta, textMeta }

  return {
    onSubmit,
    fields,
    errors,
    metas,
  }
}
