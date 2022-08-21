import Header from '../../components/Header/Header'
import PostArea from '../../components/PostArea/PostArea'
import PostList from '../../components/PostList/PostList'
import Container from '@mui/material/Container'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'

const PostListPage = () => {
  useProtectedPage();

  const [ postList, setPostList ] = useState([]);

  const getPostList = ()  => {
    axios.get(`${BASE_URL}/posts`, {
      headers: {
          Authorization: localStorage.getItem('token')
      }
    })
    .then((sucess) => {
        setPostList(sucess.data)
    })
    .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
    })
  }

  const updatePostList = () => {
    setTimeout(() => {
      getPostList()
    }, 2000)
  }

  useEffect(() => {
    getPostList()
  },[]);
    
    return (
      <>
        <Header/>
        <Container maxWidth='md'>
          <PostArea newPost={updatePostList}/>
          <PostList posts={postList} sendVote={updatePostList}/>
        </Container>
      </>
    );
  };
  
  export default PostListPage