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

// getPosts
export type Comment = {
  content: string
  id: number
  user_id: number
}

export type PostData = {
  title: string
  content: string
  id: number
  user_id: number
  comments: Comment[]
}

export type GetPostsResult = {
  success: boolean
  message?: string
  data: PostData[]
}

export const getPosts = async (): Promise<GetPostsResult> =>
  await ((await fakerApi.get('/posts', {})) as Promise<GetPostsResult>)

// getPostById
export type GetPostByIdResult = {
  success: boolean
  message?: string
  data: PostData
}
export const getPostById = async (ctx: any): Promise<GetPostByIdResult> => {
  const [, postId] = ctx.queryKey
  return await ((await fakerApi.get('/posts/view', {
    post_id: postId,
  })) as Promise<GetPostByIdResult>)
}

// updatePost
export type PostUpdateData = {
  postId: number
  post: PostCreateData
}

export type PostUpdateResult = {
  success: boolean
  message: string
}
export const postUpdate = async ({ postId, post }: PostUpdateData): Promise<PostUpdateResult> => {
  return await ((await fakerApi.put('/posts/update', {
    post_id: postId,
    post,
  })) as Promise<PostUpdateResult>)
}
