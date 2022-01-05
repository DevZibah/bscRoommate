import React, { useState } from 'react'
import home from '../assets/home.jpg'
const Profile = () => {
  const [female, setFemale] = useState('')
  const [male, setMale] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [arts, setArts] = useState('')
  const [science, setScience] = useState('')
  const [IT, setIt] = useState('')
  const [commercial, setCommercial] = useState('')
  const [christianity, setChristianity] = useState('')
  const [muslim, setMuslim] = useState('')
  const [other, setOther] = useState('')
  const [AB, setAb] = useState('')
  const [AD, setAd] = useState('')
  const [AI, setAi] = useState('')
  const [AN, setAn] = useState('')
  const [BA, setBa] = useState('')
  const [BY, setBy] = useState('')
  const [BN, setBn] = useState('')
  const [BR, setBr] = useState('')
  const [CR, setCr] = useState('')
  const [DL, setDl] = useState('')
  const [EB, setEb] = useState('')
  const [ED, setEd] = useState('')
  const [EK, setEk] = useState('')
  const [EN, setEn] = useState('')
  const [GM, setGm] = useState('')
  const [IM, setIm] = useState('')
  const [JI, setJi] = useState('')
  const [KA, setKa] = useState('')
  const [KN, setKn] = useState('')
  const [KS, setKs] = useState('')
  const [KB, setKb] = useState('')
  const [KG, setKg] = useState('')
  const [KW, setKw] = useState('')
  const [LA, setLa] = useState('')
  const [NA, setNa] = useState('')
  const [NI, setNi] = useState('')
  const [OG, setOg] = useState('')
  const [ON, setOn] = useState('')
  const [OS, setOs] = useState('')
  const [OY, setOy] = useState('')
  const [PT, setPt] = useState('')
  const [RV, setRv] = useState('')
  const [ST, setSt] = useState('')
  const [TB, setTb] = useState('')
  const [YB, setYb] = useState('')
  const [ZF, setZf] = useState('')
  const [FC, setFc] = useState('')
  const [loudchewing, setLoudchewing] = useState('')
  const [beinglate, setBeinglate] = useState('')
  const [talkingduringamovie, setTalkingduringamovie] = useState('')
  const [talkingwhenyourmouthisfull, setTalkingwhenyourmouthisfull] =
    useState('')
  const [leavingthewaterrunning, setLeavingthewaterrunning] = useState('')
  const [smoking, setSmoking] = useState('')
  const [leavingdirtydishesinthesink, setLeavingdirtydishesinthesink] =
    useState('')
  const [
    sneezingwithoutcoveringyourmouth,
    setSneezingwithoutcoveringyourmouth,
  ] = useState(false)
  const [littering, setLittering] = useState(false)
  const [bitingnails, setBitingnails] = useState(false)
  const [snoring, setSnoring] = useState(false)
  const [leavingthetoiletseatup, setLeavingthetoiletseatup] = useState(false)
  const [errors, setErrors] = useState(false)
  //   Upon successful registration, the user will receive an authentication token from the request. This token will be used to authenticate them instead of having them go to the login.
  const onSubmit = (e) => {
    e.preventDefault()
    const user = {
      female: female,
      male: male,
      birthdate: birthdate,
      arts: arts,
      science: science,
      IT: IT,
      commercial: commercial,
      christianity: christianity,
      muslim: muslim,
      other: other,
      loudchewing: loudchewing,
      beinglate: beinglate,
      talkingduringamovie: talkingduringamovie,
      talkingwhenyourmouthisfull: talkingwhenyourmouthisfull,
      leavingthewaterrunning: leavingthewaterrunning,
      smoking: smoking,
      leavingdirtydishesinthesink: leavingdirtydishesinthesink,
      sneezingwithoutcoveringyourmouth: sneezingwithoutcoveringyourmouth,
      littering: littering,
      bitingnails: bitingnails,
      snoring: snoring,
      leavingthetoiletseatup: leavingthetoiletseatup,
    }
    // var url = 'http://127.0.0.1:8000/api/v1/'
    fetch('http://127.0.0.1:8000/api/v1/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        setFemale('')
        setMale('')
        setBirthdate('')
        setArts('')
        setScience('')
        setIt('')
        setCommercial('')
        setChristianity('')
        setMuslim('')
        setOther('')
        setLoudchewing('')
        setBeinglate('')
        setTalkingduringamovie('')
        setTalkingwhenyourmouthisfull('')
        setLeavingthewaterrunning('')
        setSmoking('')
        setLeavingdirtydishesinthesink('')
        setSneezingwithoutcoveringyourmouth('')
        setLittering('')
        setBitingnails('')
        setSnoring('')
        setLeavingthetoiletseatup('')
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
      <div className='home'>
        <img src={home} alt='home' />
      </div>
      <form onSubmit={onSubmit} className='text-dark'>
        <div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='exampleRadios'
              id='exampleRadios1'
              value={female}
              onChange={(e) => setFemale(e.target.value)}
            />
            <label className='form-check-label' htmlFor='exampleRadios1'>
              Female
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='exampleRadios'
              id='exampleRadios2'
              value={male}
              onChange={(e) => setMale(e.target.value)}
            />
            <label className='form-check-label' htmlFor='exampleRadios2'>
              Male
            </label>
          </div>
          {/* <input
            name='female'
            id='html'
            type='radio'
            value={female}
            onChange={(e) => setFemale(e.target.value)}
            required
          />{' '}
          <label htmlFor='html'>female:</label> <br /> */}
          <br />
          {/* <input
            name='gender'
            type='radio'
            id='css'
            value={male}
            onChange={(e) => setMale(e.target.value)}
            required
          />{' '}
          <label htmlFor='css'>male:</label> <br /> */}
        </div>
        <br />
        <label htmlFor='birthdate'>Birth date:</label> <br />
        <input
          name='birthdate'
          type='date'
          id='birthdate'
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
        />{' '}
        <br />
        <div>
          <small>Select your discipline here:</small>
          <input
            name='fields'
            type='radio'
            id='arts'
            value={arts}
            onChange={(e) => setArts(e.target.value)}
            required
          />{' '}
          <label htmlFor='arts'>arts:</label> <br />
          <br />
          <input
            name='fields'
            type='radio'
            id='science'
            value={science}
            onChange={(e) => setScience(e.target.value)}
            required
          />{' '}
          <label htmlFor='science'>science:</label> <br />
          <br />
          <input
            name='fields'
            type='radio'
            id='it'
            value={IT}
            onChange={(e) => setIt(e.target.value)}
            required
          />{' '}
          <label htmlFor='it'>IT:</label> <br />
          <br />
          <input
            name='fields'
            type='radio'
            id='commercial'
            value={commercial}
            onChange={(e) => setCommercial(e.target.value)}
            required
          />{' '}
          <label htmlFor='commercial'>commercial:</label> <br />
        </div>
        <br />
        <div>
          <small>Select your religion here:</small>
          <input
            name='religion'
            type='radio'
            id='christianity'
            value={christianity}
            onChange={(e) => setChristianity(e.target.value)}
            required
          />{' '}
          <label htmlFor='christianity'>christianity:</label> <br />
          <br />
          <input
            name='religion'
            type='radio'
            id='muslim'
            value={muslim}
            onChange={(e) => setMuslim(e.target.value)}
            required
          />{' '}
          <label htmlFor='muslim'>muslim:</label> <br />
          <br />
          <input
            name='religion'
            type='radio'
            id='other'
            value={other}
            onChange={(e) => setOther(e.target.value)}
            required
          />{' '}
          <label htmlFor='other'>other:</label> <br />
        </div>
        <br />
        <small>select your location:</small>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <label className='input-group-text' htmlFor='inputGroupSelect01'>
              Options
            </label>
          </div>
          <select className='custom-select' id='inputGroupSelect01'>
            <option defaultValue>Choose...</option>
            <option value={AB}>Abia</option>
            <option value={AD}>Adamawa</option>
            <option value={AI}>Akwa Ibom</option>
            <option value={AN}>Anambra</option>
            <option value={BA}>Bauchi</option>
            <option value={BY}>Bayelsa</option>
            <option value={BN}>Benue</option>
            <option value={BR}>Borno</option>
            <option value={CR}>Cross River</option>
            <option value={DL}>Delta</option>
            <option value={EB}>Ebonyi</option>
            <option value={ED}>Edo</option>
            <option value={EK}>Ekiti</option>
            <option value={EN}>Enugu</option>
            <option value={GM}>Gombe</option>
            <option value={IM}>Imo</option>
            <option value={JI}>Jigawa</option>
            <option value={KA}>Kaduna</option>
            <option value={KN}>Kano</option>
            <option value={KS}>Kastina</option>
            <option value={KB}>Kebbi</option>
            <option value={KG}>Kogi</option>
            <option value={KW}>Kwara</option>
            <option value={LA}>:Lagos</option>
            <option value={NA}>Nassarawa</option>
            <option value={NI}>Niger</option>
            <option value={OG}>Ogun</option>
            <option value={ON}>Ondo</option>
            <option value={OS}>Osun</option>
            <option value={OY}>Oyo</option>
            <option value={PT}>Plateau</option>
            <option value={RV}>Rivers</option>
            <option value={ST}>Sokoto</option>
            <option value={TB}>Taraba</option>
            <option value={YB}>Yobe</option>
            <option value={ZF} onChange={(e) => setZf(e.target.value)}>
              Zamfara
            </option>
            <option value={FC} onChange={(e) => setFc(e.target.value)}>
              FCT
            </option>
          </select>
        </div>
        {/* <select id='country-state' name='country-state'>
          <option value={AB}>Abia</option>
          <option value={AD}>Adamawa</option>
          <option value={AI}>Akwa Ibom</option>
          <option value={AN}>Anambra</option>
          <option value={BA}>Bauchi</option>
          <option value={BY}>Bayelsa</option>
          <option value={BN}>Benue</option>
          <option value={BR}>Borno</option>
          <option value={CR}>Cross River</option>
          <option value={DL}>Delta</option>
          <option value={EB}>Ebonyi</option>
          <option value={ED}>Edo</option>
          <option value={EK}>Ekiti</option>
          <option value={EN}>Enugu</option>
          <option value={GM}>Gombe</option>
          <option value={IM}>Imo</option>
          <option value={JI}>Jigawa</option>
          <option value={KA}>Kaduna</option>
          <option value={KN}>Kano</option>
          <option value={KS}>Kastina</option>
          <option value={KB}>Kebbi</option>
          <option value={KG}>Kogi</option>
          <option value={KW}>Kwara</option>
          <option value={LA}>:Lagos</option>
          <option value={NA}>Nassarawa</option>
          <option value={NI}>Niger</option>
          <option value={OG}>Ogun</option>
          <option value={ON}>Ondo</option>
          <option value={OS}>Osun</option>
          <option value={OY}>Oyo</option>
          <option value={PT}>Plateau</option>
          <option value={RV}>Rivers</option>
          <option value={ST}>Sokoto</option>
          <option value={TB}>Taraba</option>
          <option value={YB}>Yobe</option>
          <option value={ZF} onChange={(e) => setZf(e.target.value)}>
            Zamfara
          </option>
          <option value={FC} onChange={(e) => setFc(e.target.value)}>
            FCT
          </option>
        </select> */}
        <br />
        <div>
          <small>Check the boxes that describes your dislikes:</small>
          <input
            name='loudchewing'
            type='checkbox'
            id='loudchewing'
            value={loudchewing}
            onChange={(e) => setLoudchewing(e.target.value)}
            required
          />{' '}
          <label htmlFor='loudchewing'>loud chewing:</label> <br />
          <input
            name='beinglate'
            type='checkbox'
            id='beinglate'
            value={beinglate}
            onChange={(e) => setBeinglate(e.target.value)}
            required
          />{' '}
          <label htmlFor='beinglate'>Being late:</label> <br />
          <input
            name='talkingduringamovie'
            type='checkbox'
            id='talkingduringamovie'
            value={talkingduringamovie}
            onChange={(e) => setTalkingduringamovie(e.target.value)}
            required
          />{' '}
          <label htmlFor='talkingduringamovie'>talking during a movie:</label>{' '}
          <br />
          <input
            name='talkingwhenyourmouthisfull'
            type='checkbox'
            id='talkingwhenyourmouthisfull'
            value={talkingwhenyourmouthisfull}
            onChange={(e) => setTalkingwhenyourmouthisfull(e.target.value)}
            required
          />{' '}
          <label htmlFor='talkingwhenyourmouthisfull'>
            talking_when your mouth is full:
          </label>{' '}
          <br />
          <input
            name='leavingthewaterrunning'
            type='checkbox'
            id='leavingthewaterrunning'
            value={leavingthewaterrunning}
            onChange={(e) => setLeavingthewaterrunning(e.target.value)}
            required
          />{' '}
          <label htmlFor='leavingthewaterrunning'>
            leaving the water running:
          </label>{' '}
          <br />
          <input
            name='smoking'
            type='checkbox'
            id='smoking'
            value={smoking}
            onChange={(e) => setSmoking(e.target.value)}
            required
          />{' '}
          <label htmlFor='smoking'>smoking:</label> <br />
          <input
            name='leavingdirtydishesinthesink'
            type='checkbox'
            id='leavingdirtydishesinthesink'
            value={leavingdirtydishesinthesink}
            onChange={(e) => setLeavingdirtydishesinthesink(e.target.value)}
            required
          />{' '}
          <label htmlFor='leavingdirtydishesinthesink'>
            leaving dirty dishes in the sink:
          </label>{' '}
          <br />
          <input
            name='sneezingwithoutcoveringyourmouth'
            type='checkbox'
            id='sneezingwithoutcoveringyourmouth'
            value={sneezingwithoutcoveringyourmouth}
            onChange={(e) =>
              setSneezingwithoutcoveringyourmouth(e.target.value)
            }
            required
          />{' '}
          <label htmlFor='sneezingwithoutcoveringyourmouth'>
            sneezing without covering your mouth:
          </label>{' '}
          <br />
          <input
            name='littering'
            type='checkbox'
            id='littering'
            value={littering}
            onChange={(e) => setLittering(e.target.value)}
            required
          />{' '}
          <label htmlFor='littering'>littering:</label> <br />
          <input
            name='bitingnails'
            type='checkbox'
            id='bitingnails'
            value={bitingnails}
            onChange={(e) => setBitingnails(e.target.value)}
            required
          />{' '}
          <label htmlFor='bitingnails'>biting nails:</label> <br />
          <input
            name='snoring'
            type='checkbox'
            value={snoring}
            id='snoring'
            onChange={(e) => setSnoring(e.target.value)}
            required
          />{' '}
          <label htmlFor='snoring'>Snoring:</label> <br />
          <input
            name='leavingthetoiletseatup'
            type='checkbox'
            id='leavingthetoiletseatup'
            value={leavingthetoiletseatup}
            onChange={(e) => setLeavingthetoiletseatup(e.target.value)}
            required
          />{' '}
          <label htmlFor='leavingthetoiletseatup'>
            leaving the toilet seat up:
          </label>{' '}
        </div>
        <br />
        <input type='submit' value='get started' />
      </form>
    </div>
  )
}

export default Profile
