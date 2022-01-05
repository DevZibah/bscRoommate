import React, { useState, useEffect } from 'react'

const Login = () => {
  // The email and password states set in lines 4 and 5 are used for form control.These values are updated when the user types.
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //   The errors state is present to push any errors into in case there are any. If there are errors, you can see from line 50 that it will be rendered.
  const [errors, setErrors] = useState(false)
  //   The loading state is used to allow a buffer between when the login page is requested, and when it is actually rendered.
  const [loading, setLoading] = useState(true)

  //   This is because if the user is already authenticated, you don’t want to display a login page again. Instead, you will redirect them to the dashboard
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/dashboard')
    } else {
      setLoading(false)
    }
  }, [])

  const onSubmit = (e) => {
    //   Line 24 is used to keep the page from refreshing when the form is submitted.
    e.preventDefault()
    const user = {
      email: email,
      password: password,
      username: username,
    }

    fetch('http://127.0.0.1:8000/api/v1/rest-auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      // In lines 38 to 43, we check to see if the request was successful. If it is, then we set the token in local storage to the one returned by the API and then redirect the now authenticated user to the dashboard.
      .then((res) => res.json())
      .then((data) => {
        if (data.key) {
          localStorage.clear()
          localStorage.setItem('token', data.key)
          window.location.replace('http://localhost:3000/dashboard')
        } else {
          setUsername('')
          setEmail('')
          setPassword('')
          localStorage.clear()
          setErrors(true)
        }
      })
  }

  return (
    <div className='form1 p-4'>
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      {loading === false && (
        <div className='form-div1 mt-4'>
          <form onSubmit={onSubmit} className='text-dark'>
            {loading === false && <h1>Login</h1>}
            <input
              name='username'
              type='text'
              value={username}
              placeholder='UserName'
              onChange={(e) => setUsername(e.target.value)}
              required
            />{' '}
            <br />
            <input
              name='email'
              type='email'
              value={email}
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />{' '}
            <br />
            <input
              name='password'
              type='password'
              value={password}
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />{' '}
            <br />
            <input type='submit' value='Login' />
          </form>
        </div>
      )}
    </div>
  )
}
export default Login
