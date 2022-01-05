import { Switch, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Cover from './components/Cover'
import './style/All.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profee from './components/Profee'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Cover} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route exact path='/Profee' component={Profee} />
      </Switch>
    </div>
  )
}

export default App
