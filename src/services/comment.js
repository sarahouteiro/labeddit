import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToPostDetailPage } from '../routes/coordinator'

export const sendComment = (body, clear, navigate, id, post) => {
    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((sucess) => {
        clear()
        goToPostDetailPage(navigate, id, post)
    })
    .catch((error) => {
        alert(error.response.data.message)
    })
  }