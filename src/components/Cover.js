import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import svg from '../assets/firstimage.svg'
import svg1 from '../assets/secondimage.svg'
import svg2 from '../assets/thirdimage.svg'
import svg3 from '../assets/fourth.svg'
const Cover = () => {
  return (
    <div>
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
      <div className='image-one'>
        <img src={svg} alt='svg' className='image1' />
      </div>
      <article className='firstart'>
        <h4>Roommates</h4>
        <p>
          Do you frequently end up living with someone with whom you are
          incompatible? Don't be concerned. We've got your back!
        </p>
        <Link to='/SignUp' className='M'>
          <button>Get Started</button>
        </Link>
      </article>
      <section className='section-one'>
        <h4>Why should you use HiRoomie?</h4>
        <div className='grid'>
          <div className='grid-div'>
            <div className='image-two p-2'>
              <img src={svg1} alt='image2' className='image2 p-5' />
            </div>
            <h4>A Perfect Fit</h4>
            <p>
              Create your own roommate profile and you'll be up and running in
              minutes! Specifics such as location, room details, pet
              preferences, and more should be provided.
            </p>
          </div>
          <div className='grid-div'>
            <div className='image-two p-2'>
              <img src={svg2} alt='image3' className='image2 p-5' />
            </div>
            <h4>A Genuine Bond</h4>
            <p>
              Use our website to communicate with potential roommates at any
              time. make a genuine connection that is safe, convenient, and
              simple
            </p>
          </div>
        </div>
      </section>
      <section className='ano-sec'>
        <div className='grid'>
          <div className='ano-image'>
            <img src={svg3} alt='image4' />
          </div>
          <div className='grid-one'>
            <h4 className='p-4'>How it works</h4>
            <div className='smal1 p-4 mt-n5'>
              <small>Find a Roommate</small>
            </div>
            <div className='grid1 p-4 mt-n5'>
              <div>
                <FaCheck className='facheck m-1' />
                <small>Sign Up, complete your profile.</small>
              </div>
              <div>
                <FaCheck className='facheck m-1' />
                <small>Find a partner loaction wise</small>
              </div>
              <div>
                <FaCheck className='facheck m-1' />
                <small>Connect to the real person</small>
              </div>
            </div>
            <div className='butn p-4 mt-n4'>
              <Link to='/SignUp' className='M'>
                <button>Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className='p-4'>
        <h4>HiRoomie</h4>
        <ul>
          <li>
            <small>SignUp</small>
          </li>
          <li>
            <small>Login</small>
          </li>
          <li>
            <small>Home</small>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Cover
