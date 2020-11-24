import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtends from './../components/ForecastExtends';
import {connect} from 'react-redux';
import {getForecastDataFromCities} from './../reducers/cities';
export class ForeCastExtendedContainer extends Component {
	render() {
		const { city, forecastData } = this.props;
		return (
			this.props.city &&
			<ForecastExtends
			city={city}
			forecastData={forecastData}
			></ForecastExtends>
		);
	}
}
ForeCastExtendedContainer.propTypes = {
	city: PropTypes.string.isRequired,
	forecastData : PropTypes.array
}
const mapStateToProps = state => ({city: state.city, forecastData: getForecastDataFromCities(state.cities, state.city)});
export default connect(mapStateToProps,null)(ForeCastExtendedContainer);
	