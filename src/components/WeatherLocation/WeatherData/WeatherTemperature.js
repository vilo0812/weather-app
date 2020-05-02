import React from 'react';
import WeatherIcons from 'react-weathericons';
import ProTypes from 'prop-types';
//start importamos las variables que necesitamos
import {
	CLOUD,
	SUN,
	RAIN,
	SNOW,
	THUNDER,
	DRIZZlE
} from './../../../constants/weathers.js';
//end importamos las variables que necesitamos
//start css style
import './styles.css';
//end css style
// start ponemos los nombre que pueden tener los iconos
const icons = {
	[CLOUD]: "cloud",
	[SUN]: "day-sunny",
	[RAIN]:"rain",
	[SNOW]:"snow",
	[THUNDER]: "day-thunderstore",
	[DRIZZlE]: "day-showers",


}
// end ponemos los nombre que pueden tener los iconos
//start funcion para declarar un componente de rect-weathericons que permite ver un icono simplemente
const getWeatherIcon = weatherState => {
	const icon = icons[weatherState];
	const sizeIcon = "4x";
	if(icon){
		return <WeatherIcons className="wicon" name={weatherState} size={sizeIcon}/>;
	}
	return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}/>;
}
//end funcion para declarar un componente de rect-weathericons que permite ver un icono simplemente
// start funcion principal react
const WeatherTemperature = ({temperature, weatherState}) => (

	<div className="WeatherTemperatureCount">
	{
		getWeatherIcon(weatherState)
	}
	<span className="temperature">{` ${temperature} `}</span>
	<span className="temperatureType">{` C° `}</span>
	</div>
);
// end funcion principal react
WeatherTemperature.proTypes = {
	temperature: ProTypes.number.isRequired,
	weatherState: ProTypes.string.isRequired,
};

export default WeatherTemperature;