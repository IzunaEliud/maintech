import { Grid,makeStyles,Typography } from "@material-ui/core"
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow:1,
        color:"white",
        backgroundColor:"black",
        margin:"auto"
    },
    grid:{
        width:300,
        textAlign:"left",

 
    },
    
}))
export default function Footer(){
    const classes=useStyles()
    return(
        <div>
            <Grid 
                container
                alignItems="flex-start"
                justifyContent="center"
                className={classes.root}
                spacing={10}
                xs={12}
            >
                <Grid item className={classes.grid}>
                    <Typography variant="h6">
                        <b>NOS SERVICES</b>
                    </Typography>
                    <p>maintenance</p>
                    <p>creation de site web</p>
                </Grid>
                <Grid item className={classes.grid}>
                    <Typography variant="h6">
                        <b>CONTACTEZ-NOUS</b>
                    </Typography>
                    <p>Nous sommes situé Adjame Renault non loin de l’église Universelle </p>
                    <p>72 50 53 51 - 66 74 10 24 (appel et whatsapp) possibilité de ce deplacer vers vous ossi</p>
                </Grid>
                <Grid item className={classes.grid}>
                    <Typography variant="h6">
                        <b>SUIVEZ-NOUS</b>
                    </Typography>
                    <WhatsAppIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                </Grid>
            </Grid>
        </div>
    )
}