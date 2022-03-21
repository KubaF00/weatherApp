/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// eslint-disable-next-line prettier/prettier
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, View, ImageBackground } from 'react-native';

import imgBackground from '../images/background/bgc.jpg';
import DateTime from './DateTime';
import WeatherScroll from './WeatherScroll';
import InputCity from './InputCity';

// import api1 from './src/api1.json';
// import api2 from './src/api2.json';

const apiKey = '0a1aa381d1edcd643f32247bb10243a9';

const App = () => {
  const [data, setData] = useState({});
  const [dataCity, setDataCity] = useState({});
  const [elderly, setElderly] = useState();
  const [city, setCity] = useState('Katowice');

  useEffect(() => {
    // setDataCity(api1);
    // setData(api2);

    const cityName = city;
    const API1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=metric`;

    fetch(API1)
      .then(response => response.json())
      .then(result => {
        setDataCity(result);
        fetchDataFromAPI(result.coord.lat, result.coord.lon);
      })
      .catch(function (err) {
        console.log(
          'There has been a problem with your fetch operation: ' + err.message,
        );
        throw err;
      });
  }, [city]);

  const fetchDataFromAPI = (latitude, longitude) => {
    const API2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`;
    fetch(API2)
      .then(res => res.json())
      // eslint-disable-next-line no-shadow
      .then(data => {
        setData(data);
      });
  };

  return (
    <View style={stylesVertical.container}>
      <ImageBackground
        source={imgBackground}
        style={stylesVertical.imgBackground}>
        <DateTime
          current={data.current}
          dataCity={dataCity}
          timeZone={data.timezone}
          lat={data.lat}
          lon={data.lon}
          elderly={elderly}
          onChange={setElderly}
        />
        <InputCity value={city} onChange={setCity} elderly={elderly} />
        <WeatherScroll weatherData={data.daily} elderly={elderly} />
      </ImageBackground>
    </View>
  );
};

export default App;

const stylesVertical = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
});
