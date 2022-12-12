import { useContext } from 'react'
import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import { FlexBetween } from '@src/components/FlexBox'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInputText } from '@src/components/FormComponents'
import { useMutationPostCreate, useMutationPostUpdate } from '@src/hooks'

import * as yup from 'yup'
import validatorErrorMessages from '@src/utils/validatorErrorMessages'
import { PostDialogContext } from '@src/contexts/PostDialogContext'

const validationSchema = yup.object().shape({
  title: yup.string().required(validatorErrorMessages.required),
  content: yup.string().required(validatorErrorMessages.required),
})

const Form: React.FC = () => {
  const { postEditing } = useContext(PostDialogContext)
  const initialValues = {
    title: postEditing?.title ?? '',
    content: postEditing?.content ?? '',
  }
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  })
  const { closeDialog } = useContext(PostDialogContext)
  const { mutate: createPost } = useMutationPostCreate()
  const { mutate: updatePost } = useMutationPostUpdate()

  const onSubmit = handleSubmit((data) => {
    if (postEditing?.id) {
      updatePost({ postId: postEditing.id, post: data })
    } else {
      createPost(data)
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
      <FormInputText name="title" label="Título" type="text" control={control} sx={{ mb: 3 }} />
      <FormInputText
        name="content"
        label="Conteúdo"
        type="text"
        control={control}
        rows={8}
        multiline
        sx={{ mb: 3 }}
      />

      <FlexBetween>
        <LoadingButton variant="contained" color="primary" type="submit">
          {postEditing ? 'Salvar' : 'Publicar'}
        </LoadingButton>

        <Button variant="outlined" color="secondary" onClick={closeDialog}>
          Cancelar
        </Button>
      </FlexBetween>
    </form>
  )
}

export default Form
