import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRouter = () => {
    const { user } = useContext(AuthContext)
    
    if (Object.values(user).length <= 0 && !localStorage.getItem('access_token'))
        return <Navigate to="/login" replace />

    return <Outlet/>
}

export default ProtectedRouter
