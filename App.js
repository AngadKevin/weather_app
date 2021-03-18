import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { weather: '' };
  }
  getWeather = () => {
    var link = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139';
    return fetch(link)
      .then((response) => response.json())
      .then((weather) => {
        this.setState({ weather: weather });
      });
  };
  componentDidMount() {
    this.getWeather();
  }
  render() {
    if (this.state.weather=='') {
      return(<View><Text>Loading...</Text></View>)
    } else {
      return(<View style = {{marginTop:50,marginLeft:50}}><Text>Temperature: {this.state.weather.main.temp}</Text></View>)
    }
  }
}
