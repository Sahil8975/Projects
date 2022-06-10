import React from 'react'
import Details from './Pages/Details/Details'
import Forms from './Pages/Forms/Forms'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Table from './Pages/Table/Table'
// import Navbar from './Component/Navbar'
// import Layout from './layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './Header/Header'

const App = () => {
  return (
    <div className='abc'>
  
    
    {/* <Layout> */}
    {/* <Header/> */}
      <Switch>
      <Route exact path='/' component={Home} />
        <Route  path='/profile' component={Profile} />
        <Route  path='/details' component={Details} />
        <Route  path='/table' component={Table} />
        <Route  path='/forms' component={Forms} />
      </Switch>
      {/* </Header> */}
      {/* </Layout> */}
      


    </div>
  )
}

export default App