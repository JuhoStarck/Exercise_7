import { useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"

type Props = {
  onSearch: (city: string) => void
}

export function WeatherSearch ({ onSearch }: Props) {
  const [city, setCity] = useState('')

  function handleSubmit() {
    if (!city.trim()) return
    onSearch(city.trim())
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Search for a city"
        value={city}
        onChangeText={setCity}
        onSubmitEditing={handleSubmit}
        style={styles.input}
        returnKeyType="search"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    paddingTop: 24,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 8,
    marginRight: 8,
    height: 40,
  }
})