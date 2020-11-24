import React, { Component } from 'react';
import PropTypes from 'prop-types';
//connect 
import { connect } from 'react-redux'
//importamos las acciones
import {setSelectedCity} from './../actions'
import LocationList from './../components/LocationList';
export class LocationListContainer extends Component {
	
	//start seleccionamos una ciudad para darle el pronostico extendido
	 handleSelectedLocation = city => {
	 	this.setState({city})
	 	console.log(`handleSelectedLocation ${city}`);
	 	this.props.dispatchSetCity(city)//action
	 }
	//end seleccionamos una ciudad para darle el pronostico extendido
	render() {
		return (
			<LocationList 
	    	cities={this.props.cities}
	    	onselectedLocation={this.handleSelectedLocation}
			/>
		);
	}
}
LocationListContainer.propTypes = {
	dispatchSetCity:PropTypes.func.isRequired,
	cities:PropTypes.array.isRequired
};
const mapDispatchToProps = dispatch => (
	{
	dispatchSetCity: value => dispatch(setSelectedCity(value))
	}
);
export default connect(null,mapDispatchToProps)(LocationListContainer);
