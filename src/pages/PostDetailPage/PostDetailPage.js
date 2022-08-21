import Header from '../../components/Header/Header'
import PostDetail from '../../components/PostDetail/PostDetail'
import Comments from '../../components/Comments/Comments'
import CommentsList from '../../components/CommentsList/CommentsList'
import Container from '@mui/material/Container'
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetailPage = () => {
  const params = useParams()

  const [ comments, setComments ] = useState([])

  const getComments = () => {
    axios.get(`${BASE_URL}/posts/${params.id}/comments`, {
      headers: {
          Authorization: localStorage.getItem('token')
      }
    })
    .then((sucess) => {
        setComments(sucess.data)
    })
    .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
    })
  }

  useEffect(() => {
    getComments()
  },[])

  const atualizaListaComentarios = () => {
    setTimeout(() => {
      getComments()
    }, 2000)
  }

  useProtectedPage()
    return (
      <>
        <Header/>
        <Container maxWidth='md'>
          <PostDetail/>
          <Comments enviaComentario={atualizaListaComentarios}/>
          <CommentsList listaComentario={comments} sendVote={atualizaListaComentarios}/>
        </Container>
      </>
    )
  }
  
  export default PostDetailPage