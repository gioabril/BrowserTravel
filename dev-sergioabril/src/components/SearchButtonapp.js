
import React from 'react';
import './searchbuttonapp.scss';
import SearchIcon from '@material-ui/icons/Search';

class SearchButtonapp extends React.Component{
    render(){
        return(
            <div className="container__searchbutton">
                <SearchIcon style={{ fontSize: 50 }} className="textcolor__white"></SearchIcon>
            </div>
        )
    }
}
export default SearchButtonapp;

