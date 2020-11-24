import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import WeatherData from './../WeatherLocation/WeatherData'

const ForecastItem = ({weekDay, hour, data}) => {
	return (
		<Fragment>
			<h2>{weekDay} - {hour} hs</h2>
			<WeatherData data={data}/>
		</Fragment>
	);
}
ForecastItem.propTypes = {
	weekDay: PropTypes.string.isRequired,
	hour: PropTypes.number.isRequired,
	data: PropTypes.shape({
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired,
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.string.isRequired,
	})
}
export default ForecastItem;