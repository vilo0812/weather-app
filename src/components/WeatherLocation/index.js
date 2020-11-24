import React, {Component} from 'react';
import  PropTypes  from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity.js';
// start importamos los componentes necesarios de material ui
import { CircularProgress } from '@material-ui/core';
// end importamos los componentes necesarios de material ui
// start importamos las funciones que vamos a utilizar
import transformWeather from './../../services/transformWeather.js';
// end importamos las funciones que vamos a utilizar
// import PropTypes from 'prop-types';
import Location from './Location.js';
import WeatherData from './WeatherData';
// start css styles
import './style.css';
// end css styles
// start react funct main
class WeatherLocation extends Component{
	// start constructor
	constructor(props){
		super(props);
		const { city } = props;
		this.state = {
			city,
			data: null,
		};
	}
	// end constructor
	componentDidMount(){
this.handleUpdateClick();
	}
	componentDidUpdate(prevProps, prevState){
	}
	//start funcion al apretar click
	handleUpdateClick = () => {

		const api_weather = getUrlWeatherByCity(this.state.city);
		fetch(api_weather).then( resolve => {
			return resolve.json();
		}).then(data => {
			const newWeather = transformWeather(data);
			// console.log(newWeather);
			this.setState({
				data : newWeather
			});
		});
		
	}
	//end funcion al apretar click
	render(){
		const { onWeatherLocationClick } = this.props
		const { city, data } = this.state;
		return(
		<div className="weatherLocationCont" onClick={onWeatherLocationClick}>
			<Location city={city}></Location>
			{ data ? 
				<WeatherData data={data}></WeatherData> :
				
				<CircularProgress size={50}/>
			}
		</div>
		);
	}
}
// end react funct main
WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	onWeatherLocationClick: PropTypes.func

}
export default WeatherLocation;
