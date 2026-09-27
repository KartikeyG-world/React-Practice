import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import '../App.css'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username , password })
  }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <input type='text' placeholder='Username'
        value={username} id='user_btn'
        onChange={(e) => setUsername(e.target.value)} />
      <input type='text' placeholder='Password'
        value={password} id='pass_btn'
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}
      id='submit_btn'
      >Submit</button>
    </div>
  )
}

export default Login
