import React from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Headerapp from './components/Headerapp'
import Searchapp from './components/Searchapp'
import Calendarapp from './components/Calendarapp'
import SearchButtonapp from './components/SearchButtonapp'
import Switchapp from './components/Switchapp'
import Promoapp from './components/Promoapp'
import PromoA from './images/Promo.png';

function App() {
  const tittleA = 'ALQUILER DE CARROS MIAMI'
  const tittleB = 'lo quiero devolver en otra localidad'
  return (
    <div className="App">
      <Grid className="App-header">
        <Grid item xs="11" className="margin__auto" justify="start">
          <Headerapp />
        </Grid>
        <Grid item xs="10" mt="4" className="margin__auto">
          <Box p={2}>
              <h2 className="tittle__primary textcolor__white font__sb">{tittleA}</h2>
          </Box>
        </Grid>
        <Grid item xs="10" mt="4" className="margin__auto">
          <Searchapp/>
        </Grid>
        <Grid container xs="10" alignItems="center" justify="start" className="margin__auto">
          <Grid item><Switchapp/></Grid>
          <Grid item><h4 className="textcolor__white font__m font__14">{tittleB}</h4></Grid>
        </Grid>
        <Grid item xs="10" mt="4" className="margin__auto">
          <Calendarapp/>
        </Grid>
        <div className="searchbuttonapp__position">
          <SearchButtonapp />
        </div>
      </Grid>

      <Grid container class="section__second">
        <Grid item xs="12">
         <Promoapp promo={PromoA}/>
        </Grid>
      </Grid>
    </div>
  );
}


export default App;
