// Logout is done as a post request for security purposes.
import React, { useState, useEffect, Fragment } from 'react'

const Logout = () => {
  const [loading, setLoading] = useState(true)

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
