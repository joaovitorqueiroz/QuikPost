import fakerApi from './fakerApi'

// postCreate
export type PostCreateData = {
  title: string
  content: string
}

export type PostCreateResult = {
  success: boolean
  message: string
}

export const postCreate = async ({ title, content }: PostCreateData): Promise<PostCreateResult> =>
  await ((await fakerApi.post(`/posts/create`, {
    title,
    content,
  })) as Promise<PostCreateResult>)
