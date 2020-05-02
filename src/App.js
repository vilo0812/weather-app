import React, {Component} from 'react';
import { Grid,Row,Col } from 'react-flexbox-grid'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './components/LocationList';
import './App.css';
const cities = [
	    	"Buenos Aires,ar",
	    	"Bogota,col",
	    	"Mexico,mex",
	    	"washington,us",
	    	"barcelona,es"
	     ];
class App extends Component {
 handleSelectedLocation = city => {
 	console.log(`handleSelectedLocation ${city}`);
 }
  render() {
  	return(
    <div className="App">
	    <LocationList 
	    	cities={cities}
	    	onselectedLocation={this.handleSelectedLocation}
	    />
    </div>
    );
  };
}

export default App;
