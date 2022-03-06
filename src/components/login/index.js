import './login.css'

function Login (props) {

  const {currentTime} = props

  return (
    <div className='login-wrapper'>
      <h1>Login Here - Current Time is {currentTime}</h1>
      <label>User Name</label>
      <input type="text"/>
      <label>Email</label>
      <input type="text"/>
      <label>Password</label>
      <input type="text"/>
      <button>Submit</button>
    </div>
  )
}

export default Login