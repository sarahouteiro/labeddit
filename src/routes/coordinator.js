export const goToLoginPage= (navigate) => {
    navigate('/')
}

export const goToSignUpPage= (navigate) => {
    navigate('/signup')
}

export const goToPostListPage= (navigate) => {
    navigate('/postlist')
}

export const goToPostDetailPage= (navigate, id, post) => {
    navigate(`/postdetail/${id}`, { state: post })
}