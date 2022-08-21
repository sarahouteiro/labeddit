import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { goToLoginPage, goToPostListPage } from "../routes/coordinator"

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            goToLoginPage(navigate)
        } else {
            goToPostListPage(navigate)
        }
    },[navigate])
}

export default useUnprotectedPage