import React from 'react'
import useAuth from '../contexts/auth-context'
import { useRouter } from 'next/router';

const AuthWrapper = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter()
    if (!isLoggedIn) {
        router.replace('/login')
        return
    }
    return ({ children })
}

export default AuthWrapper