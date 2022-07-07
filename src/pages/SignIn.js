import React, { useState, useEffect } from 'react'
import { login } from '../redux/SignIn/Action'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = useSelector(state => state.signInStore)
  const dispatch = useDispatch()

  const userLogin = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
    }

    dispatch(login(user))
    localStorage.setItem('testUser', user.password)

  }

  if (auth.authenticate) {
    return <Redirect to={`/profile`} />
  }
  return (
    <div id='signinsec'>

      <div className="login-box mt-3">
        <h2 className='signin-title mt-3'>تسجيل الدخول
        </h2>
        <br />
        <form onSubmit={(e) => userLogin(e)}>
          <div className="user-box mt-5">
            <input type="text" name="" rlt='left'  autoComplete='off' required="" onChange={(e) => { setEmail(e.target.value) }} />
            <label id='password' > البريد الإلكتروني</label>
          </div>
          <div className="user-box mt-5">
            <input type="password" name="" autoComplete='off' required="" onChange={(e) => { setPassword(e.target.value) }} />
            <label id='passwordtow'>كلمه السر</label>
          </div>
          <a className='submit  mt-5'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <input type='submit' value='دخول' id='fasakh' />
          </a>
        </form>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default SignIn
