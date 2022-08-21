import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { PostField } from './styled'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { sendPost } from '../../services/post'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'

const PostArea = (props) => {
  const [ form, onChange, clear ] = useForm({body:''})

  const navigate = useNavigate()

  const onSubmitPost = (event) => {
    event.preventDefault()
    sendPost(form, clear, navigate)
    props.newPost()
};

    return (
        <PostField>
          <form onSubmit={onSubmitPost}>
            <Box
              sx={{
                maxWidth: '100%'
              }}
            >
              <TextField 
                name={'body'}
                id={"outlined-post"}
                fullWidth 
                label={"Escreva seu post..."} 
                multiline
                rows={5}
                value={form.body}
                onChange={onChange}
                required
              />
            </Box>
            <Grid 
              container spacing={0}
              pb={2}
              pt={2}
            >
              <Button 
                variant="contained" 
                fullWidth
                size="large"
                type={'submit'}
              >
                Postar
              </Button>
            </Grid>
          </form>
        </PostField>
    )
  }
  
  export default PostArea