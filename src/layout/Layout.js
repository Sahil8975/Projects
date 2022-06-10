import React from 'react'
import Leftbar from '../bars/leftbar/Leftbar';
import { LayoutStyle } from './LayoutStyle'
import { useState } from 'react';
import Topbar from '../bars/topbar/Topbar';

const Layout = ({children}) => {
    const classes = LayoutStyle();
    const [isMobile, setIsMobile] = useState(false);
    const funcSetIsMobile=()=>{
        setIsMobile(!isMobile)
    }
  return (
    <div className={classes.root}>
    <Topbar/>
    <Leftbar isMobile={isMobile} funcSetIsMobile={funcSetIsMobile}/>
    <Topbar funcSetIsMobile={funcSetIsMobile}/>
    <main>
    <div className={classes.topbarWidth}/>
    {children}
    </main>
    </div>
  )
}

export default Layout
