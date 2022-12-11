import { LoadingButton } from '@mui/lab'
import { Card, Grid } from '@mui/material'
import { Box, styled, useTheme } from '@mui/system'
import { NavLink } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import validatorErrorMessages from '@src/utils/validatorErrorMessages'
import { FormInputText } from '@src/components/FormComponents'

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }))

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }))

const Container = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100vh !important',
  '& .card': {
    display: 'flex',
    alignItems: 'center',
    maxWidth: 700,
    minHeight: 350,
    borderRadius: 12,
    margin: '1rem',
  },
}))

const initialValues = {
  username: '',
  password: '',
}

// form field validation schema
const validationSchema = yup.object().shape({
  username: yup.string().required(validatorErrorMessages.required),
  password: yup.string().required(validatorErrorMessages.required),
})

const Login: React.FC = () => {
  const theme = useTheme()
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  })
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <Container>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox height="100%">
              <img src="/logo_full_horizontal.png" width="70%" alt="" />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%">
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  onSubmit()
                }}
              >
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
                  loading={false}
                  variant="contained"
                  sx={{ my: 2 }}
                >
                  Entrar
                </LoadingButton>

                <JustifyBox width="100%">
                  <NavLink to="/signup" style={{ color: theme.palette.text.primary }}>
                    Criar um usuário
                  </NavLink>
                </JustifyBox>
              </form>
            </JustifyBox>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}

export default Login
