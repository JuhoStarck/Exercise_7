import { View, Text, Image, StyleSheet } from "react-native"
import { Weather } from "../types/weatherTypes"
import { degToDirection } from "../utils/windDirection"

type Props = {
  weather: Weather
}

export function WeatherResult({ weather }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{weather.name}</Text>
      <Image 
        style={styles.icon}
        source={{
          uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        }}
      />
      <Text style={styles.text}>{weather.main.temp.toFixed(2)} °C</Text>
      <Text style={styles.text}>
        {weather.wind.speed} m/s ({degToDirection(weather.wind.deg)})
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    marginTop: 8,
    fontSize: 24,
  },
  icon: {
    width: 100,
    height: 100,
  }
})