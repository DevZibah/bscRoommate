import React, { useState, useEffect, useContext, Fragment } from 'react'
import Modall from './Modall'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Recommendations = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  const [username, setUserName] = useState([])
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState([])
  const [loading1, setLoading1] = useState(true)
  const [show, setShow] = useState(false)
  const [click, setClick] = useState()
  const [percent, setPercent] = useState('')

  const itemauthor = state.filter((item) => {
    return item.alias === username
  })

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('https://bscroommate.netlify.app/login')
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

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('https://bscroommate.netlify.app/login')
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
          console.log(state)
          setLoading1(false)
        })
    }
  }, [])

  return (
    <div>
      {loading === false && (
        <Fragment>
          {state
            .filter((item) => {
              if (item == itemauthor[0]) {
                return null
              } else if (
                item.state.toLowerCase() ===
                  itemauthor[0].state.toLowerCase() &&
                item.agegroup.toLowerCase() ===
                  itemauthor[0].agegroup.toLowerCase() &&
                item.alcohol.toLowerCase() ===
                  itemauthor[0].alcohol.toLowerCase() &&
                item.area.toLowerCase() === itemauthor[0].area.toLowerCase() &&
                item.discipline.toLowerCase() ===
                  itemauthor[0].discipline.toLowerCase() &&
                item.gender1.toLowerCase() ===
                  itemauthor[0].gender1.toLowerCase() &&
                item.homepartying.toLowerCase() ===
                  itemauthor[0].homepartying.toLowerCase() &&
                item.lateness.toLowerCase() ===
                  itemauthor[0].lateness.toLowerCase() &&
                item.religion.toLowerCase() ===
                  itemauthor[0].religion.toLowerCase() &&
                item.smoking.toLowerCase() ===
                  itemauthor[0].smoking.toLowerCase() &&
                item.uncleanliness.toLowerCase() ===
                  itemauthor[0].uncleanliness.toLowerCase()
              ) {
                return item
              }
            })
            .map((item, key) => {
              return (
                <div key={key} className='rec'>
                  <h5>@{item.alias}</h5>
                  <p>
                    <span>Name:</span> {item.lastname} {item.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item.state} <span>Area:</span>{' '}
                    {item.area}
                  </p>
                  <h4>99%</h4>
                  <div className='modal-div'>
                    <button onClick={() => (setShow(true), setClick(item))}>
                      <small>View details</small>
                    </button>
                    <Modall
                      click={click}
                      item={item}
                      show={show}
                      onClose={() => setShow(false)}
                    />
                  </div>
                </div>
              )
            })}
        </Fragment>
      )}
    </div>
  )
}

export default Recommendations
