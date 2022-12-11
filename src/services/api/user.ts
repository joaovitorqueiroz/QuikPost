import FakerApi from '../fakerApi'
const fakerApi = new FakerApi()

// Register
type RegisterReturn = {
  success: boolean
  message: string
}

type RegisterUserProps = {
  name: string
  username: string
  password: string
}

export const registerUser = async ({
  name,
  username,
  password,
}: RegisterUserProps): Promise<RegisterReturn> =>
  await ((await fakerApi.post(`/register`, {
    name,
    username,
    password,
  })) as Promise<RegisterReturn>)

// signIn
type SignInReturn = {
  success: boolean
  message: string
}

type SignInUserProps = {
  username: string
  password: string
}

export const signIn = async ({ username, password }: SignInUserProps): Promise<SignInReturn> =>
  await ((await fakerApi.post(`/login`, {
    username,
    password,
  })) as Promise<SignInReturn>)
