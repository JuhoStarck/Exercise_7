import { useState } from "react"
import { Weather } from "../types/weatherTypes"

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = process.env.EXPO_PUBLIC_API_KEY

export function useWeather() {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  async function fetchWeather(lat: number, lon: number) {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(
        `${WEATHER_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      )

      if (!res.ok) {
        throw new Error('Weather fetch failed')
      }

      const data: Weather = await res.json()
      setWeather(data)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return {
    weather,
    fetchWeather,
    loading,
    error
  }
}