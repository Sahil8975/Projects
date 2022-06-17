import React from 'react'
import Details from './Pages/Details/Details'
import Forms from './Pages/Forms/Forms'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Table from './Pages/Table/Table'
// import Navbar from './Component/Navbar'
// import Layout from './layout/Layout'
import { Switch, Route } from 'react-router-dom';
// import Header from './Header/Header'
import login from './Pages/Login/Login'


const App = () => {
  return (
    // <div>
    <div className='abc' style={{
      paddingTop: 80
    }}>
     
     
      {/* <Header/> */}
      <Switch>
      {/* <Route exact path='/sign' component={Signin} /> */}
      <Route exact path='/login' component={login} />
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/details' component={Details} />
        <Route path='/table' component={Table} />
        <Route path='/forms' component={Forms} />
        {/* <Route  path='/login' component={login} /> */}
      </Switch>
    </div>
  )
}

export default App