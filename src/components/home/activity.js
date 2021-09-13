import { Grid,makeStyles,Button,Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import back1 from "./../../assets/img/a1.jpg"
import back2 from "./../../assets/img/pr_4.jpg"
const useStyle=makeStyles((theme)=>({
    racine:{
        flexGrow:1,
        margin:"0 auto",
        width:"100%",

        
    },
    titre:{
        flexGrow:1,
        width:"100%",
        marginTop:"40px"
    },
    root:{
        flexGrow:1,        
        height:400,
        marginRight:0,

        
    },
    element_2:{
        flexGrow:1,
        margin:"auto",
        width:"100%",
        height:400
    },

    Paper:{
        padding:theme.spacing(3),
        textAlign:"center"
    },
    activite1:{
        textAlign:"right",
    },
    txtactv:{
        textAlign:"center",
    },
    bouton:{
        backgroundColor:"#28344d",
        color:"white"
    },
    link:{
        textDecoration:"none"
    }
    
}))
export default function Activity(){
    const classes=useStyle()
    return(
        <div className={classes.racine}>
            <Grid 
                container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.titre}
                spacing={3}
            >   
                <Typography variant="h5">
                    <b>QUE VOULEZ VOUS ?</b>
                </Typography>
            </Grid>
            <Grid 
                container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.root}    
            >   
                <Grid item xs={1}/>
                <Grid item xs={5} className={classes.txtactv} style={{marginLeft:"7%"}}>
                    <Typography variant="h6">
                       <p>MAINTENANCE INFORMATIQUE</p>
                    </Typography>
                    <p>Votre ordinateur est en panne ?<br/>L'ecran ne s'affiche plus ou casser?<br/>Vous trouvez votre ordinateur lent et vous<br/>souhaitez ameliorer les preformance ?<br/>autre propleme sur votre materiel informatique?</p> 
                    <Button><Link to="/pb_description" className={classes.link}>Decrivez nous votre probleme</Link></Button>
                </Grid>
                <Grid item xs={5} alignItems="flex-end" className={classes.activite1}>
                    <div><img src={back1} alt="computer mother board" width="60%" style={{margin:"0 40% 0 0"}}/></div>     
                </Grid>
                <Grid item xs={1}/>
            </Grid>
            <Grid 
                container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                className={classes.element_2}
                spacing={3}
            >
                <Grid item xs={1}/>
                <Grid item xs={5} alignItems="flex-end" className={classes.activite1}>
                    <div><img src={back2} alt="computer mother board" width="60%" style={{margin:"0 0 0 40%"}}/></div>     
                </Grid>

                <Grid item xs={5} className={classes.txtactv}>
                    <Typography variant="h6">
                        DEVELLOPEMENT D'APPLICATION WEB 
                    </Typography>
                    <p>Besoin de vendre vos produit en ligne ?<br/>
                    Vous souhaiter presenter votre entreprise et votre activiter en ligne ?<br/>
                    En plus nous nous chagerons de develloperdes site et application web de <br/>qualite repondant a vos besoin respectif<br/></p>
                    <Button className={classes.bouton}><Link to="/projet_expl" className={classes.link}>Expliquez votre projet</Link></Button>
                </Grid>
                
                <Grid item xs={1}/>
            </Grid>

        </div>
    )
}