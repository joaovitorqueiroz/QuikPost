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
  await ((await fakerApi.post('/posts/create', {
    title,
    content,
  })) as Promise<PostCreateResult>)

// postRemove
export type PostRemoveResult = {
  success: boolean
  message: string
}

export const postRemove = async (postId: number): Promise<PostRemoveResult> =>
  await ((await fakerApi.delete('/posts/remove', {
    post_id: postId,
  })) as Promise<PostRemoveResult>)
