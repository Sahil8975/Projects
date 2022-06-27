import React, { useEffect } from "react";
import {Container, Toolbar, Typography, List, ListItem, Drawer, AppBar, IconButton, Button, Avatar, MenuItem, Menu} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
import DehazeIcon  from "@mui/icons-material/Dehaze";
import { useHistory, useLocation } from "react-router-dom";
import { path } from "./path";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import {Box} from "@material-ui/core";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import {useNavigate} from "react-router-dom"
// import { NavLink } from "react-router-dom";




const useStyles = makeStyles((theme)=>({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title:{
    marginRight:"auto"
  },
  drawer:{
    width: 300,
    martinTop:100
  },
  iconAlign:{
    marginLeft:160
  },
  ListItem:{
    marginTop:10
  },
  content:{
    padding:theme.spacing(9)
  }
}))

function Header(){

  const classes= useStyles();
  const [opens, setOpens] = useState(false);
  const history = useHistory();
  const location= useLocation();
  const [isAuth, setIsAuth] = useState(true)
  const [logout, setLogout] = React.useState(false);
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };
  // const navigate= NavLink

  // useEffect(()=>{
  //   if(!localStorage.getItem('token')){
  //     navigate('/login')
  //   }
  // })
  return (
  <Container className={classes.root}>
      <Drawer open={opens} onClose={() => setOpens(false)}>
        <List className={classes.drawer}>
            {
                path.map(item =>(
                    <ListItem 
                        button
                        key={item.id}
                        component={Link}
                        
                        onClick={()=>history.push(item.path)}
                        className={location.pathname===item.path}    
                    >  
                        <ListItemIcon>
                        {item.icon}
                       </ListItemIcon>
                       <ListItemText>{item.title}</ListItemText>
                    </ListItem>
                ))
            }
        </List>
      </Drawer>

      <AppBar style={{ background:'#2E3855'}}>
        <Toolbar>
          <Typography type="title" color="inherit">
            
          </Typography>
          <IconButton edge="start" 
          className={classes.menuButton}
          color="inherit"
          onClick={()=>setOpens(true)}
        >
            <DehazeIcon/>
          </IconButton> 
          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            onClick={(e) => setOpen(true)}
          >
          <Avatar
             sx={{ width: 30, height: 30, marginLeft:150}}
           src="/broken-image.jpg" 
           onClick={(e) => setOpen(true)}
           />
              {/* <Button onClick={logoutHandler} type="submit"
                  variant="contained"
                  endIcon={<LogoutOutlinedIcon />}
              >
               </Button> */}
          </Box>
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Setting</MenuItem>
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </Menu>
         
        </Toolbar>
      </AppBar>

    </Container>
  );
}

export default Header