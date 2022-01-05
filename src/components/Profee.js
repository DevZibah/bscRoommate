import React, { useState } from 'react'

const Profee = () => {
  const [state, setState] = useState({
    firstname: '',
    username: '',
    lastname: '',
  })
  const handleChange = (e) => {
    const value = e.target.value
    setState({
      // we are spreading state the existing state back into the new state value, merging it manually.
      ...state,
      // the name in square bracket is to create a dynamic key name in the object.
      [e.target.name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('ITEM:', state)
    var url = 'http://127.0.0.1:8000/api/v1/'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(state),
    })
      .then((response) => {
        setState({
          state: {
            username: '',
            firstname: '',
            lastname: '',
          },
        })
        window.alert('profile created successfully')
        window.location.replace('http://localhost:3000/dashboard')
      })
      .catch(function (error) {
        console.log('ERROR:', error)
      })
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <div className='form-group'>
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Enter Your UserName'
          name='username'
          value={state.username}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Enter Your FirstName'
          name='firstname'
          value={state.firstname}
          onChange={handleChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          className='form-control form-control-lg'
          placeholder='Enter Your lastname'
          name='lastname'
          value={state.lastname}
          onChange={handleChange}
        />
      </div>
      <button className='btn btn-primary btn-block'>Get Started</button>
    </form>
  )
}

export default Profee
