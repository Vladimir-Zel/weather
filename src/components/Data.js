import React from 'react';
import Form from "./Form";
import Weather from "./Weather";
import {API_KEY, base_url} from "../utils/Constants";
import FormControl from "./FormControl";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Enter city name'
        }
    }

    // getWeather = (city) => {
    //     fetch(`${base_url}?q=${city}&appid=${API_KEY}&units=metric`)
    //         .then(response => response.json())
    //         .then(data => this.setState({
    //             weatherInfo : {
    //                 city: data.name,
    //                 country: data.sys.country,
    //                 temp: data.main.temp,
    //                 pressure: data.main.pressure,
    //                 sunset: data.sys.sunset
    //             },
    //             message: null
    //         }))
    //         .catch(e => this.setState({
    //             weatherInfo : null,
    //             message: 'Enter correct city name'
    //         }));
    // };

    getWeather = async (city) => {
        try {

            const response = await fetch(`${base_url}?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await response.json();
            this.setState({
                weatherInfo: {
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                },
                message: null
            })
        } catch (e) {
            this.setState({
                weatherInfo: null,
                message: 'Enter correct city name'
            });
        }
    };

    render() {
        return (
            <div>
                <FormControl getWeather={this.getWeather}/>
                <Weather weather={this.state.weatherInfo} message={this.state.message}/>
            </div>
        );
    }
}

export default Data;