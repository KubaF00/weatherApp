import React from 'react';
// eslint-disable-next-line prettier/prettier
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import FutureForecast from './FutureForecast';
import moment from 'moment-timezone';

const WeatherScroll = ({weatherData, elderly}) => {
  return (
    <ScrollView
      horizontal={true}
      style={elderly ? stylesElderly.scrollView : styles.scrollView}>
      <CurrentTempEl
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
        elderly={elderly}
      />
      <FutureForecast data={weatherData} />
    </ScrollView>
  );
};

const CurrentTempEl = ({data, elderly}) => {
  if (data && data.weather) {
    // eslint-disable-next-line prettier/prettier
    const img = { uri: 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png' };

    return (
      <View
        style={
          elderly
            ? stylesElderly.currentTempContainer
            : styles.currentTempContainer
        }>
        <Image
          source={img}
          style={elderly ? stylesElderly.image : styles.image}
        />
        <View
          style={
            elderly ? stylesElderly.otherContainer : styles.otherContainer
          }>
          <Text style={elderly ? stylesElderly.day : styles.day}>
            {moment(data.dt * 1000).format('dddd')}
          </Text>
          <Text style={elderly ? stylesElderly.temp : styles.temp}>
            Night {data.temp.night}&#176;C
          </Text>
          <Text style={elderly ? stylesElderly.temp : styles.temp}>
            Day {data.temp.day}&#176;C
          </Text>
        </View>
      </View>
    );
  } else {
    return <View />;
  }
};

export default WeatherScroll;

const styles = StyleSheet.create({
  scrollView: {
    position: 'absolute',
    bottom: 0,
    maxHeight: 165,
    flex: 0.3,
    backgroundColor: '#18181bcc',
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  currentTempContainer: {
    flexDirection: 'row',
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
  },
  day: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 5,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '300',
    marginBottom: 10,
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

const stylesElderly = StyleSheet.create({
  scrollView: {
    position: 'absolute',
    bottom: 0,
    maxHeight: 185,
    flex: 0.5,
    backgroundColor: '#18181bcc',
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  currentTempContainer: {
    flexDirection: 'row',
    backgroundColor: '#00000033',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
  },
  day: {
    fontSize: 25,
    color: 'white',
    backgroundColor: '#3c3c44',
    padding: 5,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '300',
    marginBottom: 10,
  },
  temp: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
  },
  otherContainer: {
    paddingRight: 40,
  },
});
