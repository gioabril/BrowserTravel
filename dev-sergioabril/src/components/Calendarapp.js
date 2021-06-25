import React from 'react';
import './calendarapp.scss';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Iconapp from './Iconapp'

class Caledarapp extends React.Component{
    render(){
        return(
            <div className="container__Caledarapp back__white container__rounded__shadown">
                <Grid container wrap="nowrap" alignItems="center" justify="space-between">
                    <Grid container item xs={6}>
                        <Grid item xs={3} justify="center" alignItems="center" container>
                            <Iconapp icon={'calendarpickup'} />
                        </Grid>
                        <Grid item xs={8}>
                        <TextField
                            id="date"
                            label="Recogida"
                            type="date"
                            date={Date.now.toString()}
                            format={"Month dd yyyy"}
                            margin="normal"
                            InputLabelProps={{shrink: true,}}
                            fullWidth
                        />
                        </Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem  />
                    <Grid container item xs={6}>
                        <Grid item xs={3} justify="center" alignItems="center" container>
                            <Iconapp icon={'calendarreturn'} />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="date"
                                label="Devolución"
                                type="date"
                                // defaultValue="2017-05-24"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Caledarapp;

