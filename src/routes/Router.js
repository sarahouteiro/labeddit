import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage'
import PostListPage from '../pages/PostListPage/PostListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage/>} />
                <Route path='signup' element={<SignUpPage/>} />
                <Route path='postlist' element={<PostListPage/>} />
                <Route path='postdetail/:id' element={<PostDetailPage/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router