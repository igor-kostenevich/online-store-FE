export interface RegisterValues {
  email: string
  password: string
  firstName: string
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
  phone?: string
  newPassword?: string
  confirmPassword?: string
}

export interface User {
  id: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  phone: string
  address: string
  role: 'USER' | 'ADMIN'
  createdAt: string
  updatedAt: string
}
