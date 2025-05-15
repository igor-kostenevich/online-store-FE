export interface RegisterValues {
  email: string
  password: string
  name: string
}
export interface LoginValues {
  email: string
  password: string
}

export interface UpdatedValues {
  firstName: string
  lastName?: string
  email: string
  address?: string
  password: string
  newPassword?: string
  confirmPassword?: string
}
