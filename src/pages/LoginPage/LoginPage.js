import Logo from '../../assets/images/logo.png'
import { LogoLogin, Titulo, Botao } from './styled'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { goToSignUpPage } from '../../routes/coordinator'
import Container from '@mui/material/Container'
import LoginForm from './LoginForm'

const LoginPage = () => {

  const navigate = useNavigate()

    return (
        <Container maxWidth='xs'>
          <Titulo>
            <LogoLogin src={Logo} alt='Logo do LabEddit'/>
            <h1>LabEddit</h1>
            <p>O projeto de rede social da Labenu</p>
            <LoginForm/>
          </Titulo>
          <Botao>
            <Grid container spacing={0}>
              <Button 
                type={'submit'}
                variant="outlined"
                fullWidth
                size="large"
                onClick={() => goToSignUpPage(navigate)}>
                Crie uma conta!
              </Button>
            </Grid>
          </Botao>
        </Container>
    )
  }
  
  export default LoginPage