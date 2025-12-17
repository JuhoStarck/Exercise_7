import { useState } from "react"
import type { Location } from "../types/locationTypes"

const GEO_URL = 'http://api.openweathermap.org/geo/1.0/direct'
const API_KEY = process.env.EXPO_PUBLIC_API_KEY

export function useLocation() {
  const [location, setLocation] = useState<Location>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  async function searchLocation(city: string) {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(
        `${GEO_URL}?q=${encodeURIComponent(city)}&limit=5&appid=${API_KEY}`
      )
      if (!res.ok) {
        throw new Error('Location search failed')
      }

      const data: Location[] = await res.json()
      if (data.length === 0) {
        throw new Error('City not found')
      }

      setLocation(data[0])
      return data[0]
    } catch (err) {
      setError((err as Error).message)
      return null
    } finally {
      setLoading(false)
    }
  }
  return {
    location,
    searchLocation,
    loading,
    error
  }
}