import React from 'react';
import './promoapp.scss';

class Promoapp extends React.Component {
  render() {
  return(
      <div>
          <img src={this.props.promo} className="promo__image" alt="Promo"/>
      </div>
    )
  }
}

export default Promoapp;