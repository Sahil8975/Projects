import { makeStyles } from "@material-ui/core";

export const LeftbarStyle = makeStyles(theme =>({
    drawer:{
        [theme.breakpoints.up('sm')]:{
        width:'200px'
    }
},
    drawerPaper:{
        width: '200px',
        color: 'white',
        backgroundColor: 'skyblue'
    },
    active:{
        backgroundColor:'#004d40',
        borderBottom:'1px solid #004d40'

    },
    notActive:{
        
        borderBottom:'1px solid #004d40'

    }
}))