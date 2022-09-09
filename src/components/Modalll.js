import React, { useState } from 'react'
import Modallll from './Modallll'

const Modalll = (props) => {
  const [state, setState] = useState(props.item)
  const [show1, setShow1] = useState(false)

  //   console.log(props.item);
  //   console.log(props.click);
  if (!props.show) {
    return null
  }
  return (
    <div className='modal p-3'>
      <div
        className='modal-content p-3'
        data-aos='zoom-in'
        data-aos-offset='200'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
      >
        <div className='modal-title'>
          <div className='d-flex closse'>
            <div>
              <h4 className='logo'>HiRoomie</h4>
            </div>
            <div>
              <h4 onClick={props.onClose} className='logo'>
                Close
              </h4>
            </div>
          </div>
          <div className='flex mt-3'>
            <h6>
              Name:{' '}
              <span>
                {props.click.lastname} {props.click.firstname}
              </span>
            </h6>
          </div>
          <div className='flex mt-2'>
            <h6>
              Email Address: <span>{props.click.email}</span>
            </h6>
          </div>
        </div>
        <div className='modal-body mt-3'>
          <div className='flex1 mt-2'>
            <h6>
              Gender: <span>{props.click.gender}</span>
            </h6>
            <h6>
              Age: <span>{props.click.age}</span>
            </h6>
          </div>
          <div className='flex1 mt-2'>
            <h6>
              Discipline: <span>{props.click.discipline}</span>
            </h6>
            <h6>
              Area: <span>{props.click.area}</span>
            </h6>
          </div>
          <div className='flex1 mt-2'>
            <h6>
              Religion: <span>{props.click.religion}</span>
            </h6>
            <h6>
              State: <span>{props.click.state}</span>
            </h6>
          </div>
        </div>
        <div className='mt-3'>
          <section className='text-center'>Preferences</section>
          <div className='flex1 mt-1'>
            <h6>
              Alcohol: <span>{props.click.alcohol}</span>
            </h6>
            <h6>
              Smoking: <span>{props.click.smoking}</span>
            </h6>
          </div>
          <div className='flex1 mt-1'>
            <h6>
              Age Group: <span>{props.click.agegroup}</span>
            </h6>
            <h6>
              Gender: <span>{props.click.gender1}</span>
            </h6>
          </div>
          <div className='flex1 mt-1'>
            <h6>
              Uncleanliness: <span>{props.click.uncleanliness}</span>
            </h6>
            <h6>
              Lateness: <span>{props.click.lateness}</span>
            </h6>
          </div>
          <div className='flex1 mt-1'>
            <h6>
              Home Partying: <span>{props.click.homepartying}</span>
            </h6>
          </div>
        </div>
        <div className='modal-footer'>
          <button onClick={() => setShow1(true)} className='button'>
            Select Roommate
          </button>
          <Modallll show1={show1} onClose={() => setShow1(false)} />
        </div>
      </div>
    </div>
  )
}

export default Modalll
