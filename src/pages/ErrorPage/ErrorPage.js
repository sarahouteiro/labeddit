import Logo from '../../assets/images/logo.png'
import { DivError, Img } from './styled'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { goToPostListPage } from '../../routes/coordinator'
import Container from '@mui/material/Container'

const ErrorPage = () => {
  const navigate = useNavigate()

    return (
      <Container maxWidth='sm'>
        <DivError>
          <Img src={Logo} alt='imagem da logo'/>
          <h1>Epa...Algo deu errado!</h1>
          <Grid 
              container spacing={0}
              pl={5}
              pr={5}
              pb={1}
              pt={3}
            >
              <Button 
                variant="contained" 
                fullWidth
                size="large"
                onClick={() => goToPostListPage(navigate)}
              >
                Voltar para o LabEddit
              </Button>
            </Grid>
        </DivError>
      </Container>
    )
  }
  
  export default ErrorPage