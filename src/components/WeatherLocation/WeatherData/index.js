import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo.js';
import WeatherTemperature from './WeatherTemperature.js';

//start importamos las variables que necesitamos
// import {
// 	SUN,
// } from './../../../constants/weathers.js';
//end importamos las variables que necesitamos
//start css style
import './styles.css';
//end css style
import PropTypes from 'prop-types';
const WeatherData = ({ data:{ temperature, weatherState, humidity, wind} }) => (
	<div className="weatherDataCount">
		<WeatherTemperature
		className="temperature"
		temperature={temperature}
		weatherState={weatherState}/>
		<WeatherExtraInfo humidity={humidity} wind={wind}/>
	</div>
);

WeatherData.proTyes = {
	data: PropTypes.shape({
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired,
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.string.isRequired,
	})
};

export default WeatherData;