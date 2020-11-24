import moment from 'moment'
import transWeather from './transformWeather'
import 'moment/locale/es'
const transformForeCast = data => {
	const weather = data.list.filter(item => 
		moment.unix(item.dt).hour() === 8 ||
		moment.unix(item.dt).hour() === 12 ||
		moment.unix(item.dt).hour() === 18	
		).map(item => (
		{
		weekDay: moment.unix(item.dt).format("ddd"),
		hour: moment.unix(item.dt).hour(),
		data: transWeather(item)
		}
		));
	return weather;
};
export default 	transformForeCast