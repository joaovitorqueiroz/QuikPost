import FakerApi from '../fakerApi'
const fakerApi = new FakerApi()

// Register
type registerReturn = {
  success: boolean
  message: string
}

type registerUserProps = {
  name: string
  username: string
  password: string
}

export const registerUser = async ({
  name,
  username,
  password,
}: registerUserProps): Promise<registerReturn> =>
  await ((await fakerApi.post(`/register`, {
    name,
    username,
    password,
  })) as Promise<registerReturn>)

// Login
type loginReturn = {
  success: boolean
  message: string
}

type loginUserProps = {
  username: string
  password: string
}

export const login = async ({ username, password }: loginUserProps): Promise<loginReturn> =>
  await ((await fakerApi.post(`/login`, {
    username,
    password,
  })) as Promise<registerReturn>)
