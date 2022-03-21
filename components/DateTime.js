/* eslint-disable no-shadow */
// eslint-disable-next-line prettier/prettier
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line prettier/prettier
import { Text, View, StyleSheet, Pressable } from 'react-native';
import moment from 'moment-timezone';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// eslint-disable-next-line prettier/prettier
const WeatherItem = ({ title, value, unit, elderly }) => {
  return (
    <View style={elderly ? stylesElderly.weatherItem : styles.weatherItem}>
      <Text style={elderly ? stylesElderly.weatherItem : styles.weatherItem}>
        {title}
      </Text>
      <Text style={elderly ? stylesElderly.weatherItem : styles.weatherItem}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = ({
  current,
  dataCity,
  lat,
  lon,
  timeZone,
  elderly,
  onChange,
}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? 'pm' : 'am';

      setTime(
        (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) +
          // eslint-disable-next-line prettier/prettier
        ':' +
          // eslint-disable-next-line prettier/prettier
        (minutes < 10 ? '0' + minutes : minutes) +
          // eslint-disable-next-line prettier/prettier
        ampm,
      );
      setDate(days[day] + ', ' + date + ' ' + months[month]);
    }, 1000);
  }, []);

  return (
    <View style={elderly ? stylesElderly.container : styles.container}>
      <View>
        <View>
          <Text style={elderly ? stylesElderly.heading : styles.heading}>
            {time}
          </Text>
        </View>
        <View>
          <Text style={elderly ? stylesElderly.subheading : styles.subheading}>
            {date}
          </Text>
        </View>
        <View
          style={
            elderly
              ? stylesElderly.weatherItemContainer
              : styles.weatherItemContainer
          }>
          <WeatherItem
            title="Pressure"
            value={current ? current.pressure : ''}
            unit="hPa"
            elderly={elderly}
          />
          <WeatherItem
            title="Sunrise"
            value={
              current
                ? moment.tz(current.sunrise * 1000, timeZone).format('HH:mm')
                : ''
            }
            unit="am"
            elderly={elderly}
          />
          <WeatherItem
            title="Sunset"
            value={
              current
                ? moment.tz(current.sunset * 1000, timeZone).format('HH:mm')
                : ''
            }
            unit="pm"
            elderly={elderly}
          />
          <WeatherItem
            title="Desc."
            value={current ? current.weather[0].description : ''}
            unit=""
            elderly={elderly}
          />
        </View>
      </View>
      <View style={elderly ? stylesElderly.latlongActive : styles.latlong}>
        <Text style={elderly ? stylesElderly.timeZone : styles.timeZone}>
          {dataCity.name}
        </Text>
        <Text style={elderly ? stylesElderly.latlong : styles.latlong}>
          {lat}N {lon}E
        </Text>
        <Pressable
          style={elderly ? stylesElderly.button : styles.button}
          onPress={() => onChange(!elderly)}>
          <Text style={elderly ? stylesElderly.textButton : styles.textButton}>
            Change View
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  heading: {
    fontSize: 45,
    color: 'white',
    fontWeight: '300',
  },
  subheading: {
    fontSize: 25,
    color: '#eee',
    fontWeight: '400',
  },
  rightAlign: {
    textAlign: 'right',
    marginTop: 20,
  },
  timeZone: {
    fontSize: 20,
    color: 'white',
  },
  latlong: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
  weatherItemContainer: {
    backgroundColor: '#18181b99',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
    marginTop: 10,
    color: 'white',
  },
  weatherItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
  },
  weatherItemTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#759FBC',
    borderRadius: 5,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    color: 'white',
  },
});

const stylesElderly = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    padding: 15,
  },
  heading: {
    backgroundColor: '#18181b99',
    fontSize: 55,
    color: 'white',
    fontWeight: '400',
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'white',
  },
  subheading: {
    fontSize: 35,
    color: '#eee',
    fontWeight: '500',
  },
  timeZone: {
    fontSize: 35,
    fontWeight: '500',
    color: 'white',
  },
  latlongActive: {
    alignItems: 'center',
    fontSize: 20,
    color: 'white',
    marginBottom: 5,
    fontWeight: '700',
  },
  latlong: {
    display: 'none',
  },
  weatherItemContainer: {
    backgroundColor: '#18181b99',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  weatherItem: {
    fontSize: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#1F5673',
    borderRadius: 5,
    alignItems: 'center',
    padding: 4,
  },
  textButton: {
    fontSize: 25,
    color: 'white',
  },
});

export default DateTime;
