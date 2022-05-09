import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import svg from '../assets/firstimage.svg'
import svg1 from '../assets/secondimage.svg'
import svg2 from '../assets/thirdimage.svg'
import svg3 from '../assets/fourth.svg'
const Cover = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div>
      <div className='firstdiv'>
        <nav className='navbar navbar-expand-lg'>
          <h4 className='logo'>HiRoomie</h4>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars ham'></i>
          </button>
          <div
            className='
            collapse
            navbar-collapse
            text-center
            d-md-flex
            justify-content-end
          '
            id='navbarNav'
          >
            <ul className='navbar-nav mt-3 cc-ul'>
              <Link to='/SignUp' className='signup'>
                <button>SignUp</button>
              </Link>
              <Link to='/Login' className='signup mt-2 login'>
                <button>Login</button>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <div
        className='cll'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
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
      </div>
      <section
        className='section-one'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <h4 className='rome'>Why should you use HiRoomie?</h4>
        <div className='grid'>
          <div className='grid-div gridd'>
            <div className='image-two p-2'>
              <img src={svg1} alt='image2' className='image2 p-5' />
            </div>
            <div className='fitt'>
              <h4>A Perfect Fit</h4>
              <p>
                Create your own roommate profile and you'll be up and running in
                minutes! Specifics such as location, room details, pet
                preferences, and more should be provided.
              </p>
            </div>
          </div>
          <div className='grid-div griid'>
            <div className='image-two p-2'>
              <img src={svg2} alt='image3' className='image2 p-5' />
            </div>
            <div className='boon'>
              <h4>A Genuine Bond</h4>
              <p>
                Use our website to communicate with potential roommates at any
                time. make a genuine connection that is safe, convenient, and
                simple
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className='ano-sec'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='grid grdd'>
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
                <small>Find a partner location wise</small>
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
            <Link to='/SignUp' className='foot-sign'>
              <small>SignUp</small>
            </Link>
          </li>
          <li>
            <Link to='/Login' className='foot-sign'>
              <small>Login</small>
            </Link>
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
