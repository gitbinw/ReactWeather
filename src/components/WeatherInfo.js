import React from 'react';

export default function WeatherInfo(props) {
    return (
        <div className="info-row">
            <span>{props.city}</span>
            <span>{props.temperature}&#8451;</span>
            <span>{props.condition}</span>
        </div>
    );
}