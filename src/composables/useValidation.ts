import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import type { Ref } from 'vue'
import type { FieldMeta } from 'vee-validate'

type FieldKey =
  | 'email'
  | 'password'
  | 'text'
  | 'firstName'
  | 'lastName'
  | 'newPassword'
  | 'confirmPassword'
  | 'address'
  | 'phone'
  | 'companyName'
  | 'apartment'
  | 'town'
  | 'name'
  | 'message'

type ValidationOptions = Partial<Record<FieldKey, boolean>>

type FieldEntry = {
  value: Ref<any>
  errorMessage: Ref<string | undefined>
  meta: FieldMeta<any>
}

type FieldsMap = Record<FieldKey, Ref<any>>
type ErrorsMap = Record<`${FieldKey}Error`, Ref<string | undefined>>
type MetasMap = Record<`${FieldKey}Meta`, FieldMeta<any>>

export function useValidation(options: ValidationOptions = {}) {
  const schemaShape: Partial<Record<FieldKey, yup.AnySchema>> = {
    email: options.email
      ? yup
          .string()
          .required('Email or phone is required')
          .matches(/^(\+?\d{10,13}|[^@\s]+@[^@\s]+\.[^@\s]+)$/, 'Incorrect email or phone number')
      : yup.string(),
    password: options.password ? yup.string().min(6, 'Minimum 6 symbols').required('Password is required') : yup.string(),
    text: options.text ? yup.string().required('Name is required') : yup.string(),
    firstName: options.firstName ? yup.string().required('First name is required') : yup.string(),
    lastName: options.lastName ? yup.string().required('Last name is required') : yup.string(),
    name: options.name ? yup.string().required(' name is required') : yup.string(),
    newPassword: options.newPassword ? yup.string().required('New password is required') : yup.string(),
    confirmPassword: options.confirmPassword
      ? yup
          .string()
          .oneOf([yup.ref('newPassword')], 'Passwords must match')
          .required('Confirm password is required')
      : yup.string(),

    address: options.address ? yup.string().required('Address is required') : yup.string(),
    companyName: options.companyName ? yup.string().required('Company name is required') : yup.string(),
    apartment: options.apartment ? yup.string().required('Apartment is required') : yup.string(),
    town: options.town ? yup.string().required('Town is required') : yup.string(),
    phone: options.phone
      ? yup
          .string()
          .matches(/^\+380\d{9}$/, 'Phone number must be in format +380')
          .required('Phone number is required')
      : yup.string(),
    message: options.message ? yup.string().max(2000, 'Maximum 2000 symbols').min(10, 'Minimum 10 symbols').required('message is required') : yup.string(),
  }

  const schema = yup.object(schemaShape)
  const { handleSubmit } = useForm({ validationSchema: schema })
  const fieldKeys = Object.keys(schemaShape) as FieldKey[]

  const fields = {} as FieldsMap
  const errors = {} as ErrorsMap
  const metas = {} as MetasMap

  for (const key of fieldKeys) {
    const { value, errorMessage, meta } = useField(key)
    fields[key] = value
    errors[`${key}Error`] = errorMessage
    metas[`${key}Meta`] = meta
  }

  return {
    onSubmit: handleSubmit,
    fields,
    errors,
    metas,
  }
}
