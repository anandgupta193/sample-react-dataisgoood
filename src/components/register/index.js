import './register.css'

function Register () {
  return (
    <div className='reg-wrapper'>
      <h1>Register Here</h1>
      <label>User Name</label>
      <input type="text"/>
      <label>Email</label>
      <input type="text"/>
      <label>Password</label>
      <input type="text"/>
      <label>Confirm Password</label>
      <input type="text"/>
    </div>
  )
}

export default Register