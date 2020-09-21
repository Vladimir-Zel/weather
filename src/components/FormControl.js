   import React, {Component} from 'react';

class FormControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    handleChange = (event) => {
        this.setState({city: event.target.value});
    };

    handleClick = () => {
        this.props.getWeather(this.state.city);
        this.setState({city: ''});
    };

    render() {
        return (
            <div>
                <input
                    value={this.state.city}
                    onChange={this.handleChange}
                    type='text'
                    placeholder='City'/>
                <button onClick={this.handleClick}>Get weather</button>
            </div>
        );
    }
}

export default FormControl;