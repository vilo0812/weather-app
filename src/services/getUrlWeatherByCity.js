//start importamos las variables que necesitamos
import {//api de la vista
 url_base_weather,
 api_key
} from './../constants/api_url.js';
//end importamos las variables que necesitamos para introducir en los componentes hijos

const getUrlWeatherByCity = city => {
	return `${url_base_weather}?q=${city}&appid=${api_key}`;

}

export default getUrlWeatherByCity;