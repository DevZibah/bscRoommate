import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import Profile from './Profile'

const List = ({ item, itemauthor }) => {
  const [state, setState] = useState([item])
  const [show, setShow] = useState(false)

  console.log(state)
  return (
    <div>
      <Fragment>
        {state
          .filter((item) => {
            if (item == itemauthor[0]) {
              return null
            } else {
              return item
            }
          })
          .map((item, key) => {
            return (
              <div key={key}>
                <div key={key} className='location mt-3 p-2'>
                  <p>
                    <span>Name:</span> {item.lastname} {item.firstname}
                  </p>
                  <p>
                    <span>State:</span> {item.state} <span>Area:</span>{' '}
                    {item.area}
                  </p>
                  <div>
                    <button onClick={() => setShow(true)}>View details</button>
                    <Modal item={item} show={show} onClose={() => setShow(false)}/>
                  </div>
                </div>
              </div>
            )
          })}
      </Fragment>
    </div>
  )
}

export default List
