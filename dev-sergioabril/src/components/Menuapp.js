import React from 'react';
import './menuapp.scss';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconMenu from '../images/icons/icon-menu.svg';
import Iconapp from './Iconapp'
import ArrowBack from '../images/icons/Arrow-back.svg';


  
export default function Menuapp() {
    
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };    
    const list = () => (
      <div className="container__general--drawer">
        <Button  onClick={handleDrawerClose} class="btnapp__back">
           <img src={ArrowBack} alt="arrow back"/>
        </Button>
        <List className="container__list">
          {['Requisitos de Alquiler', 'Preguntas frecuentes', 'Localidades', 'Contáctanos'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Grid fluid className="container__social">
          <h2 className="text__social textcolor__gray--b font__m">SÍGUENOS EN</h2>
          {['socialfacebook', 'socialinstagram', 'socialgoogle', 'socialtwitter'].map((text) => (
            <Button button key={text}>
              <Iconapp icon={text} />
            </Button>
          ))}
        </Grid>
      </div>
    );
  
    return (
        <div class="container__drawer">
            <Button onClick={handleDrawerOpen} className="icon__menu">
              <img src={IconMenu} alt="icon menu"/>
            </Button>
            <Drawer 
                anchor="left" 
                open={open} 
                onClose={handleDrawerClose}
            >
                {list()}
            </Drawer>
        </div>
    );
  }
