import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)

  //   Upon successful registration, the user will receive an authentication token from the request. This token will be used to authenticate them instead of having them go to the login.
  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    }

    fetch('http://127.0.0.1:8000/api/v1/rest-auth/registration/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.key) {
          localStorage.clear()
          localStorage.setItem('token', data.key)
          window.location.replace('http://localhost:3000/usersprofile')
        } else {
          setUsername('')
          setEmail('')
          setPassword1('')
          setPassword2('')
          localStorage.clear()
          setErrors(true)
        }
      })
  }

  return (
    <div className='form p-4'>
      {/* <Navbar /> */}
      {loading === false && <h1>Signup</h1>}
      {errors === true && <h2>Cannot signup with provided credentials</h2>}
      <div
        className='form-div'
        data-aos='zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <form onSubmit={onSubmit} className='text-dark'>
          <h2>Sign Up</h2>
          <input
            className='name'
            name='username'
            type='text'
            placeholder='UserName'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />{' '}
          <br />
          <input
            name='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />{' '}
          <br />
          <input
            name='password1'
            type='password'
            placeholder='Password'
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            required
          />{' '}
          <br />
          <input
            name='password2'
            type='password'
            placeholder='Confirm Password'
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />{' '}
          <br />
          <input type='submit' value='Sign Up' />
        </form>
        <p>
          Already have an account? <span></span>
          <Link to='/Login'>
            <a href='#'>Login</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
