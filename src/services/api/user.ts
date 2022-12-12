import fakerApi from './fakerApi'

// Register
export type RegisterResult = {
  success: boolean
  message: string
}

export type RegisterUserData = {
  name: string
  username: string
  password: string
}

export const registerUser = async ({
  name,
  username,
  password,
}: RegisterUserData): Promise<RegisterResult> =>
  await ((await fakerApi.post(`/register`, {
    name,
    username,
    password,
  })) as Promise<RegisterResult>)

// signIn
export type SignInResult = {
  success: boolean
  message: string
  user: UserData
}

export type SignInUserData = {
  username: string
  password: string
}

export const signIn = async ({ username, password }: SignInUserData): Promise<SignInResult> =>
  await ((await fakerApi.post(`/login`, {
    username,
    password,
  })) as Promise<SignInResult>)

// getUser
export type UserData = {
  name: string
  username: string
  id: number
}

export type GetUserResult = {
  success: boolean
  data: UserData
}

export const getUser = async (): Promise<GetUserResult> =>
  await ((await fakerApi.get('/me', {})) as Promise<GetUserResult>)

// logout
export type LogoutResult = {
  success: boolean
  message: string
}

export const logout = async (): Promise<LogoutResult> =>
  await ((await fakerApi.post(`/logout`, {})) as Promise<LogoutResult>)
