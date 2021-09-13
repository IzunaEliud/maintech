import { Grid,makeStyles,Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom"
import img from './../../assets/img/pc_1.jpg'

const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        marginBottom:"40px",
    },
    paper:{
        margin: theme.spacing(2),
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.primary,
        backgroundColor:theme.palette.text.secondary
    },
    titre:{
        marginTop:30
    },
    item:{  
        textAlign:"center",
        margin:theme.spacing(2),
        position:"relative",
        borderRadius:"6px"
    },
    link:{
        textDecoration:"none"
    }
}))
const style=makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        marginBottom:"40px",
    },
    paper:{
        margin: theme.spacing(2),
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.primary,
        backgroundColor:theme.palette.text.secondary
    },
    titre:{
        marginTop:30
    },
    item:{  
        textAlign:"center",
        margin:theme.spacing(2),
        position:"relative",
        borderRadius:"6px"
    },
    link:{
        textDecoration:"none"
    }
}))

function Panne(){
    const classe=style()
    return(
        <Grid item xs={12} sm={6} md={4} lg={4} className={classe.item}>
            <Link to="/panne_reosolue" className={classe.link}>
                <Paper className={classe.paper}>
                    <img src={img} alt="eliud" width="150px" height="100px"/>
                    <div >
                    <Typography variant="h6">
                        Panne
                    </Typography>
                    <p >
                        Non anim mollit veniam est laboris sint reprehenderit voluptate cupidatat dolore.
                    </p>
                    </div>
                </Paper>
            </Link>
        </Grid>
    )
}
export default function Testimony(){
    const classes=useStyles()
    return(
        <div className={classes.root}>
            <Grid container alignItems="center" justifyContent="center" className={classes.titre}>
                <Typography variant="h5">
                    <b>PANNE DEJA RESOLUE</b>
                </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" spacing={4} className={classes.item}>
                <Panne/>
            </Grid>
        </div>  
    )
}