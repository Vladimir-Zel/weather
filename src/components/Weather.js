import React from 'react';

const Weather = (props) => {
    return (
        <div className='infoWeath'>
            {!props.message &&
            <div>
                <p>Location: {props.weather.country}, {props.weather.city}</p>
                <p>Temp: {props.weather.temp}</p>
                <p>Pressure: {props.weather.pressure}</p>
                <p>Sunset: {new Date(props.weather.sunset * 1000).toTimeString()}</p>
            </div>
            }
            <p>{props.message}</p>
        </div>
    );

};

export default Weather;