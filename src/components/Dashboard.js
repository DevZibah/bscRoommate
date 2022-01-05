import React, { useState, useEffect, Fragment, useContext } from 'react'
import Logout from './Logout'

const Dashboard = () => {
  const [username, setUserName] = useState('')
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState([])
  const [loading1, setLoading1] = useState(true)
  // console.log(state)
  const itemauthor = state.filter((item) => {
    return item.username === username
  })
  console.log(itemauthor)
  // console.log(state)
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
          console.log(state);
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
          console.log(data.username)
        })
    }
  }, [])
  return (
    <div className='text-dark'>
      {loading === false && (
        <Fragment>
          <Logout />
          <h1>Dashboard</h1>
          {itemauthor.map((item) => (
            <div>
              <h2>hello {item.username}!</h2>
            </div>
          ))}
        </Fragment>
      )}
    </div>
  )
}

export default Dashboard
