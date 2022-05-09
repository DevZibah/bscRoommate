import React, { useState } from 'react'
import User from './User'

const Modal = (props) => {
  const [state, setState] = useState(props.item)
  if (!props.show) {
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
      >
        <div className='modal-title'>
          <div>
            <h4 className='logo'>HiRoomie</h4>
          </div>
          <div className='flex mt-3'>
            <h6>
              Name:{' '}
              <span>
                {state.lastname} {state.firstname}
              </span>
            </h6>
          </div>
          <div className='flex mt-2'>
            <h6>
              Email Address: <span>{state.email}</span>
            </h6>
          </div>
        </div>
        <div className='modal-body mt-3'>
          <div className='flex1 mt-2'>
            <h6>
              Gender: <span>{state.gender}</span>
            </h6>
            <h6>
              Age: <span>{state.age}</span>
            </h6>
          </div>
          <div className='flex1 mt-2'>
            <h6>
              Discipline: <span>{state.discipline}</span>
            </h6>
            <h6>
              Area: <span>{state.area}</span>
            </h6>
          </div>
          <div className='flex1 mt-2'>
            <h6>
              Religion: <span>{state.religion}</span>
            </h6>
            <h6>
              State: <span>{state.state}</span>
            </h6>
          </div>
        </div>
        <div className='mt-3'>
          <section className='text-center'>Preferences</section>
          <div className='flex1 mt-1'>
            <h6>
              Alcohol: <span>{state.alcohol}</span>
            </h6>
            <h6>
              Smoking: <span>{state.smoking}</span>
            </h6>
          </div>
          <div className='flex1 mt-1'>
            <h6>
              Age Group: <span>{state.agegroup}</span>
            </h6>
            <h6>
              Gender: <span>{state.gender1}</span>
            </h6>
          </div>
          <div className='flex1 mt-1'>
            <h6>
              Uncleanliness: <span>{state.uncleanliness}</span>
            </h6>
            <h6>
              Lateness: <span>{state.lateness}</span>
            </h6>
          </div>
          <div className='mt-1'>
            <h6>
              Home Partying: <span>{state.homepartying}</span>
            </h6>
          </div>
        </div>
        <div className='modal-footer'>
          <button className='button'>Select Roommate</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
