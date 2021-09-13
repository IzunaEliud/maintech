import React from 'react';
import { Grid, makeStyles, Typography,Button, } from '@material-ui/core'
import { Link } from 'react-router-dom'
import img1 from './../../assets/img/baniere.PNG'
import img2 from './../../assets/img/b2.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const useStyle=makeStyles((theme)=>({
    root:{
        flexGrow:1,
        position:"relative"
        
    },
    texte:{ 
        color:"white",
        textAlign:'center',
        position:"absolute",
        width:"1000px",
        left:"50%",
        top:"50%",
        marginTop:"-40px",
        marginLeft:"-500px"
        
    },
    link:{
        textDecoration:"none"
    }
}))
const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
  };
export default function Example(props){
    const classes=useStyle()
    return (
        <Slider {...settings}>
            <Grid container justifyContent="center" alignItems="center" className={classes.root}>
                <img src={img1} alt="pc1" width="100%"/>
                <Grid items className={classes.texte}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Typography variant="h3" >
                            UN PEPIN SUR VOTRE ORDINATEUR OU DISQUE DUR ?
                        </Typography>
                        <Typography variant="h6">
                            faite nous signe nous trouverons une solution adapte pour votre probleme
                        </Typography>
                        <Button><Link to="/pb_description" className={classes.link}>Decrivez nous votre probleme</Link></Button>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" className={classes.root}>
                <img src={img2} alt="pc1" width="100%" height="580px"/>
                <Grid items className={classes.texte}>
                <Grid container justifyContent="center" alignItems="center">
                    <Typography variant="h3">
                        VOULEZ ELARGIR VOTRE ACTIVITE COMMERCIAL?
                    </Typography>
                    <Typography variant="h6">
                        nous construisons des site web adapte pour la mise en disposition de vos service au publics
                    </Typography>
                    <Button className={classes.bouton}><Link to="/projet_expl" className={classes.link}>Expliquez votre projet</Link></Button>
                </Grid>
                </Grid>
            </Grid>
        </Slider>
        
    )
}