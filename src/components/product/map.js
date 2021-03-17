import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchProducts } from '../actions/productActions';
// import { Map, GoogleApiWrapper } from 'google-maps-react';/
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"
import { GoogleMap, LoadScript } from '@react-google-maps/api';


class MapData extends Component {
 
  

  render() {

    const style = {
        maxWidth: "250px",
        height: "250px",
        overflowX: "hidden",
        overflowY: "hidden"
       };
       const containerStyle = {
        maxWidth: "250px",
        height: "250px"
       };
    return (

        <div  style={{height: '400px', width: '400px'}}>
                <Map
                google={this.props.google}
                zoom={1}
                // style={containerStyle}
                
                initialCenter={{ lat: 47.444, lng: -122.176}}
                // style={style} containerStyle={containerStyle} 
                style={{height: '40px', width: '40px'}}
                />
        </div>
    );
  }
}



export default GoogleApiWrapper({
    apiKey: 'API KEY GOOGLE MAP'
  })(Map);