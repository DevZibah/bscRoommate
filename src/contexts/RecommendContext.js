// storeContext contains our data from data.json
import React, { useState, createContext, useEffect } from 'react'

export const RecommendContext = createContext()

const RecommendContextProvider = ({ children }) => {
  // the array of data to hold the json data provided, data here as an array is empty.
  const [username, setUserName] = useState([])
  const [loading, setLoading] = useState(true)
  const [loading1, setLoading1] = useState(true)
  const [stat, setStat] = useState([])

  const author = stat.filter((item) => {
    return item.alias === username
  })
  //   console.log(author)

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
          setStat(data)
          setLoading1(false)
        })
    }
  }, [])

  return (
    <RecommendContext.Provider value={{ stat, author, loading, loading1 }}>
      {children}
    </RecommendContext.Provider>
  )
}

export default RecommendContextProvider
