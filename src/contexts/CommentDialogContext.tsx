import { useState, createContext, PropsWithChildren } from 'react'
type CommentEditing = {
  content: string
  id: number
} | null

type CommentDialogContext = {
  isOpenDialog: boolean
  closeDialog: () => void
  openDialog: (postId: number) => void
  postId: number | null
  commentEditing: CommentEditing
  setCommentEditing: (CommentEditing: CommentEditing) => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-redeclare
export const CommentDialogContext = createContext<CommentDialogContext>({} as CommentDialogContext)

export const CommentDialogProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [postId, setPostId] = useState<number | null>(null)
  const [commentEditing, setCommentEditing] = useState<CommentEditing | null>(null)

  const closeDialog = () => {
    setCommentEditing(null)
    setIsOpenDialog(false)
  }

  const openDialog = (postId: number) => {
    setPostId(postId)
    setIsOpenDialog(true)
  }

  return (
    <CommentDialogContext.Provider
      value={{ isOpenDialog, closeDialog, openDialog, commentEditing, setCommentEditing, postId }}
    >
      {children}
    </CommentDialogContext.Provider>
  )
}
