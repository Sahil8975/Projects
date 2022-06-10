import { Drawer, Hidden } from '@material-ui/core'
import React from 'react'
import LeftbarDesign from './LeftbarDesign';
import { LeftbarStyle } from './LeftbarStyle'

const Leftbar = ({isMobile, funcSetIsMobile}) => {
    const classes = LeftbarStyle();
  return (
    <div>
      <nav className={classes.drawer}>
      <Hidden xsDown implementation='css'>
        <Drawer 
            variant='permanent'
            open
            anchor='left'
            classes={{paper:classes.drawerPaper}}>
            <LeftbarDesign/>
        </Drawer>
      </Hidden>  
      <Drawer 
            variant='temporary'
            open={isMobile}
            anchor='left'
            classes={{paper:classes.drawerPaper}}
            onClick={funcSetIsMobile}>
            <LeftbarDesign/>
        </Drawer>
    </nav>
    </div>
  )
}

export default Leftbar