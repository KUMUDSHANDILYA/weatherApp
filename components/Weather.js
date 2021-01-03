import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/weatherConditions';

const Weather = ({ weather, temperature }) => {
  var i;
  if(weather == "Rain"){
    i = 0;
  }
  else if(weather == "Clear"){
    i = 1;
  }
  else if(weather == "Thunderstorm"){
    i = 2;
  }
  else if(weather == "Clouds"){
    i = 3;
  }
  else if(weather == "Snow"){
    i = 4;
  }
  else if(weather == "Drizzle"){
    i = 5;
  }
  else if(weather == "Haze"){
    i = 6;
  }
  else if(weather == "Mizt"){
    i = 7;
  }
  else i = 0;
  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[i].color }
      ]}
    >
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[i].icon}
          color={'#fff'}
        />
        <Text style={styles.tempText}>{temperature}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[i].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[i].subtitle}
        </Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;
