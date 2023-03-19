import { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'
import { AuthApi } from '../api'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'

type Props = {
    children: ReactNode
}
interface LoginData {
    email: string
    password: string
}
const AuthProvider = ({children}: Props) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const login = async(data: LoginData) => {
        try {
            setLoading(true)
            const response = await AuthApi.login(data)
            setUser(response?.data.data.user)
            localStorage.setItem('access_token', response?.data.data.access_token)
            setLoading(false)
            navigate('/')
        } catch (error: any) {
            setLoading(false)
            setUser({})
            toast('Login fail. Please check email or password')
        }
    }
    const logoutUser = () => {
        setUser({})
        localStorage.removeItem('access_token')
    }
    return (
        <AuthContext.Provider value={{
            user,
            login,
            logoutUser,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
