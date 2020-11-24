import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid,Row,Col } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForeCastExtendedContainer from './containers/ForeCastExtendedContainer';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';
const cities = [
	    	"Buenos Aires,ar",
	    	"Bogota,col",
	    	"Mexico,mex",
	    	"washington,us",
	    	"barcelona,es",
	    	"caracas,ven"
];
class App extends Component {
  render() {
  	return(
	<Grid fluid>
	<Row>
		<Col xs={12}>
		<AppBar title="Weather App" position = 'sticky'>
		 <Toolbar>
		 	<h1 variant='title' color='inherit'>
				Weather App
		 	</h1>
		 </Toolbar>
		</AppBar>
		</Col>
	</Row>
		<Row>
			<Col xs={12} md={6}>
				 <LocationListContainer 
			    	cities={cities}/>
			</Col>
			<Col xs={12} md={6}>
				<Paper>
					<div className="details">
							<ForeCastExtendedContainer></ForeCastExtendedContainer>
					</div>
				</Paper>
			</Col>
		</Row>
	</Grid>
    /*<div className="App">
	    <LocationList 
	    	cities={cities}
	    	onselectedLocation={this.handleSelectedLocation}
	    />
    </div>*/
    );
  };
}
export default App;
