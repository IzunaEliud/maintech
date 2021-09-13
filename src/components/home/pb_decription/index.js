import React, { useState } from 'react'
import { TextField,Grid,Typography,makeStyles,Button } from '@material-ui/core'
import swal from "sweetalert"

const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow:1,
        margin:"50px 0px",        
    },
    titre:{
        textAlign:'center'
    },
    textfield:{
        width:'60vh',
        margin:"10px"
    },  
    grid:{

        textAlign:"center",
        margin:"20px auto"
    }
}))

export default function Index() {
    const classes=useStyles()
    const [mail,setMail]=useState('')
    const [date,setDate]=useState('')
    const [apparition,setApparition]=useState('')
    const [probleme,setProbleme]=useState('')
    const problemeChange=(e)=>{setProbleme(e.target.value)}
    const apparitionChange=(e)=>{setApparition(e.target.value)}
    const dateChanger=(e)=>{setDate(e.target.value)}
    const mailChanger=(e)=>{setMail(e.target.value);console.log(e.target.value)}
    const soumission=function(e){
        const d=new Date()
        console.log("start")
        console.log({apparition})
        console.log({d})
        fetch("http://127.0.0.1:5000/"+`${probleme}`+"/"+`${mail}`+"/"+`${d}`+"/"+`${apparition}`)
            .then((res)=>{
                console.log(res)
                swal("reussite","Nous avons bien recus votre message et nous vous repondrons dans les plus bref delais","success")

            })
        console.log("end")
        setMail('')
        setDate('')
        setApparition('')
        setProbleme('')
    }
    return (     
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} className={classes.titre}>
                    <Typography variant="h6">
                        DECRIVEZ NOUS VOTRE PROBLEME 
                    </Typography> 
                </Grid>
                <form>
                    <Grid item xs={12} className={classes.grid}>
                        <TextField label="mail (mail@gmail.com)" type="mail" variant="filled" className={classes.textfield} value={mail} onChange={mailChanger} required/>
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <TextField label="Date de suvention du probleme" variant="filled" className={classes.textfield} value={date} onChange={dateChanger} required/>
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <TextField value={apparition} onChange={apparitionChange} label="qu'est -ce que tu etis en train de faire lorsque la panne est survenue" variant="filled" className={classes.textfield} required/>
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <TextField value={probleme} onChange={problemeChange} label="Decris le probleme que tu a avec ta machine(ordinateur portable,ordinateur bureau,disque dur)" multiline variant="filled" type="text" className={classes.textfield} required/>
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <Button variant="contained" color="primary" className={classes.textfield} onClick={soumission}>Soumettre</Button>
                    </Grid>  
                </form>         
            </Grid>
            
            
        </div>
    )
}
