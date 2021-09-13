import { Grid, makeStyles, Typography } from "@material-ui/core";
const useStyle=makeStyles((theme)=>({
    root:{
        flexGrow:1,
        marginTop:"40px",
        marginBottom:"20px"
    },
    root1:{
        margin:theme.spacing(4),
        padding:theme.spacing(4),
        flexGrow:1,
        width:"100%",
        marginTop:"40px",
        marginBottom:"40px"
    },
    element1:{
        backgroundColor:"pink",
        height:"300px",
        width:"300px",
        marginRight:"20px"
    },
    element2:{
        backgroundColor:"grey",
        height:"300px",
        width:"300px",
        marginLeft:"20px"
    }
}))
export default function Index(){
    const classes= useStyle()
    return(
        <div>
            
            <Grid container justifyContent="center" alignItems="center" xs={12} className={classes.root} direction="column">
                <Typography variant="h4">
                    TITRE PANNE 
                </Typography>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" xs={12} className={classes.root} direction="column">
                <Typography variant="h6">
                    Description de la pannes Ut dolor nisi voluptate sit occaecat id minim qui laborum velit.
                </Typography>

            </Grid>
            <Grid container justifyContent="center" alignItems="center" xs={12} className={classes.root1} direction="row">
                    <Grid item xs={5} className={classes.element1}>
                        video avant 
                    </Grid>
                    
                    <Grid item xs={5} className={classes.element2}>
                        video apres
                    </Grid>
            </Grid>
        
        </div>
    )
}