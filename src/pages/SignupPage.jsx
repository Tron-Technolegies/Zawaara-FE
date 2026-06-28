import SignUp from "../components/signup/SignUp"
import { useEffect } from "react"


function SignupPage() {
  useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])
  return (
    <SignUp/>
  )
}

export default SignupPage