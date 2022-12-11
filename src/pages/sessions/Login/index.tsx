import { Card, Grid } from '@mui/material'
import { Box, styled } from '@mui/system'
import Form from './Form'

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

const Login: React.FC = () => {
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
            <Form />
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}

export default Login
