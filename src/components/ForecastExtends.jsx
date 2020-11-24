import React from 'react';
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem'
import './styles.css'
// import transformForeCast from './../services/transformForeCast.js'
// import {url_base_forecast, api_key} from './../constants/api_url.js'
// const data = {
// temperature: 10,
// humidity:10,
// weatherState:"normal",
// wind: "normal"
// }
// const days = [
// 	'lunes',
// 	'martes',
// 	'miercoles',
// 	'jueves',
// 	'viernes'
// ];
	const renderForecastItemDays = forecastData =>{
		return forecastData.map( forecast => 
			<ForecastItem 
			key={`${forecast.weekDay} - ${forecast.hour}`}
			hour={forecast.hour} 
			weekDay={forecast.weekDay} 
			data={forecast.data}/>
		);
	}
	const renderProgress = () =>{
		return "Cargando Pronostico estendido"
	}
const ForecastExtends = ({ city, forecastData }) => (
	<div>
		<h2 className="forecast-title">pronóstico extendido para {city}</h2>
		{ forecastData ?
		renderForecastItemDays(forecastData) :
		renderProgress()
		}
	</div>
);
ForecastExtends.propTypes = {
	city : PropTypes.string.isRequired,
	forecastData : PropTypes.array
}
export default ForecastExtends;