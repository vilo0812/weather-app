import convert from 'convert-units';
import {
	SUN,
	CLOUD,
	RAIN,
	SNOW,
	THUNDER,
	DRIZZlE,
} from './../constants/weathers.js';
// start funcion para convertir unidades
const	getTemp = kelvin => {
	return Number(convert(kelvin).from("K").to("C").toFixed(2));
}
	// end funcion para convertir unidades
	//start funcion para el estado de el tiempo
const	getWeatherState = weather_data => {
	const { id } = weather_data;
	if(id < 300){
		return THUNDER;
	}else if(id < 400){
		return DRIZZlE;
	}else if(id < 600){
		return RAIN;
	}else if(id < 700){
		return SNOW;
	}else if(id === 800){
	return SUN; 
	}else{
		return CLOUD;
	}
}
	//end funcion para el estado de el tiempo
	//start funcion para traer la informacion
const	transformWeather = weather_data => {
	const { humidity, temp } = weather_data.main;
	const { speed } = weather_data.wind;
	const weatherState = getWeatherState(weather_data.weather[0]);
	const temperature = getTemp(temp);
	const data = {
		humidity,
		temperature,
		weatherState,
		wind: `${speed} m/s`
		 
	}
	return data;
}
	//end funcion para traer la informacion

export default transformWeather;