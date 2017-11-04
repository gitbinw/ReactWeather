import React from 'react';

export default function WeatherQuery(props) {
    return (
        <div className="weather-query">
            <label>Cities:</label>
            <input type="text" name="cities" placeholder="e.g. Sydney, Melbourne" 
                value={props.cities} onChange={props.onChange} />
            <a className="button" onClick={props.onSearch}>Submit</a>
        </div>
    );
}