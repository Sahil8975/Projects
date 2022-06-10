import React from 'react'
import { LeftbarStyle } from './LeftbarStyle'
import {LeftbarData} from './LeftbarData'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {useHistory,useLocation} from 'react-router-dom';

function LeftbarDesign() {
    const classes = LeftbarStyle();
    const history = useHistory();
    const location = useLocation();
  return (
    <div>
    {
        LeftbarData.map(item =>(
            <ListItem 
                button
                key={item.id}
                onClick={()=>history.push(item.path)}
                className={location.pathname == item.path? classes.active: classes.notActive}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
            </ListItem>
        ))
    }
    </div>
  )
}

export default LeftbarDesign