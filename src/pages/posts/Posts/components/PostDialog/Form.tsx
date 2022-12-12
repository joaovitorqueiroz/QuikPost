import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import { FlexBetween } from '@src/components/FlexBox'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormInputText } from '@src/components/FormComponents'
import { useMutationPostCreate } from '@src/hooks'

import * as yup from 'yup'
import validatorErrorMessages from '@src/utils/validatorErrorMessages'

const validationSchema = yup.object().shape({
  title: yup.string().required(validatorErrorMessages.required),
  content: yup.string().required(validatorErrorMessages.required),
})

const initialValues = {
  title: '',
  content: '',
}

type FormProps = {
  handleDialogClose: () => void
}

const Form: React.FC<FormProps> = ({ handleDialogClose }) => {
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  })

  const { mutate: createPost } = useMutationPostCreate()

  const onSubmit = handleSubmit((data) => {
    createPost(data)
    handleDialogClose()
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
          Publicar
        </LoadingButton>

        <Button variant="outlined" color="secondary" onClick={handleDialogClose}>
          Cancelar
        </Button>
      </FlexBetween>
    </form>
  )
}

export default Form
