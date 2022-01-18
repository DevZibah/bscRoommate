import { Switch, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Cover from './components/Cover'
import './style/All.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Usersprofile from './components/Usersprofile'
import Logout from './components/Logout'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Cover} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Logout' component={Logout} />
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route exact path='/Usersprofile' component={Usersprofile} />
      </Switch>
    </div>
  )
}

export default App
