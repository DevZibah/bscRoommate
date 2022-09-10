import React, { useState, useEffect } from 'react'

const Profile = (props) => {
  const [state, setState] = useState([])
  const [loading1, setLoading1] = useState(true)
  
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
          console.log(data)
          setLoading1(false)
        })
    }
  }, [])
  return (
    <div>
      <h4>hello</h4>
    </div>
  )
}

export default Profile
