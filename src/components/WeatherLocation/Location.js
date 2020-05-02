import React from 'react';
import PropTypes from 'prop-types';
// start css styles
import './style.css';
// end css styles
// start react funct main
const Location = ({city}) => {
//normal
// const Location = (props) => {
	//normal
	//const  city  = props.city;
	//Destructuring
	// const { city } = props;
	return (
		<div className="locationCont">
			<h1>{city}</h1>
		</div>
	);
};
// end react funct main;
Location.propTypes = {
	city: PropTypes.string.isRequired,
}
export default Location;