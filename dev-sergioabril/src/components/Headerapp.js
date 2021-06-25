import React from 'react';
import './headerapp.scss';
import Logo from '../images/logo.svg'
import Iconapp from './Iconapp'
import Menuapp from './Menuapp'
import Grid from '@material-ui/core/Grid';


class Header extends React.Component{
    render(){
        return(
            <Grid container className="container__headerapp" justify="start" alignContent="center">
                <Grid item className="container__comp--menuapp">
                    <Menuapp/>
                </Grid>
                <Grid item>
                    <div className="headerapp__contlogo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </Grid>
                <div className="container__comp--iconos">
                    <div className="comp__iconos"> <Iconapp icon={'moneda'}/> </div>
                    <div className="comp__iconos"> <Iconapp icon={'idiomacol'}/> </div>
                </div>
            </Grid>
        )
    }
}
export default Header;