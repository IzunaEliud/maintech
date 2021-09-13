import { AppBar,makeStyles,Toolbar,Typography,Button } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow: 1
    },
    menu:{
        margin: "auto",
        marginRight: 0
    }
}))

export default function Nav(){
    const classes=useStyles()
    return(
        <div className={classes.root}>
            <AppBar position="static" color="white">    
                <Toolbar>
                    <Typography variant="h6">
                        MainTech
                    </Typography>
                    <div className={classes.menu}>
                        <Button color="primary"><Link to="/">Acceuil</Link></Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
        
    )
}