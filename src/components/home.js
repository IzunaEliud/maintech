import Nav from './home/nav';
import Caroussel from './home/caroussel';
import Activity from './home/activity';
import Footer from './home/footer';
import Testimonyp from './home/testimonyPanne';
import Testimonys from './home/testimonySite';
import Desciption from './home/pb_decription'
import Explication from './home/pjt_explication'
import PanneSolve from './home/panneSolve'
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom'
const useStyle=makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        margin:0
    }
}))
export default function Home(){
    const classes=useStyle()
    return(
        <Router className={classes.root}>
            <Nav/>
            <Route exact path="/">
                <Caroussel/>
                <Activity/>
                <Testimonyp/>
                <Testimonys/>
            </Route>
            <Route path="/pb_description">
                <Desciption/>
            </Route>
            <Route path="/projet_expl">
                <Explication/>
            </Route>
            <Route path="/panne_reosolue">
                <PanneSolve/>
            </Route>
            {/* <Sumary/>
            <Patener/> */}
            <Footer/>  
        </Router>
    )
}