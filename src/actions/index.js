import transformForeCast from './../services/transformForeCast'
import {url_base_forecast, api_key} from './../constants/api_url.js'
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

//start seleccionamos la ciudad
const setCity = payload => ({type: SET_CITY,payload});//action setCity
const setForecastData = payload => ({type:SET_FORECAST_DATA, payload});

export const setSelectedCity = payload => {
	return dispatch => {
		const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`
		
		//activar en el estado un indicador de busqueda de datos
		dispatch(setCity(payload));
		return fetch(url_forecast)
		.then(data => data.json())
		.then(weather_data => {
			// console.log(weather_data)
			const forecastData = transformForeCast(weather_data);
			// console.log(forecastData)
			// this.setState({forecastData})
			//modificar el estado con el resultado de la promise (fetch)
			dispatch(setForecastData({city:payload, forecastData}))
		})
	}
};
//end seleccionamos la ciudad