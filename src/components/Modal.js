import React, { useState } from 'react'

const Modal = (props) => {
  const [state, setState] = useState(props.item)
  console.log(state)
  if (!props.show) {
    return null
  }
  return (
    <div className='modal p-3' onClick={props.onClose}>
      <div className='modal-content'>
        <div className='modal-title'>
          <h4>Modal title</h4>
          {state.alias}
        </div>
        <div className='modal-body'>This is the modal content</div>
        <div className='modal-footer'>
          <button className='button' onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
