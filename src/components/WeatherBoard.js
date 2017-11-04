import React from 'react';
import Utility from '../lib/Utility';
import WeatherInfo from './WeatherInfo';

export default class WeatherBoard extends React.Component {
    constructor(props) {
		super(props);

		this.state = {
            arrWeathers: [],
            loading: false
		};
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.cities && nextProps.cities != this.props.cities) {
            this.searchWeather(nextProps.cities);
        }
    }

	searchWeather(strCities) {
		const apiKey = '79289f0e33e5003fce828b0a57e2d496';
		const baseApi = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + apiKey;
		let arrWeathers = [];
        
        if (strCities) {
			const arrCities = strCities.split(',');
			
            arrCities.forEach((city) => {
                let strCity = city.trim();
                if (strCity) {
                    this.setState({loading: true});

                    Utility.getData(baseApi + '&q=' + strCity).then(jData => {
                        arrWeathers.push({
                            city: jData.name,
                            temperature: jData.main.temp,
                            condition: jData.weather[0].main
                        });
                        
                        this.setState({arrWeathers: arrWeathers, loading: false});
                    }).catch(ex => {
                        this.setState({loading: false});
                        console.log('errors:', ex);
                    });
                }
            });
        }
    }
    
    render() {
		const jsxWeatherInfo = this.state.arrWeathers.map((weather, i) => {
			return (
				<WeatherInfo key={i} {...weather} />
			);
        });
        
        return (
            <div className="weather-board">
                <h3 className="weather-title">Weather Information <span>{this.state.loading ? 'Loading ...' : ''}</span></h3>
                <div className="weather-list">
                    <div className="info-row info-columns"><span>City</span><span>Temperature</span><span>Condition</span></div>
                    {jsxWeatherInfo}
                </div>
            </div>
        );
    }
}