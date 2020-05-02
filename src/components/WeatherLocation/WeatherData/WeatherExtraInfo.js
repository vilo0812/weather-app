import React from 'react';
import PropTypes from 'prop-types';
//start css style
import './styles.css';
//end css style
const WeatherExtraInfo = ({humidity, wind}) => (
	<div className="WeatherExtraInfoCount">
		<span className="extraInfoText">{`Humedad: ${humidity} % -`}</span>
		<span className="extraInfoText">{`Viento: ${wind}`}</span>
	</div>
);
WeatherExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.string.isRequired,
};


export default WeatherExtraInfo;