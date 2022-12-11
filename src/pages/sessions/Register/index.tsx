import { LoadingButton } from '@mui/lab'
import { Card, Grid, useTheme } from '@mui/material'
import { Box, styled } from '@mui/system'
import { NavLink } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import validatorErrorMessages from '@src/utils/validatorErrorMessages'
import { FormInputText } from '@src/components/FormComponents'

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }))

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }))

const ContentBox = styled(JustifyBox)(() => ({
  height: '100%',
  padding: '32px',
  background: 'rgba(0, 0, 0, 0.01)',
}))

const JWTRegister = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}))

const initialValues = {
  name: '',
  username: '',
  password: '',
}

// form field validation schema
const validationSchema = yup.object().shape({
  name: yup.string().required(validatorErrorMessages.required),
  username: yup.string().required(validatorErrorMessages.required),
  password: yup
    .string()
    .min(6, validatorErrorMessages.min('Senha', 6))
    .required(validatorErrorMessages.required),
})

const Register: React.FC = () => {
  const theme = useTheme()
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  })
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ContentBox>
              <img src="/logo_full_horizontal.png" width="70%" alt="" />
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  onSubmit()
                }}
              >
                <FormInputText
                  name="name"
                  label="Nome"
                  type="text"
                  control={control}
                  sx={{ mb: 3 }}
                />
                <FormInputText
                  name="username"
                  label="Usuário"
                  type="text"
                  control={control}
                  sx={{ mb: 3 }}
                />
                <FormInputText
                  name="password"
                  label="Senha"
                  type="password"
                  control={control}
                  sx={{ mb: 1.5 }}
                />

                <LoadingButton
                  type="submit"
                  color="primary"
                  // loading={loading}
                  variant="contained"
                  sx={{ mb: 2, mt: 3 }}
                >
                  Registrar
                </LoadingButton>

                <Box>
                  Ja tem uma conta?
                  <NavLink
                    to="/signin"
                    style={{ color: theme.palette.text.primary, marginLeft: 5 }}
                  >
                    Entrar
                  </NavLink>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  )
}

export default Register
