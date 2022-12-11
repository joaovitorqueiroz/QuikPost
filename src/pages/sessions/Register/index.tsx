import { Card, Grid } from '@mui/material'
import { Box, styled } from '@mui/system'
import Form from './Form'

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

const Register: React.FC = () => {
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
            <Form />
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  )
}

export default Register
