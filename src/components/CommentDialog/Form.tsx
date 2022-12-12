import { useContext } from 'react'
import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import * as yup from 'yup'
import { FlexBetween } from '@src/components/FlexBox'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInputText } from '@src/components/FormComponents'
import { useMutationCommentCreate, useMutationCommentUpdate } from '@src/hooks'

import validatorErrorMessages from '@src/utils/validatorErrorMessages'
import { CommentDialogContext } from '@src/contexts/CommentDialogContext'

const validationSchema = yup.object().shape({
  content: yup.string().required(validatorErrorMessages.required),
})

const Form: React.FC = () => {
  const { commentEditing, postId } = useContext(CommentDialogContext)
  const initialValues = {
    content: commentEditing?.content ?? '',
  }
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  })
  const { closeDialog } = useContext(CommentDialogContext)
  const { mutate: commentCreate } = useMutationCommentCreate()
  const { mutate: commentUpdate } = useMutationCommentUpdate()

  const onSubmit = handleSubmit((data) => {
    if (commentEditing?.id) {
      commentUpdate({ postId, commentId: commentEditing?.id, comment: data })
    } else {
      commentCreate({ postId, comment: data })
    }
    closeDialog()
  })

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        onSubmit()
      }}
    >
      <FormInputText
        name="content"
        label="Conteúdo"
        type="text"
        control={control}
        rows={4}
        multiline
        sx={{ mb: 3 }}
      />

      <FlexBetween>
        <LoadingButton variant="contained" color="primary" type="submit">
          {commentEditing ? 'Salvar' : 'Publicar'}
        </LoadingButton>

        <Button variant="outlined" color="secondary" onClick={closeDialog}>
          Cancelar
        </Button>
      </FlexBetween>
    </form>
  )
}

export default Form
