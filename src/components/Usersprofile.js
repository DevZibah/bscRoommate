import React, { useState } from 'react'
import home from '../assets/home.jpg'

const Usersprofile = () => {
  const [alias, setAlias] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState('')
  const [state, setState] = useState('')
  const [area, setArea] = useState('')
  const [email, setEmail] = useState('')
  // const [image, setImage] = useState('')
  const [gender, setGender] = useState('')
  const [agegroup, setAgegroup] = useState('')
  const [religion, setReligion] = useState('')
  const [discipline, setDiscipline] = useState('')
  const [gender1, setGender1] = useState('')
  const [smoking, setSmoking] = useState('')
  const [alcohol, setAlcohol] = useState('')
  const [uncleanliness, setUncleanliness] = useState('')
  const [lateness, setLateness] = useState('')
  const [homepartying, setHomepartying] = useState('')
  const [errors, setErrors] = useState(false)

  //   Upon successful registration, the user will receive an authentication token from the request. This token will be used to authenticate them instead of having them go to the login.
  const onSubmit = (e) => {
    e.preventDefault()
    const user = {
      alias: alias,
      firstname: firstname,
      lastname: lastname,
      age: age,
      state: state,
      area: area,
      email: email,
      // image: image,
      gender: gender,
      agegroup: agegroup,
      religion: religion,
      discipline: discipline,
      gender1: gender1,
      smoking: smoking,
      alcohol: alcohol,
      uncleanliness: uncleanliness,
      lateness: lateness,
      homepartying: homepartying,
    }
    var url = 'http://127.0.0.1:8000/api/v1/'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        setFirstname('')
        setAlias('')
        setLastname('')
        setAge('')
        setState('')
        setArea('')
        setEmail('')
        // setImage('')
        setGender('')
        setAgegroup('')
        setReligion('')
        setDiscipline('')
        setGender1('')
        setSmoking('')
        setAlcohol('')
        setUncleanliness('')
        setLateness('')
        setHomepartying('')
        window.alert('profile created successfully')
        window.location.replace('http://localhost:3000/dashboard')
        setErrors(true)
      })
      .catch(function (error) {
        console.log('ERROR:', error)
      })
  }
  return (
    <div className='profileform mb-n5'>
      <div className='home'>
        <img src={home} alt='home' />
      </div>
      <form onSubmit={onSubmit} className='forrm p-3'>
        <div className='username p-4'>
          <label htmlFor='alias'>Username*</label> <br />
          <input
            name='alias'
            type='text'
            id='alias'
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            required
          />{' '}
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='firstname'>First Name*</label> <br />
          <input
            name='firstname'
            type='text'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />{' '}
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='lastname'>Last Name*</label> <br />
          <input
            name='lastname'
            type='text'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />{' '}
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='age'>Age*</label> <br />
          <input
            name='age'
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />{' '}
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='state'>State*</label> <br />
          <input
            name='state'
            type='text'
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />{' '}
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='area'>Area*</label> <br />
          <input
            name='area'
            type='text'
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />{' '}
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='email'>Email*</label> <br />
          <input
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />{' '}
        </div>
        {/* <label htmlFor='image'>image:</label> <br />
        <input
          name='image'
          type='image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />{' '} */}
        <br />
        <div className='username p-4'>
          <label htmlFor='gender'>Gender*</label> <br />
          <input
            name='gender'
            type='text'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          />{' '}
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='agegroup'>Age Group*</label> <br />
          <input
            name='agegroup'
            type='text'
            value={agegroup}
            onChange={(e) => setAgegroup(e.target.value)}
            required
          />{' '}
          <br /> <br />
          <small className='hints'>
            <span className='hint'>Hint*</span> Input your preferred age group
            from the following:
            <br />
            * 16 - 25
            <br />* 26 - 50
          </small>
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='religon'>Religion*</label> <br />
          <input
            name='religon'
            type='text'
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
            required
          />{' '}
          <br /> <br />
          <small className='hints'>
            <span className='hint'>Hint*</span> Input your preferred religion
            from the following:
            <br />
            * Christian
            <br />* Muslim
            <br />* Other
          </small>
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='discipline'>Discipline*</label> <br />
          <input
            name='discipline'
            type='text'
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            required
          />{' '}
          <br /> <br />
          <small className='hints'>
            <span className='hint'>Hint*</span> Input your preferred discipline
            from the following:
            <br />
            * Science
            <br />* Arts
            <br />* Commercial
          </small>
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='gender1'>Gender*</label> <br />
          <input
            name='gender1'
            type='text'
            value={gender1}
            onChange={(e) => setGender1(e.target.value)}
            required
          />{' '}
          <br />
          <small className='hints'>
            <span className='hint'>Hint*</span> Input your preferred gender
          </small>
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='smoking'>
            Can you stay with a person that smokes?*
          </label>{' '}
          <br />
          <input
            name='smoking'
            type='text'
            value={smoking}
            onChange={(e) => setSmoking(e.target.value)}
            required
          />{' '}
          <br />
          <small className='hints'>
            <span className='hint'>Hint*</span> Answer with either yes or no
          </small>
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='alcohol'>
            Can you stay with a person that takes alcohol?*
          </label>{' '}
          <br />
          <input
            name='alcohol'
            type='text'
            value={alcohol}
            onChange={(e) => setAlcohol(e.target.value)}
            required
          />{' '}
          <br />
          <small className='hints'>
            <span className='hint'>Hint*</span> Answer with either yes or no
          </small>
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='uncleanliness'>
            Can you tolerate uncleanliness?*
          </label>{' '}
          <br />
          <input
            name='uncleanliness'
            type='text'
            value={uncleanliness}
            onChange={(e) => setUncleanliness(e.target.value)}
            required
          />{' '}
          <br />
          <small className='hints'>
            <span className='hint'>Hint*</span> Answer with either yes or no
          </small>
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='lateness'>Can you tolerate lateness?</label> <br />
          <input
            name='lateness'
            type='text'
            value={lateness}
            onChange={(e) => setLateness(e.target.value)}
            required
          />{' '}
          <br />
          <small className='hints'>
            <span className='hint'>Hint*</span> Answer with either yes or no
          </small>
        </div>
        <br />
        <div className='username p-4'>
          <label htmlFor='homepartying'>Can you tolerate homepartying?*</label>{' '}
          <br />
          <input
            name='homepartying'
            type='text'
            value={homepartying}
            onChange={(e) => setHomepartying(e.target.value)}
            required
          />{' '}
          <br />
          <small className='hints'>
            <span className='hint'>Hint*</span> Answer with either yes or no
          </small>
        </div>
        <br />
        <div className='buttoon'>
          <input type='submit' value='Get Started' />
        </div>
      </form>
    </div>
  )
}

export default Usersprofile
