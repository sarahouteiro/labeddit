import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToPostListPage } from '../routes/coordinator'

export const sendPost = (body, clear, navigate) => {
    const bodyPayLoad = {
        title: body.body,
        body: body.body
    }
    axios.post(`${BASE_URL}/posts`, bodyPayLoad, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((sucess) => {
        clear()
        goToPostListPage(navigate)
    })
    .catch((error) => {
        alert(error.response.data.message)
    })
  }

  