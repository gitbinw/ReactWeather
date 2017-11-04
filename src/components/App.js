import React from 'react';
import WeatherQuery from './WeatherQuery';
import WeatherBoard from './WeatherBoard';
import s from '../../scss/main.scss';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cities: '',
			strCities: ''
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	handleChange(e) {
		let val = e.target.value;
		
		val = val.replace(/[^0-9a-z,\s]/gi, ',');
		
		this.setState({strCities: val});
	}
	handleSearch() {
		this.setState({cities: this.state.strCities});
	}
	
	render() {
		return (
			<div className="app-container">
				<h2 className="app-title">Search Current Weather</h2>
				<WeatherQuery cities={this.state.strCities} 
					onChange={this.handleChange} onSearch={this.handleSearch} />
		
				<WeatherBoard cities={this.state.cities} />
			</div>
		);
	}
}