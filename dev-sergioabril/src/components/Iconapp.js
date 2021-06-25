import React from 'react';
import './iconapp.scss';
import CarPickUp from '../images/icons/Car-PickUp.svg';
import CalendarPickUp from '../images/icons/Calendar-PickUp.svg';
import CalendarReturn from '../images/icons/Calendar-Return.svg';
import IdiomaCol from '../images/icons/Idioma.svg';
import Moneda from '../images/icons/Moneda.svg';
import SocialFacebook from '../images/icons/Social-Facebook.svg';
import SocialInstagram from '../images/icons/Social-Instagram.svg';
import SocialGoogle from '../images/icons/Social-Google.svg';
import SocialTwitter from '../images/icons/Social-Twitter.svg';


class Iconapp extends React.Component {
    render() {
    const icons ={ 
        carpickup: CarPickUp, 
        calendarpickup: CalendarPickUp,
        calendarreturn: CalendarReturn,
        idiomacol: IdiomaCol,
        moneda: Moneda,
        socialfacebook: SocialFacebook,
        socialinstagram: SocialInstagram,
        socialgoogle: SocialGoogle,
        socialtwitter: SocialTwitter
    }
    return(
        <div>
            <img src={icons[this.props.icon]} className="icon__image" alt="icono"/>
        </div>
      )
    }
  }
  
export default Iconapp;