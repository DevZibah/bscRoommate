import { useState, useEffect, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Cover from './components/Cover'
import './style/All.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Usersprofile from './components/Usersprofile'
import Logout from './components/Logout'
import User from './components/User'
import Profile from './components/Profile'
import Modal from './components/Modal'
import Modall from './components/Modall'
import Recommendations from './components/Recommendations'
import Modalll from './components/Modalll'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className='App'>
      {loading ? (
        <Loader />
      ) : (
        <Switch>
          <Route exact path='/' component={Cover} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Logout' component={Logout} />
          <Route exact path='/Dashboard' component={Dashboard} />
          <Route exact path='/Usersprofile' component={Usersprofile} />
          <Route exact path='/User' component={User} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/Modal' component={Modal} />
          <Route exact path='/Modall' component={Modall} />
          <Route exact path='/Modalll' component={Modalll} />
          <Route exact path='/Recommendations' component={Recommendations} />
        </Switch>
      )}
      {/* <Switch>
        <Route exact path='/' component={Cover} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Logout' component={Logout} />
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route exact path='/Usersprofile' component={Usersprofile} />
        <Route exact path='/User' component={User} />
        <Route exact path='/Profile' component={Profile} />
        <Route exact path='/Modal' component={Modal} />
        <Route exact path='/Modall' component={Modall} />
        <Route exact path='/Modalll' component={Modalll} />
        <Route exact path='/Recommendations' component={Recommendations} />
      </Switch> */}
    </div>
  )
}

export default App
