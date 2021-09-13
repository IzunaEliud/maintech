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
        backgroundColor:theme.palette.text.secondary,
        height:"300px", 
    },
    titre:{
        marginTop:30,
        marginBottom:30
    },
    item:{
        backgroundColor:"grey",
        textAlign:"center",
        margin:theme.spacing(2),
        position:"relative",
        borderRadius:"6px"
    },
    link:{
        textDecoration:"none"
    }
}))
const styleSite=makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        marginBottom:"40px",
    },
    paper:{
        margin: theme.spacing(2),
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.primary,
        backgroundColor:theme.palette.text.secondary,
        height:"300px", 
    },
    titre:{
        marginTop:30,
        marginBottom:30
    },
    item:{
        backgroundColor:"grey",
        textAlign:"center",
        margin:theme.spacing(2),
        position:"relative",
        borderRadius:"6px"
    },
    link:{
        textDecoration:"none"
    }
}))

function Site(){
    const classes=styleSite()
    return(
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.item}>
            <Link to="/#" className={classes.link}>
            <Paper className={classes.paper}>
                <img src={img} alt="eliud" height="80%" width="90%"/>
                <Typography variant="h6">
                    SITE
                </Typography>
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
                    <b>NOS REALISATIONS</b>
                </Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="center" spacing={4} >
                <Site/>
            </Grid>
        </div>
    )
}