
import LoginScreen from '../components/login/LoginScreen'
import { useEffect } from 'react'

const LoginScreenPage = () => {
  useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])
  return (
    <div>
      <LoginScreen/>
      
    </div>
  )
}

export default LoginScreenPage
