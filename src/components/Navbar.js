import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false)
  // The useEffect hook is being used to check, and change the authentication status of the user. It does this by checking for a key called token in local storage. If the key exists, the user is authenticated already.
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true)
    }
  }, [])

  return (
    <div className='firstdiv'>
      <nav class='navbar navbar-expand-lg'>
        <h4 className='logo'>HiRoomie</h4>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i class='fas fa-bars ham'></i>
        </button>
        <div
          class='
            collapse
            navbar-collapse
            text-center
            d-md-flex
            justify-content-end
          '
          id='navbarNav'
        >
          <ul class='navbar-nav mt-3 cc-ul'>
            {isAuth === true ? (
              <Fragment>
                {' '}
                <li>
                  <Link to='/Dashboard'>Dashboard</Link>
                </li>
                <li>
                  <Link to='/Profee'>profee</Link>
                </li>
                <li>
                  <Link to='/Logout'>Logout</Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                {' '}
                <Link to='/SignUp' className='signup'>
                  <button>SignUp</button>
                </Link>
                <Link to='/Login' className='signup mt-2'>
                  <button>Login</button>
                </Link>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
