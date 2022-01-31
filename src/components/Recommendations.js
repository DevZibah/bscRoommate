import React, { useState, useEffect, useContext, Fragment } from 'react'
import { RecommendContext } from '../contexts/RecommendContext'

const Recommendations = () => {
  // const { state, itemauthor, loading, loading1 } = useContext(RecommendContext)
  const [username, setUserName] = useState([])
  const [loading, setLoading] = useState(true)
  const [state, setState] = useState([])
  const [loading1, setLoading1] = useState(true)

  const itemauthor = state.filter((item) => {
    return item.alias === username
  })

  useEffect(() => {
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

  return (
    <div>
      {loading === false && (
        <Fragment>
          {state
            .filter((item) => {
              if (item == itemauthor[0]) {
                return null
              } else if (
                item.state === itemauthor[0].state &&
                item.agegroup === itemauthor[0].agegroup &&
                item.alcohol === itemauthor[0].alcohol &&
                item.area === itemauthor[0].area &&
                item.discipline === itemauthor[0].discipline &&
                item.gender1 === itemauthor[0].gender1 &&
                item.homepartying === itemauthor[0].homepartying &&
                item.lateness === itemauthor[0].lateness &&
                item.religion === itemauthor[0].religion &&
                item.smoking === itemauthor[0].smoking &&
                item.uncleanliness === itemauthor[0].uncleanliness
              ) {
                return item
              }
            })
            .map((item, key) => {
              return (
                <div key={key}>
                  <h5>{item.alias}</h5>
                  <h4>99%</h4>
                </div>
              )
            })}
          {state
            .filter((item2) => {
              if (item2 == itemauthor[0]) {
                return null
              } else if (
                item2.state === itemauthor[0].state &&
                item2.agegroup === itemauthor[0].agegroup &&
                item2.alcohol === itemauthor[0].alcohol &&
                item2.area === itemauthor[0].area &&
                item2.discipline === itemauthor[0].discipline &&
                item2.gender1 === itemauthor[0].gender1 &&
                item2.homepartying === itemauthor[0].homepartying &&
                item2.lateness === itemauthor[0].lateness &&
                item2.religion === itemauthor[0].religion &&
                item2.smoking === itemauthor[0].smoking
              ) {
                return item2
              }
            })
            .map((item2, key) => {
              return (
                <div key={key}>
                  <h5>{item2.alias}</h5>
                  <h4>95%</h4>
                </div>
              )
            })}
          {state
            .filter((item3) => {
              if (item3 == itemauthor[0]) {
                return null
              } else if (
                item3.state === itemauthor[0].state &&
                item3.agegroup === itemauthor[0].agegroup &&
                item3.alcohol === itemauthor[0].alcohol &&
                item3.area === itemauthor[0].area &&
                item3.discipline === itemauthor[0].discipline &&
                item3.gender1 === itemauthor[0].gender1 &&
                item3.homepartying === itemauthor[0].homepartying &&
                item3.lateness === itemauthor[0].lateness &&
                item3.religion === itemauthor[0].religion
              ) {
                return item3
              }
            })
            .map((item3, key) => {
              return (
                <div key={key}>
                  <h5>{item3.alias}</h5>
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
                <div key={key}>
                  <h5>{item4.alias}</h5>
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
                <div key={key}>
                  <h5>{item5.alias}</h5>
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
                <div key={key}>
                  <h5>{item6.alias}</h5>
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
                <div key={key}>
                  <h5>{item7.alias}</h5>
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
                <div key={key}>
                  <h5>{item8.alias}</h5>
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
                <div key={key}>
                  <h5>{item9.alias}</h5>
                  <h4>50%</h4>
                </div>
              )
            })}
        </Fragment>
      )}
    </div>
  )
}

export default Recommendations
