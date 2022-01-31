import React, { useState, useEffect, Fragment } from 'react'

const Modall = (props) => {
  const [state, setState] = useState([props.item])
  const [username, setUserName] = useState('')
  const [loading, setLoading] = useState(true)
  // console.log(props.alias)
  const dis = state.forEach((item, key) => {
    return item.alias === props.alias
  })
  // console.log(dis)
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
  // console.log(state)
  if (!props.show) {
    return null
  }
  return (
    <div className='modal p-3' onClick={props.onClose}>
      <div className='modal-content p-3'>
        <Fragment>
          <h4>hello</h4>
        </Fragment>
        <div className='modal-footer'>
          <button className='button'>Select Roommate</button>
        </div>
      </div>
    </div>
  )
}

export default Modall
