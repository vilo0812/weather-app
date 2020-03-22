import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from './Location.js';
import WeatherData from './WeatherData';
// start css styles
import './style.css';
// end css styles
//start importamos las variables que necesitamos
import {
	SUN,
} from './../../constants/weathers.js';
//end importamos las variables que necesitamos para introducir en los componentes hijos
// start variables que necesitamos para introducir en los componentes hijos
const data ={
	temperature: 5,
	weatherState: SUN,
	humidity: 10,
	wind: '10 m/s',
}
// end variables que necesitamos para introducir en los componentes hijos
// start react funct main
class WeatherLocation extends Component{
	//start funcion al apretar click
	handleUpdateClick = () => {
		console.log("actualizado");
	}
	//end funcion al apretar click
	render(){
		return(
		<div className="weatherLocationCont">
			<Location city={"Barcelona"}></Location>
			<WeatherData data={data}></WeatherData>
			<button onClick={this.handleUpdateClick}>Actulizar</button>
		</div>
		);
	}
}
// end react funct main
export default WeatherLocation;
