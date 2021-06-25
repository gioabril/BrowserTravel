import React from 'react';
import './searchapp.scss';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Iconapp from './Iconapp'

class Searchapp extends React.Component{
    render(){
        return(
            <div className="container__searchapp back__white container__rounded__shadown">
                <Grid container alignItems="center" justify="center" xs="12">
                    <Grid item xs={1} justify="center" alignItems="center" container>
                        <Iconapp icon={'carpickup'} />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField 
                        className="input__app"
                        id="outlined-full-width"
                        label="Lugar de retiro" 
                        style={{ margin: 10 }}
                        placeholder="Ciudad, Aeropuerto o Ciudad" 
                        fullWidth
                        InputLabelProps={{shrink: true,}}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Searchapp;

