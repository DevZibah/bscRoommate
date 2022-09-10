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
          {/* {state
            .filter((item2) => {
              if (item2 == itemauthor[0]) {
                return null
              } else if (
                item2.state.toLowerCase() === itemauthor[0].state.toLowerCase() &&
                item2.agegroup.toLowerCase() === itemauthor[0].agegroup.toLowerCase() &&
                item2.alcohol.toLowerCase() === itemauthor[0].alcohol.toLowerCase() &&
                item2.area.toLowerCase() === itemauthor[0].area.toLowerCase() &&
                item2.discipline.toLowerCase() === itemauthor[0].discipline.toLowerCase() &&
                item2.gender1.toLowerCase() === itemauthor[0].gender1.toLowerCase() &&
                item2.homepartying.toLowerCase() ===
                  itemauthor[0].homepartying &&
                item2.lateness.toLowerCase() === itemauthor[0].lateness.toLowerCase() &&
                item2.religion.toLowerCase() === itemauthor[0].religion.toLowerCase() &&
                item2.smoking.toLowerCase() === itemauthor[0].smoking.toLowerCase()
              ) {
                return item2
              }
            })
            .map((item2, key) => {
              return (
                <div key={key} className='rec'>
                  <h5>@{item2.alias}</h5>
                  <p>
                    <span>Name:</span> {item2.lastname} {item2.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item2.state} <span>Area:</span>{' '}
                    {item2.area}
                  </p>
                  <h4>95%</h4>
                </div>
              )
            })}
          {state
            .filter((item3) => {
              if (item3 == itemauthor[0]) {
                return null
              } else if (
                item3.state.toLowerCase() === itemauthor[0].state.toLowerCase() &&
                item3.agegroup.toLowerCase() === itemauthor[0].agegroup.toLowerCase() &&
                item3.alcohol.toLowerCase() === itemauthor[0].alcohol.toLowerCase() &&
                item3.area.toLowerCase() === itemauthor[0].area.toLowerCase() &&
                item3.discipline.toLowerCase() === itemauthor[0].discipline.toLowerCase() &&
                item3.gender1.toLowerCase() === itemauthor[0].gender1.toLowerCase() &&
                item3.homepartying.toLowerCase() === itemauthor[0].homepartying.toLowerCase() &&
                item3.lateness.toLowerCase() === itemauthor[0].lateness.toLowerCase() &&
                item3.religion.toLowerCase() === itemauthor[0].religion.toLowerCase()
              ) {
                return item3
              }
            })
            .map((item3, key) => {
              return (
                <div key={key} className='rec'>
                  <h5>@{item3.alias}</h5>
                  <p>
                    <span>Name:</span> {item3.lastname} {item3.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item3.state} <span>Area:</span>{' '}
                    {item3.area}
                  </p>
                  <h4>90%</h4>
                </div>
              )
            })}
          {state
            .filter((item4) => {
              if (item4 == itemauthor[0]) {
                return null
              } else if (
                item4.state === itemauthor[0].state &&
                item4.agegroup === itemauthor[0].agegroup &&
                item4.alcohol === itemauthor[0].alcohol &&
                item4.area === itemauthor[0].area &&
                item4.discipline === itemauthor[0].discipline &&
                item4.gender1 === itemauthor[0].gender1 &&
                item4.homepartying === itemauthor[0].homepartying &&
                item4.lateness === itemauthor[0].lateness
              ) {
                return item4
              }
            })
            .map((item4, key) => {
              return (
                <div key={key} className='rec'>
                  <h5>@{item4.alias}</h5>
                  <p>
                    <span>Name:</span> {item4.lastname} {item4.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item4.state} <span>Area:</span>{' '}
                    {item4.area}
                  </p>
                  <h4>85%</h4>
                </div>
              )
            })}
          {state
            .filter((item5) => {
              if (item5 == itemauthor[0]) {
                return null
              } else if (
                item5.state === itemauthor[0].state &&
                item5.agegroup === itemauthor[0].agegroup &&
                item5.alcohol === itemauthor[0].alcohol &&
                item5.area === itemauthor[0].area &&
                item5.discipline === itemauthor[0].discipline &&
                item5.gender1 === itemauthor[0].gender1 &&
                item5.homepartying === itemauthor[0].homepartying
              ) {
                return item5
              }
            })
            .map((item5, key) => {
              return (
                <div key={key} className='rec'>
                  <h5>@{item5.alias}</h5>
                  <p>
                    <span>Name:</span> {item5.lastname} {item5.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item5.state} <span>Area:</span>{' '}
                    {item5.area}
                  </p>
                  <h4>80%</h4>
                </div>
              )
            })}
          {state
            .filter((item6) => {
              if (item6 == itemauthor[0]) {
                return null
              } else if (
                item6.state === itemauthor[0].state &&
                item6.agegroup === itemauthor[0].agegroup &&
                item6.alcohol === itemauthor[0].alcohol &&
                item6.area === itemauthor[0].area &&
                item6.discipline === itemauthor[0].discipline &&
                item6.gender1 === itemauthor[0].gender1
              ) {
                return item6
              }
            })
            .map((item6, key) => {
              return (
                <div key={key} className='rec'>
                  <h5>@{item6.alias}</h5>
                  <p>
                    <span>Name:</span> {item6.lastname} {item6.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item6.state} <span>Area:</span>{' '}
                    {item6.area}
                  </p>
                  <h4>75%</h4>
                </div>
              )
            })}
          {state
            .filter((item7) => {
              if (item7 == itemauthor[0]) {
                return null
              } else if (
                item7.state === itemauthor[0].state &&
                item7.agegroup === itemauthor[0].agegroup &&
                item7.alcohol === itemauthor[0].alcohol &&
                item7.area === itemauthor[0].area &&
                item7.discipline === itemauthor[0].discipline
              ) {
                return item7
              }
            })
            .map((item7, key) => {
              return (
                <div key={key} className='rec'>
                  <h5>@{item7.alias}</h5>
                  <p>
                    <span>Name:</span> {item7.lastname} {item7.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item7.state} <span>Area:</span>{' '}
                    {item7.area}
                  </p>
                  <h4>70%</h4>
                </div>
              )
            })}
          {state
            .filter((item8) => {
              if (item8 == itemauthor[0]) {
                return null
              } else if (
                item8.state === itemauthor[0].state &&
                item8.agegroup === itemauthor[0].agegroup &&
                item8.alcohol === itemauthor[0].alcohol &&
                item8.area === itemauthor[0].area
              ) {
                return item8
              }
            })
            .map((item8, key) => {
              return (
                <div key={key} className='rec'>
                  <h5>@{item8.alias}</h5>
                  <p>
                    <span>Name:</span> {item8.lastname} {item8.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item8.state} <span>Area:</span>{' '}
                    {item8.area}
                  </p>
                  <h4>65%</h4>
                </div>
              )
            })}
          {state
            .filter((item9) => {
              if (item9 == itemauthor[0]) {
                return null
              } else if (
                item9.state === itemauthor[0].state ||
                item9.agegroup === itemauthor[0].agegroup ||
                item9.alcohol === itemauthor[0].alcohol ||
                item9.area === itemauthor[0].area ||
                item9.discipline === itemauthor[0].discipline ||
                item9.gender1 === itemauthor[0].gender1 ||
                item9.homepartying === itemauthor[0].homepartying ||
                item9.lateness === itemauthor[0].lateness ||
                item9.religion === itemauthor[0].religion ||
                item9.smoking === itemauthor[0].smoking ||
                item9.uncleanliness === itemauthor[0].uncleanliness
              ) {
                return item9
              }
            })
            .map((item9, key) => {
              return (
                <div key={key} className='rec'>
                  <h5>@{item9.alias}</h5>
                  <p>
                    <span>Name:</span> {item9.lastname} {item9.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item9.state} <span>Area:</span>{' '}
                    {item9.area}
                  </p>
                  <h4>50%</h4>
                </div>
              )
            })} */}
        </Fragment>
      )}
    </div>
  )
}

export default Recommendations
