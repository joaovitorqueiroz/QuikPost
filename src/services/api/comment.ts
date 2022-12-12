import fakerApi from './fakerApi'

// commentCreate
export type CommentCreateData = {
  postId: number | null
  comment: {
    content: string
  }
}

export type CommentCreateResult = {
  success: boolean
  message: string
}

export const commentCreate = async ({
  postId,
  comment,
}: CommentCreateData): Promise<CommentCreateResult> =>
  await ((await fakerApi.post('/comments/create', {
    post_id: postId,
    comment,
  })) as Promise<CommentCreateResult>)

// commentRemove
export type CommentRemoveData = {
  commentId: number
  postId: number
}

export type CommentRemoveResult = {
  success: boolean
  message: string
}

export const commentRemove = async ({
  postId,
  commentId,
}: CommentRemoveData): Promise<CommentRemoveResult> =>
  await ((await fakerApi.delete('/comments/remove', {
    post_id: postId,
    comment_id: commentId,
  })) as Promise<CommentRemoveResult>)

// commentUpdate
export type CommentUpdateData = {
  postId: number | null
  commentId: number | null
  comment: {
    content: string
  }
}

export type CommentUpdateResult = {
  success: boolean
  message: string
}
export const commentUpdate = async ({
  commentId,
  postId,
  comment,
}: CommentUpdateData): Promise<CommentUpdateResult> => {
  return await ((await fakerApi.put('/comments/update', {
    post_id: postId,
    comment_id: commentId,
    comment,
  })) as Promise<CommentUpdateResult>)
}
