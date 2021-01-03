import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';


import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    );
  }

  fetchWeather(lat , lon ) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=a3da14f2b076b1c592f824d039e96fd7&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>

        {isLoading ? <Text>Fetching The Weather</Text> : <Weather weather={this.state.weatherCondition} temperature={this.state.temperature} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
