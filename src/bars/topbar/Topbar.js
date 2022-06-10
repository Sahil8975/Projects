import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import React from 'react'
import { TopbarStyle } from './TopbarStyle'
// import DehazeIcon  from "@mui/icons-material/Dehaze";
import MenuIcon from '@material-ui/icons/Menu'

const Topbar = (funcSetIsMobile) => {
    const classes = TopbarStyle();
  return (
    <div>
    <AppBar position='fixed' elevation={1}>
        <Toolbar className={classes.topbar}>
            <IconButton className={classes.topbarContent}
            onClick={funcSetIsMobile}>
            <MenuIcon/>
            {/* <DehazeIcon/> */}
            </IconButton>
        </Toolbar>
    </AppBar></div>
  )
}

export default Topbar