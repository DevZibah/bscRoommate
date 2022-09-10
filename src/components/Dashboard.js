import React, { useState, useEffect, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import List from '../components/List'
import Recommendations from './Recommendations'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Dashboard = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  const [username, setUserName] = useState('')
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState([])
  const [loading1, setLoading1] = useState(true)
  const [search, setSearch] = useState('')

  // console.log(state)
  const itemauthor = state.filter((item) => {
    return item.alias === username
  })
  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('https://bscroommate.netlify.app/login/')
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogout = (e) => {
    e.preventDefault()

    fetch('https://project-roommate.herokuapp.com/api/v1/rest-auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        localStorage.clear()
        window.location.replace('https://bscroommate.netlify.app/')
      })
  }

  useEffect(() => {
    //  checks to see if a user is authenticated in line 9
    if (localStorage.getItem('token') === null) {
      window.location.replace('https://bscroommate.netlify.app/')
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
          // console.log(data)
          setLoading1(false)
        })
    }
  }, [])
  useEffect(() => {
    //  checks to see if a user is authenticated in line 9
    if (localStorage.getItem('token') === null) {
      window.location.replace('https://bscroommate.netlify.app/')
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
          // console.log(data)
        })
    }
  }, [])
  return (
    <div className='text-dark p-4 dassd'>
      <div
        className='dashroomie'
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div>
          <h4 className='logo'>HiRoomie</h4>
        </div>
        <div className='logout'>
          <input type='button' value='Logout' onClick={handleLogout} />
        </div>
      </div>
      {loading1 === false && (
        <Fragment>
          {itemauthor.map((item, key) => (
            <div key={key}>
              <p className='user mt-5'>Hi {item.alias}!</p>
            </div>
          ))}
        </Fragment>
      )}
      <div className='heading'>
        <h4>Find a suitable roommate to share an apartment with.</h4>
      </div>
      <div className='mt-4 search'>
        <input
          type='text'
          id='search'
          placeholder='Search Usernames....'
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
        {state
          .filter((item) => {
            if (search == '') {
              return null
            } else if (
              item.alias.toLowerCase().includes(search.toLowerCase())
            ) {
              return item
            }
          })
          .map((item, key) => {
            return (
              <div key={key}>
                <div className='list'>
                  <List key={key} item={item} itemauthor={itemauthor} />
                </div>
              </div>
            )
          })}
      </div>
      <div className='recommend mt-4'>
        <div>
          <small>Recommendations</small>
        </div>
        <div className='profile'>
          <Link to='/User'>
            <small>Users</small>
          </Link>
        </div>
      </div>
      <div>
        <Recommendations itemauthor={itemauthor} />
      </div>
    </div>
  )
}

export default Dashboard
