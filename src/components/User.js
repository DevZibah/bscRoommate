import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const User = (props) => {
  const [state, setState] = useState([])
  const [loading1, setLoading1] = useState(true)
  const [loading, setLoading] = useState(true)
  const [username, setUserName] = useState('')

  const itemauthor = state.filter((item) => {
    return item.alias === username
  })

  useEffect(() => {
    //  checks to see if a user is authenticated in line 9
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
          // console.log(data)
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
          // console.log(data)
        })
    }
  }, [])

  return (
    <div>
      <div>
        <Link to='/Dashboard'>Go back</Link>
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
                <div key={key} className='location mt-3 p-2'>
                  <p>
                    <span>Name:</span> {item.lastname} {item.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item.state} <span>Area:</span>{' '}
                    {item.area}
                  </p>
                </div>
              </div>
            )
          })}
      </Fragment>
    </div>
  )
}

export default User
