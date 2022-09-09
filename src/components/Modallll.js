import React, { useState } from 'react'

const Modallll = (props) => {
  // const [state, setState] = useState(props.item)
  if (!props.show1) {
    return null
  }
  return (
    <div className='modal p-3' onClick={props.onClose}>
      <div
        className='modal-content p-3'
        data-aos='zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      ><h4>Your roommate has been picked</h4></div>
    </div>
  )
}

export default Modallll
