import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Modall from './Modall'


const User = (props) => {
  const [state, setState] = useState([])
  const [loading1, setLoading1] = useState(true)
  const [loading, setLoading] = useState(true)
  const [username, setUserName] = useState('')
  const [show, setShow] = useState(false)

  const itemauthor = state.filter((item) => {
    return item.alias === username
  })
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login')
    } else {
      fetch('http://127.0.0.1:8000/api/v1/', {
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
      window.location.replace('http://localhost:3000/login')
    } else {
      fetch('http://127.0.0.1:8000/api/v1/rest-auth/user', {
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
              <div key={key}>
                <div key={key} className='loca mt-3 p-2'>
                  <p>{item.alias}</p>
                  <p>
                    <span>Name:</span> {item.lastname} {item.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item.state} <span>Area:</span>{' '}
                    {item.area}
                  </p>
                  <div className='modal-div'>
                    <button onClick={() => setShow(true)}>
                      <small>View details</small>
                    </button>
                    <Modall
                      alias={item.alias}
                      item={item}
                      show={show}
                      onClose={() => setShow(false)}
                    />
                  </div>
                </div>
              </div>
            )
          })}
      </Fragment>
    </div>
  )
}

export default User
