import { makeStyles } from "@material-ui/core";

export const TopbarStyle = makeStyles(theme=>({
    topbar:{
        [theme.breakpoints.up('sm')]:{
            marginLeft: '100px', 
        },
        backgroundColor: 'skyblue'
    },
    topbarContent:{
        color:'white',
        [theme.breakpoints.up('sm')]:{
        display:'none'
        }
    }
}))