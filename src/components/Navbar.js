import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
            <Link to='/SignUp' className='signup'>
              <button>SignUp</button>
            </Link>
            <Link to='/Login' className='signup mt-2'>
              <button>Login</button>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
