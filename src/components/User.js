import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Modall from './Modall'
import Modalll from './Modalll'

const User = (props) => {
  const [state, setState] = useState([])
  const [loading1, setLoading1] = useState(true)
  const [loading, setLoading] = useState(true)
  const [username, setUserName] = useState('')
  const [show, setShow] = useState(false)
  const [click, setClick] = useState()

  const itemauthor = state.filter((item) => {
    return item.alias === username
  })
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('https://bscroommate.netlify.app/login/')
    } else {
      fetch('https://project-roommate.herokuapp.com/api/v1/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setState(data)
          setLoading1(false)
        })
    }
  }, [])

  useEffect(() => {
    //  checks to see if a user is authenticated in line 9
    if (localStorage.getItem('token') === null) {
      window.location.replace('https://bscroommate.netlify.app/login/')
    } else {
      fetch('https://project-roommate.herokuapp.com/api/v1/rest-auth/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserName(data.username)
          setLoading(false)
        })
    }
  }, [])

  return (
    <div className='usee p-3'>
      <div className='arrow'>
        <Link to='/Dashboard'>
          <FaLongArrowAltLeft className='falong' />
        </Link>
        <h5>Users</h5>
      </div>
      {loading1 === false && (
        <Fragment>
          {state
            .filter((item) => {
              if (item == itemauthor[0]) {
                return null
              } else {
                return item
              }
            })
            .map((item, key) => {
              return (
                <div
                  key={key}
                  // data-aos='fade-up'
                  // data-aos-offset='200'
                  // data-aos-easing='ease-in-sine'
                  // data-aos-duration='600'
                >
                  <div key={key} className='loca mt-3 p-2'>
                    <p>
                      <a>{item.alias}</a>
                    </p>
                    <p>
                      <span>Name:</span> {item.lastname} {item.firstname}
                    </p>
                    <p>
                      <span>State:</span> {item.state} <span>Area:</span>{' '}
                      {item.area}
                    </p>
                    <div className='modal-div'>
                      <button onClick={() => (setShow(true), setClick(item))}>
                        <small>View details</small>
                      </button>
                      <Modalll
                        item={item}
                        show={show}
                        click={click}
                        onClose={() => setShow(false)}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
        </Fragment>
      )}
    </div>
  )
}

export default User
