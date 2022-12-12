import { useState, createContext, PropsWithChildren } from 'react'
type PostEditing = {
  title: string
  content: string
  id: number
} | null

type PostDialogContext = {
  isOpenDialog: boolean
  closeDialog: () => void
  openDialog: () => void
  postEditing: PostEditing
  setPostEditing: (postEditing: PostEditing) => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-redeclare
export const PostDialogContext = createContext<PostDialogContext>({} as PostDialogContext)

export const PostDialogProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [postEditing, setPostEditing] = useState<PostEditing | null>(null)

  const closeDialog = () => {
    setPostEditing(null)
    setIsOpenDialog(false)
  }

  const openDialog = () => {
    setIsOpenDialog(true)
  }

  return (
    <PostDialogContext.Provider
      value={{ isOpenDialog, closeDialog, openDialog, postEditing, setPostEditing }}
    >
      {children}
    </PostDialogContext.Provider>
  )
}
