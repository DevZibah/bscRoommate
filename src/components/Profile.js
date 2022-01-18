import React, { useState } from 'react'

const Profile = () => {
  const [alias, setAlias] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [age, setAge] = useState('')
  const [state, setState] = useState('')
  const [area, setArea] = useState('')
  const [email, setEmail] = useState('')
  const [genders, setGenders] = useState('')

  // const [image, setImage] = useState('')
  // const [female, setFemale] = useState('')
  // const [male, setMale] = useState('')
  // const [eighteentotwentyseven, setEighteentotwentyseven] = useState('')
  // const [twentyeighttothrityfive, setTwentyeighttothrityfive] = useState('')
  // const [thirtysixtofifty, setThirtysixtofifty] = useState('')
  // const [christianity, setChristianity] = useState('')
  // const [muslim, setMuslim] = useState('')
  // const [other, setOther] = useState('')
  // const [science, setScience] = useState('')
  // const [IT, setIt] = useState('')
  // const [commercial, setCommercial] = useState('')
  // const [arts, setArts] = useState('')
  // const [female1, setFemale1] = useState('')
  // const [male1, setMale1] = useState('')
  // const [smoking, setSmoking] = useState('')
  // const [alcoholintake, setAlcoholintake] = useState('')
  // const [uncleanliness, setUncleanliness] = useState('')
  // const [lateness, setLateness] = useState('')
  // const [homepartying, setHomepartying] = useState('')
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
      genders: genders
      // image: image,
      // female: female,
      // male: male,
      // eighteentotwentyseven: eighteentotwentyseven,
      // twentyeighttothrityfive: twentyeighttothrityfive,
      // thirtysixtofifty: thirtysixtofifty,
      // christianity: christianity,
      // muslim: muslim,
      // other: other,
      // science: science,
      // IT: IT,
      // commercial: commercial,
      // arts: arts,
      // female1: female1,
      // male1: male1,
      // smoking: smoking,
      // alcoholintake: alcoholintake,
      // uncleanliness: uncleanliness,
      // lateness: lateness,
      // homepartying: homepartying,
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
        // setFemale('')
        // setMale('')
        // setEighteentotwentyseven('')
        // setTwentyeighttothrityfive('')
        // setThirtysixtofifty('')
        // setChristianity('')
        // setMuslim('')
        // setOther('')
        // setScience('')
        // setIt('')
        // setCommercial('')
        // setArts('')
        // setFemale1('')
        // setMale1('')
        // setSmoking('')
        // setAlcoholintake('')
        // setUncleanliness('')
        // setLateness('')
        // setHomepartying('')
        window.alert('profile created successfully')
        window.location.replace('http://localhost:3000/dashboard')
        setErrors(true)
      })
      .catch(function (error) {
        console.log('ERROR:', error)
      })
  }
  return (
    <div>
      {/* {loading === false && <h1>Profile</h1>} */}
      {/* {errors === true && <h2>Cannot signup with provided credentials</h2>} */}
      <form onSubmit={onSubmit} className='text-dark'>
        <label htmlFor='alias'>Username:</label> <br />
        <input
          name='alias'
          type='text'
          id='alias'
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='firstname'>firstname:</label> <br />
        <input
          name='firstname'
          type='text'
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='lastname'>lastname:</label> <br />
        <input
          name='lastname'
          type='text'
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='age'>age:</label> <br />
        <input
          name='age'
          type='number'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='state'>state:</label> <br />
        <input
          name='state'
          type='text'
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='area'>area:</label> <br />
        <input
          name='area'
          type='text'
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='email'>email:</label> <br />
        <input
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />{' '}
        <br />
        <div className='container p-5'>
          <select
            className='custom-select'
            value={genders}
            onChange={(e) => {
              const selectedGender = e.target.value
              setGenders(selectedGender)
            }}
          >
            <option value='FEMALE'>FEMALE</option>
            <option value='MALE'>MALE</option>
          </select>
        </div>
        {/* <label htmlFor='image'>image:</label> <br />
        <input
          name='image'
          type='image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />{' '}
        <br />
        <div>
          <input
            type='radio'
            id='css'
            name='gender'
            value={female}
            onChange={(e) => setFemale(e.target.value)}
          />{' '}
          <label htmlFor='css'>Female</label>
          <br />
          <input
            type='radio'
            id='html'
            name='gender'
            value={male}
            onChange={(e) => setMale(e.target.value)}
          />{' '}
          <label htmlFor='html'>Male</label>
          <br />
        </div>
        <div>
          <small>select your preferred age group</small>
          <input
            type='radio'
            id='eighteentotwentyseven'
            name='age'
            value={eighteentotwentyseven}
            onChange={(e) => setEighteentotwentyseven(e.target.value)}
          />{' '}
          <label htmlFor='eighteentotwentyseven'>eighteentotwentyseven</label>
          <br />
          <input
            type='radio'
            id='twentyeighttothrityfive'
            name='age'
            value={twentyeighttothrityfive}
            onChange={(e) => setTwentyeighttothrityfive(e.target.value)}
          />{' '}
          <label htmlFor='twentyeighttothrityfive'>
            twentyeighttothrityfive
          </label>
          <br />
          <input
            type='radio'
            id='thirtysixtofifty'
            name='age'
            value={thirtysixtofifty}
            onChange={(e) => setThirtysixtofifty(e.target.value)}
          />{' '}
          <label htmlFor='thirtysixtofifty'>thirtysixtofifty</label>
          <br />
        </div>
        <div>
          <small>select your religion</small>
          <input
            type='radio'
            id='christianity'
            name='religion'
            value={christianity}
            onChange={(e) => setChristianity(e.target.value)}
          />{' '}
          <label htmlFor='christianity'>christianity</label>
          <br />
          <input
            type='radio'
            id='muslim'
            name='religion'
            value={muslim}
            onChange={(e) => setMuslim(e.target.value)}
          />{' '}
          <label htmlFor='muslim'>muslim</label>
          <br />
          <input
            type='radio'
            id='other'
            name='religion'
            value={other}
            onChange={(e) => setOther(e.target.value)}
          />{' '}
          <label htmlFor='other'>other</label>
          <br />
        </div>
        <div>
          <small>select your field</small>
          <input
            type='radio'
            id='science'
            name='field'
            value={science}
            onChange={(e) => setScience(e.target.value)}
          />{' '}
          <label htmlFor='science'>science</label>
          <br />
          <input
            type='radio'
            id='IT'
            name='field'
            value={IT}
            onChange={(e) => setIt(e.target.value)}
          />{' '}
          <label htmlFor='IT'>IT</label>
          <br />
          <input
            type='radio'
            id='commercial'
            name='field'
            value={commercial}
            onChange={(e) => setCommercial(e.target.value)}
          />{' '}
          <label htmlFor='commercial'>commercial</label>
          <br />
          <input
            type='radio'
            id='arts'
            name='field'
            value={arts}
            onChange={(e) => setArts(e.target.value)}
          />{' '}
          <label htmlFor='arts'>arts</label>
          <br />
        </div>
        <div>
          <input
            type='radio'
            id='css1'
            name='gender1'
            value={female1}
            onChange={(e) => setFemale1(e.target.value)}
          />{' '}
          <label htmlFor='css1'>Female</label>
          <br />
          <input
            type='radio'
            id='html1'
            name='gender1'
            value={male1}
            onChange={(e) => setMale1(e.target.value)}
          />{' '}
          <label htmlFor='html1'>Male</label>
          <br />
        </div>
        <div>
          <small>select your dislikes</small>
          <input
            type='radio'
            id='smoking'
            name='dislike'
            value={smoking}
            onChange={(e) => setSmoking(e.target.value)}
          />{' '}
          <label htmlFor='smoking'>smoking</label>
          <br />
          <input
            type='radio'
            id='alcoholintake'
            name='dislike'
            value={alcoholintake}
            onChange={(e) => setAlcoholintake(e.target.value)}
          />{' '}
          <label htmlFor='alcoholintake'>alcoholintake</label>
          <br />
          <input
            type='radio'
            id='uncleanliness'
            name='dislike'
            value={uncleanliness}
            onChange={(e) => setUncleanliness(e.target.value)}
          />{' '}
          <label htmlFor='uncleanliness'>uncleanliness</label>
          <br />
          <input
            type='radio'
            id='lateness'
            name='dislike'
            value={lateness}
            onChange={(e) => setLateness(e.target.value)}
          />{' '}
          <label htmlFor='lateness'>lateness</label>
          <br />
          <input
            type='radio'
            id='homepartying'
            name='dislike'
            value={homepartying}
            onChange={(e) => setHomepartying(e.target.value)}
          />{' '}
          <label htmlFor='homepartying'>homepartying</label>
          <br />
        </div> */}
        <input type='submit' value='get started' />
      </form>
    </div>
  )
}

export default Profile
