import React, { useEffect } from "react";
import {Container, Toolbar, Typography, List, ListItem, Drawer, AppBar, IconButton, Button} from "@mui/material";
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
  m={1} //margin
  display="flex"
  justifyContent="flex-start"
  alignItems="flex-start"

>
    <button onClick={logoutHandler} className="btn btn-primary text-left">
        Logout
      </button>
  {/* <Button variant="contained" color="primary" sx={{ height: 40 }}>
    Logout
  </Button> */}
</Box>
          {/* <Button onClick={()=>{
            localStorage.removeItem('token')
          }}>Logout</Button> */}
        </Toolbar>
      </AppBar>

    </Container>
  );
}

export default Header