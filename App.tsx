import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WeatherSearch } from './components/WeatherSearch';
import { useLocation } from './hooks/useLocation';
import { useWeather } from './hooks/useWeather';
import { WeatherResult } from './components/WeatherResult';

export default function App() {
  const { searchLocation } = useLocation()
  const { weather, fetchWeather, loading: weatherLoading } = useWeather()

  async function handleSearch(city: string) {
    const loc = await searchLocation(city)

    if (loc) {
      fetchWeather(loc.lat, loc.lon)
    }
  }

  return (
    <View style={styles.container}>
      <WeatherSearch onSearch={handleSearch}/>
      {weatherLoading && <Text>fetching weather for location...</Text>}
      {weather && <WeatherResult weather={weather} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 24,
  },
});
