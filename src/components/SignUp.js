import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
const Signup = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [errors, setErrors] = useState(false)
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)

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

  const handleShowHide = () => {
    setShow(!show)
  }
  const handleShowHide1 = () => {
    setShow1(!show1)
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
          <div>
            <input
              name='password1'
              type={show ? 'text' : 'password'}
              placeholder='Password'
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
            />{' '}
            {show ? (
              <AiFillEye className='eye' onClick={handleShowHide} />
            ) : (
              <AiFillEyeInvisible className='eye' onClick={handleShowHide} />
            )}
            <p
              className='paragh ml-2'
              style={{
                color:
                  password1.match(/[a-z]/) != null &&
                  password1.match(/[A-Z]/) != null &&
                  password1.match(/[0-9]/) != null &&
                  password1.match(/[!@#$%^&*]/) != null &&
                  password1.length >= 8
                    ? 'green'
                    : 'red',
              }}
            >
              {password1.length == 0
                ? ''
                : password1.match(/[a-z]/) != null &&
                  password1.match(/[A-Z]/) != null &&
                  password1.match(/[0-9]/) != null &&
                  password1.match(/[!@#$%^&*]/) != null &&
                  password1.length >= 8
                ? 'password accepted'
                : password1.length >= 1 &&
                  password1.match(/[a-z]/) == null &&
                  password1.match(/[A-Z]/) == null &&
                  password1.match(/[0-9]/) == null &&
                  password1.match(/[!@#$%^&*]/) == null
                ? 'password must include lowercase, uppercase, symbols and numbers'
                : 'password must include lowercase, uppercase, symbols and numbers'}
            </p>
          </div>
          <div className='mt-n3'>
            <input
              name='password2'
              type={show1 ? 'text' : 'password'}
              placeholder='Confirm Password'
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />{' '}
            {show1 ? (
              <AiFillEye className='eye' onClick={handleShowHide1} />
            ) : (
              <AiFillEyeInvisible className='eye' onClick={handleShowHide1} />
            )}
            <p
              className='paragh ml-2'
              style={{
                color: password2 === password1 ? 'green' : 'red',
              }}
            >
              {password2.length == 0
                ? ''
                : password2 === password1
                ? 'confirm password matches password'
                : 'confirm password does not match password'}
            </p>
          </div>
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
