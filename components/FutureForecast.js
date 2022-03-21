/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import moment from 'moment-timezone';

const FutureForecast = ({ data }) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flexDirection: 'row' }}>
      {
        data && data.length > 0 ?
          // eslint-disable-next-line no-shadow
          data.map((data, idx) => (
            idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
          ))
          :
          <View />
      }
    </View>
  );
};

const FutureForecastItem = ({forecastItem}) => {
  const img = {uri: 'http://openweathermap.org/img/wn/' + forecastItem.weather[0].icon + '@2x.png'};
  return (
    <View style={styles.futureForecastItemContainer}>
      <Text style={styles.day}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>Night {forecastItem.temp.night}&#176;C</Text>
      <Text style={styles.temp}>Day {forecastItem.temp.day}&#176;C</Text>
    </View>
  );
};

export default FutureForecast;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
  futureForecastItemContainer: {
    flex: 1,
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  day: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 5,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '300',
    marginBottom: 0,
  },
  temp: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
  },
  otherContainer: {
    paddingRight: 40,
  },
});
