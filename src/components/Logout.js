// Logout is done as a post request for security purposes.
import React, { useState, useEffect, Fragment } from 'react'

const Logout = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('http://localhost:3000/login')
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogout = (e) => {
    e.preventDefault()

    fetch('http://127.0.0.1:8000/api/v1/rest-auth/logout/', {
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
        window.location.replace('http://localhost:3000')
      })
  }

  return (
    <div>
      {loading === false && (
        <Fragment>
          <input type='button' value='Logout' onClick={handleLogout} />
        </Fragment>
      )}
    </div>
  )
}

export default Logout
