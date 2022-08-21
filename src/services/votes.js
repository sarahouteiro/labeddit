import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const createPostVote = (id, num) => {
    const body = {
        direction: num
    }
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((sucess) => {
        console.log(sucess.sucess)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const changePostVote = (id, num) => {
    const body = {
        direction: num
    }
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((sucess) => {
        console.log(sucess.sucess)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const deletePostVote = (id) => {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((sucess) => {
        console.log(sucess.sucess)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const createCommentVote = (id, num) => {
    const body = {
        direction: num
    }
    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((sucess) => {
        console.log(sucess.sucess)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const changeCommentVote = (id, num) => {
    const body = {
        direction: num
    }
    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((sucess) => {
        console.log(sucess.sucess)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const deleteCommentVote = (id) => {
    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((sucess) => {
        console.log(sucess.sucess)
    })
    .catch((error) => {
        console.log(error)
    })
}