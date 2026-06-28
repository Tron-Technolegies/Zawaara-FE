import Login from "../components/login/Login"
import { useEffect } from "react"


function LoginPage() {
  useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])
  return (
    <Login/>
  )
}

export default LoginPage