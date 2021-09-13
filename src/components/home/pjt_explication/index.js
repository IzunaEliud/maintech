import React from 'react'
import { Button,Select,MenuItem,TextField,Grid,Typography,makeStyles,InputLabel,FormControl } from '@material-ui/core'
import swal from "sweetalert"

const useStyles=makeStyles((theme)=>({
    root:{
        flexGrow:1,
        margin:"70px 0px",        
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
    },
    formControl:{
        width:"60vh"
    }
}))
const soumission=()=>{
    swal("Message envoyer!", "Nous vous repondrons dans les plus bref delais", "success");
}
export default function Index() {
    const [menu,setMenu]=React.useState('')
    const handleChange = (event) => {
        setMenu(event.target.value);
    };
    const classes=useStyles()
    return (
        <FormControl className={classes.root}>
            <form>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} className={classes.titre}>
                        <Typography variant="h6">
                            DECRIVEZ LE TYPE DE SITE QUE VOUS VOULEZ REALISER
                        </Typography> 
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <TextField label="Nom de votre site" variant="filled" className={classes.textfield} required/>
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <TextField label="mail (mail@gmail.com)" variant="filled" className={classes.textfield} required/>
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="typedusite" >Type du site</InputLabel>
                            <Select
                                labelId="dtypedusite"
                                id="typedusite"
                                onChange={handleChange}
                                value={menu}
                            >

                                <MenuItem value={1}>e-cormerce</MenuItem>
                                <MenuItem value={2}>Site Personnel</MenuItem>
                                <MenuItem value={3}>Porte Folio</MenuItem>
                            </Select>
                        </FormControl>
                        
                    </Grid>
                    <Grid item xs={12} className={classes.grid}>
                        <TextField label="Information sur le site" multiline variant="filled" type="text" className={classes.textfield} required/>
                    </Grid>    
                    <Grid item xs={12} className={classes.grid}>
                        <Button type="submit" variant="contained" color="primary" className={classes.textfield} onClick={{soumission}}>Soumettre</Button>
                    </Grid>         
                </Grid>
            </form>
        </FormControl>
    )
}
